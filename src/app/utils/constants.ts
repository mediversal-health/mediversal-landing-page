import { AppFeature, Testimonial, Service, FAQ } from "../types";

export const APP_FEATURES: AppFeature[] = [
  {
    title: "Order Medicines",
    description: "Rx upload | Genuine meds",
    image: "/images/fifth.svg",
  },
  {
    title: "Book Lab Tests",
    description: "Book trusted tests with accurate results and quick reports",
    image: "/images/seventh.svg",
  },
  {
    title: "Consult Doctor",
    description: "Doctors at your fingertip",
    image: "/images/second.svg",
  },
  {
    title: "Homecare Visit",
    description: "Affordable medical care at home",
    image: "/images/third.svg",
  },
  {
    title: "Elder Care",
    description: "Personalized Support for Aging Loved Ones",
    image: "/images/fourth.svg",
  },
  {
    title: "Plan Surgery",
    description: "Expert Surgical Care with Trusted Experts",
    image: "/images/first.svg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rohit Sharma",
    role: "Patient",
    avatar: "/images/man_taking_photo.png",
    content:
      "The doctors and staff were very supportive during my treatment. The hospital facilities are clean and well-managed.",
  },
  {
    name: "Anjali Verma",
    role: "Patient",
    avatar: "/images/man_taking_photo.png",
    content:
      "I had a smooth experience from registration to consultation. The waiting time was minimal, and I felt truly cared for.",
  },
  {
    name: "Rajesh Kumar",
    role: "Patient",
    avatar: "/images/man_taking_photo.png",
    content:
      "After my surgery, the follow-up care was excellent. The staff regularly checked on me and ensured my recovery was comfortable.",
  },
];

export const VIDEO_TESTIMONIALS = [
  {
    title: "Patient Success Story",
    url: "https://youtube.com/shorts/PmOuJOLmlzs?si=2dRhzUKQK6fK6t29",
    name: "Mediversal Healthcare",
    location: "Patna, Bihar",
    thumbnail: "/images/women_sit.png",
  },
  {
    title: "Doctor Experience",
    url: "https://youtube.com/shorts/bFljiSDGd1Q?si=9y1MHFO4Mg07nrvT",
    name: "Mediversal Healthcare",
    location: "Patna, Bihar",
    thumbnail: "/images/women_sit.png",
  },
  {
    title: "Family Healthcare",
    url: "https://youtube.com/shorts/ZFhGOIUy2Go?si=QFzSV9Iw79TMiBaR",
    name: "Mediversal Healthcare",
    location: "Patna, Bihar",
    thumbnail: "/images/women_sit.png",
  },
  {
    title: "Family Healthcare",
    url: "https://youtube.com/shorts/YbbswlVAdIc?si=ljxNspECwxmSPq9w",
    name: "Mediversal Healthcare",
    location: "Patna, Bihar",
    thumbnail: "/images/women_sit.png",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Doctor Consultation",
    description: "Video or in-person",
    image: "/images/second.svg",
    price: "₹399",
    videoOption: true,
    inPersonOption: true,
  },
  {
    title: "Homecare Visit",
    description: "Expert medical advice",
    image: "/images/third.svg",
    price: "₹699",
    videoOption: true,
    inPersonOption: true,
  },
  {
    title: "Lab Tests",
    description: "Comprehensive diagnostics",
    image: "/images/seventh.svg",
    price: "₹299",
    inPersonOption: true,
  },
  {
    title: "Medicines",
    description: "Transparent pricing",
    image: "/images/fifth.svg",
    price: "₹10",
    inPersonOption: true,
  },
  {
    title: "Elder Care",
    description: "Monthly Program",
    image: "/images/fourth.svg",
    price: "₹599",
    videoOption: true,
  },
  {
    title: "Surgery Support",
    description: "Cashless Help",
    image: "/images/first.svg",
    price: "₹50",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "How do I book a consultation?",
    answer:
      "You can book a consultation through our mobile app or website by selecting a doctor and choosing an available time slot.",
  },
  {
    question: "What are the consultation fees?",
    answer:
      "Consultation fees vary by doctor and specialty. You can view the fees before booking an appointment.",
  },
  {
    question: "Can I get a prescription online?",
    answer:
      "Yes, doctors can provide digital prescriptions after your consultation, which you can use at any pharmacy.",
  },
  {
    question: "Is my health information secure?",
    answer:
      "Yes, we use advanced encryption and follow strict privacy protocols to keep your health information secure.",
  },
];
