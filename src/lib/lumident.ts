import orthodonticsImage from "@/assets/department-braces.svg";
import adultsCosmeticsImage from "@/assets/department-tooth-spark.svg";

export type DepartmentKey = "pediatric" | "orthodontics" | "adultsCosmetics";

export const clinicInfo = {
  phoneHref: "tel:01342333",
  phoneDisplay: "01 342333",
  location: "Madam Curie Street, Hatab 2614 Building, Beirut",
  coordinates: "33.89215095787689, 35.484847912962046",
  mapUrl: "https://maps.google.com/?q=33.89215095787689,35.484847912962046",
  hours: {
    weekdays: "Mon - Fri: 9:00am - 7:00pm",
    weekends: "Sat - Sun: Closed",
  },
};

export const departmentBooking = {
  pediatric: {
    key: "pediatric",
    title: "Pediatric Dentistry",
    shortTitle: "Pediatric",
    page: "/pediatric",
    description:
      "Warm specialist care for infants, children, and teens, with a focus on prevention and confidence-building visits.",
    services: [
      "First dental visits",
      "Preventive care",
      "Cavity treatment",
      "Urgent dental concerns",
    ],
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=96171582813&text=Hello%2C%0AI%27d+like+to+schedule+an+appointment+with+the+Pediatric+department%2C+please.&type=phone_number&app_absent=0",
    consultationLabel: "Book Pediatric Consultation",
    questionLabel: "Ask the Pediatric Team",
    imageSrc: "/baby-teeth.png",
  },
  orthodontics: {
    key: "orthodontics",
    title: "Orthodontics",
    shortTitle: "Orthodontics",
    page: "/orthodontics",
    description:
      "Practical alignment planning for children, teens, and adults using braces, aligners, and growth-guidance appliances.",
    services: [
      "Clear aligners",
      "Metal and ceramic braces",
      "Growth guidance",
      "Retention planning",
    ],
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=96171974685&text=Hello%2C+%0AI%27d+like+to+schedule+an+appointment+with+the+Orthodontics+department%2C+please.&type=phone_number&app_absent=0",
    consultationLabel: "Book Orthodontic Consultation",
    questionLabel: "Ask About Treatment Options",
    imageSrc: orthodonticsImage,
  },
  adultsCosmetics: {
    key: "adultsCosmetics",
    title: "Adults & Cosmetics",
    shortTitle: "Adults & Cosmetics",
    page: "/gp-cosmetics",
    description:
      "Adult general, restorative, and cosmetic dentistry planned around long-term health, function, and natural-looking results.",
    services: [
      "Preventive care",
      "Crowns and bridges",
      "Root canal treatment",
      "Whitening and veneers",
    ],
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=96176635111&text=Hello%2C+%0AI%27d+like+to+schedule+an+appointment+with+the+Adults+%26+Cosmetics+department%2C+please.&type=phone_number&app_absent=0",
    consultationLabel: "Book Adults & Cosmetics Consultation",
    questionLabel: "Ask About Adult Treatments",
    imageSrc: adultsCosmeticsImage,
  },
} as const satisfies Record<
  DepartmentKey,
  {
    key: DepartmentKey;
    title: string;
    shortTitle: string;
    page: string;
    description: string;
    services: string[];
    whatsappUrl: string;
    consultationLabel: string;
    questionLabel: string;
    imageSrc: string;
  }
>;
