import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhatsAppCTA from "./WhatsAppCTA";
import { departmentBooking, type DepartmentKey } from "@/lib/lumident";

type Scores = Record<DepartmentKey, number>;

type Answer = {
  label: string;
  scores: Partial<Record<DepartmentKey, number>>;
  next?: DepartmentKey;
};

type Question = {
  id: string;
  label: string;
  answers: Answer[];
};

const departmentKeys: DepartmentKey[] = ["pediatric", "orthodontics", "adultsCosmetics"];

const patientTypeQuestion: Question = {
  id: "patientType",
  label: "Who is the patient?",
  answers: [
    {
      label: "A child (0–14)",
      scores: { pediatric: 2, orthodontics: 1 },
      next: "pediatric",
    },
    {
      label: "A teen or adult needing teeth straightening",
      scores: { orthodontics: 2, adultsCosmetics: 1 },
      next: "orthodontics",
    },
    {
      label: "An adult seeking general, restorative, or cosmetic care",
      scores: { adultsCosmetics: 2, orthodontics: 1 },
      next: "adultsCosmetics",
    },
  ],
};

const branchQuestions: Record<DepartmentKey, [Question, Question]> = {
  pediatric: [
    {
      id: "mainNeedPediatric",
      label: "What do you need help with most?",
      answers: [
        {
          label: "First visit, checkup, or prevention",
          scores: { pediatric: 2 },
        },
        {
          label: "Tooth pain, decay, or an urgent issue",
          scores: { pediatric: 2, adultsCosmetics: 1 },
        },
        {
          label: "Bite development or early orthodontic concern",
          scores: { orthodontics: 2, pediatric: 1 },
        },
      ],
    },
    {
      id: "treatmentDirectionPediatric",
      label: "What best describes your situation?",
      answers: [
        {
          label: "Routine care and prevention",
          scores: { pediatric: 2 },
        },
        {
          label: "A current issue that needs treatment",
          scores: { pediatric: 2 },
        },
        {
          label: "An early orthodontic opinion",
          scores: { orthodontics: 2, pediatric: 1 },
        },
      ],
    },
  ],
  orthodontics: [
    {
      id: "mainNeedOrthodontics",
      label: "What do you need help with most?",
      answers: [
        {
          label: "Crooked teeth or bite alignment",
          scores: { orthodontics: 2 },
        },
        {
          label: "Braces, aligners, or appliance options",
          scores: { orthodontics: 2 },
        },
        {
          label: "Not sure if I need orthodontics or general care",
          scores: { adultsCosmetics: 2, orthodontics: 1 },
        },
      ],
    },
    {
      id: "treatmentDirectionOrthodontics",
      label: "What are you mainly looking for?",
      answers: [
        {
          label: "A straighter smile",
          scores: { orthodontics: 2 },
        },
        {
          label: "Bite correction or alignment planning",
          scores: { orthodontics: 2 },
        },
        {
          label: "Help deciding between orthodontics and other care",
          scores: { adultsCosmetics: 2, orthodontics: 1 },
        },
      ],
    },
  ],
  adultsCosmetics: [
    {
      id: "mainNeedAdultsCosmetics",
      label: "What do you need help with most?",
      answers: [
        {
          label: "Checkup, hygiene, or preventive care",
          scores: { adultsCosmetics: 2 },
        },
        {
          label: "Pain, broken tooth, crown, or root canal",
          scores: { adultsCosmetics: 2 },
        },
        {
          label: "Whitening, veneers, or cosmetic improvement",
          scores: { adultsCosmetics: 2 },
        },
        {
          label: "Teeth straightening or bite improvement",
          scores: { orthodontics: 2, adultsCosmetics: 1 },
        },
      ],
    },
    {
      id: "treatmentDirectionAdultsCosmetics",
      label: "What are you mainly focused on?",
      answers: [
        {
          label: "Long-term oral health and function",
          scores: { adultsCosmetics: 2 },
        },
        {
          label: "Fixing a current dental issue",
          scores: { adultsCosmetics: 2 },
        },
        {
          label: "Improving the appearance of my smile",
          scores: { adultsCosmetics: 2 },
        },
        {
          label: "Not sure if orthodontics is needed instead",
          scores: { orthodontics: 2, adultsCosmetics: 1 },
        },
      ],
    },
  ],
};

const results = {
  pediatric: {
    title: departmentBooking.pediatric.title,
    imageSrc: departmentBooking.pediatric.imageSrc,
    to: departmentBooking.pediatric.page,
    desc: "Gentle, specialist care for growing smiles.",
    color: "from-rose-500/20 to-pink-500/10",
    bookingUrl: departmentBooking.pediatric.whatsappUrl,
  },
  orthodontics: {
    title: departmentBooking.orthodontics.title,
    imageSrc: departmentBooking.orthodontics.imageSrc,
    to: departmentBooking.orthodontics.page,
    desc: "Aligned confidence with braces, aligners, and growth guidance.",
    color: "from-blue-500/20 to-indigo-500/10",
    bookingUrl: departmentBooking.orthodontics.whatsappUrl,
  },
  adultsCosmetics: {
    title: departmentBooking.adultsCosmetics.title,
    imageSrc: departmentBooking.adultsCosmetics.imageSrc,
    to: departmentBooking.adultsCosmetics.page,
    desc: "Adult general, restorative, and cosmetic care in one department.",
    color: "from-amber-500/20 to-orange-500/10",
    bookingUrl: departmentBooking.adultsCosmetics.whatsappUrl,
  },
} as const;

const initialScores = (): Scores => ({
  pediatric: 0,
  orthodontics: 0,
  adultsCosmetics: 0,
});

const DepartmentFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPath, setSelectedPath] = useState<DepartmentKey | null>(null);
  const [scores, setScores] = useState<Scores>(initialScores);
  const [done, setDone] = useState(false);

  const totalQuestions = 3;

  const applyScores = (currentScores: Scores, answerScores: Answer["scores"]): Scores => {
    const nextScores = { ...currentScores };

    for (const department of departmentKeys) {
      nextScores[department] += answerScores[department] ?? 0;
    }

    return nextScores;
  };

  const handleAnswer = (answer: Answer) => {
    const nextScores = applyScores(scores, answer.scores);
    setScores(nextScores);

    if (currentStep === 0 && answer.next) {
      setSelectedPath(answer.next);
    }

    if (currentStep === totalQuestions - 1) {
      setDone(true);
      return;
    }

    setCurrentStep((step) => step + 1);
  };

  const reset = () => {
    setCurrentStep(0);
    setSelectedPath(null);
    setScores(initialScores());
    setDone(false);
  };

  const getCurrentQuestion = (): Question => {
    if (currentStep === 0 || !selectedPath) {
      return patientTypeQuestion;
    }

    return branchQuestions[selectedPath][currentStep - 1];
  };

  const getResult = () => {
    const sorted = [...departmentKeys].sort((a, b) => {
      if (scores[b] !== scores[a]) {
        return scores[b] - scores[a];
      }

      if (selectedPath === a) return -1;
      if (selectedPath === b) return 1;
      return 0;
    });

    return results[sorted[0]];
  };

  const currentQuestion = getCurrentQuestion();
  const result = done ? getResult() : null;

  return (
    <div className="glass-card mx-auto w-full max-w-3xl p-5 sm:p-6 md:p-8 xl:p-10">
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex gap-2 mb-6">
              {Array.from({ length: totalQuestions }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 flex-1 rounded-full transition-all duration-500"
                  style={{
                    background: i <= currentStep ? "hsl(var(--primary))" : "hsl(var(--muted))",
                  }}
                />
              ))}
            </div>

            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
              Question {currentStep + 1} of {totalQuestions}
            </p>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              {currentQuestion.label}
            </h3>

            <div className="space-y-3">
              {currentQuestion.answers.map((answer, i) => (
                <motion.button
                  key={answer.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleAnswer(answer)}
                  className="group flex w-full items-center justify-between gap-4 rounded-xl border border-border/40 p-4 text-left transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 sm:p-5"
                >
                  <span className="text-sm font-medium leading-relaxed text-foreground sm:text-[0.95rem]">{answer.label}</span>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${result.color} flex items-center justify-center mx-auto mb-5 p-3`}>
              <img src={result.imageSrc} alt={result.title} className="h-full w-full object-contain" />
            </div>
            <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-2">We recommend</p>
            <h3 className="font-serif text-3xl font-semibold text-foreground mb-3">{result.title}</h3>
            <p className="text-muted-foreground mb-6">{result.desc}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Link to={result.to}>
                <Button className="w-full rounded-full gap-2 shadow-lg sm:w-auto">
                  <CheckCircle2 size={16} />
                  Explore {result.title}
                </Button>
              </Link>
              <WhatsAppCTA label="Book This Department" href={result.bookingUrl} variant="outline" />
              <Button variant="outline" className="rounded-full gap-2 sm:w-auto" onClick={reset}>
                <RotateCcw size={14} />
                Retake Quiz
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default DepartmentFinder;
