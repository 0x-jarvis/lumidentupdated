import { useEffect, useRef, useState } from "react";

const INTRO_SEEN_KEY = "lumident_intro_seen";
/** Exit opacity transition length (must match Tailwind duration below). */
const FADE_OUT_DURATION_MS = 1000;
/** Wait for exit transition to finish before unmounting. */
const FADE_OUT_MS = FADE_OUT_DURATION_MS + 80;

type IntroOverlayProps = {
  onComplete: () => void;
};

const IntroOverlay = ({ onComplete }: IntroOverlayProps) => {
  const [isEnding, setIsEnding] = useState(false);
  const [appeared, setAppeared] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setAppeared(true));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const finishIntro = () => {
    if (isEnding) return;

    sessionStorage.setItem(INTRO_SEEN_KEY, "true");
    setIsEnding(true);
    timeoutRef.current = window.setTimeout(onComplete, FADE_OUT_MS);
  };

  const visible = !isEnding && appeared;
  const opacityClass = isEnding ? "opacity-0" : visible ? "opacity-100" : "opacity-0";
  const durationClass = isEnding ? "duration-1000" : "duration-500";

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-white transition-opacity ease-out ${durationClass} ${opacityClass}`}
      aria-hidden={isEnding}
    >
      <video
        className="h-full w-full object-contain"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        onEnded={finishIntro}
        onError={finishIntro}
      >
        <source src="/lumident-intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IntroOverlay;
