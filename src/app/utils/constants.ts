import { AppFeature, Testimonial, Service, FAQ } from "../types";

export const APP_FEATURES: AppFeature[] = [
  {
    title: "Order Medicines",
    description: "Rx upload | Genuine meds",
    image: "/images/fifth.png",
  },
  {
    title: "Book Lab Tests",
    description: "Book trusted tests with accurate results and quick reports",
    image: "/images/seventh.png",
  },
  {
    title: "Consult Doctor",
    description: "Doctors at your fingertip",
    image: "/images/second.png",
  },
  {
    title: "Homecare Visit",
    description: "Affordable medical care at home",
    image: "/images/third.png",
  },
  {
    title: "Elder Care",
    description: "Personalized Support for Aging Loved Ones",
    image: "/images/fourth.png",
  },
  {
    title: "Plan Surgery",
    description: "Expert Surgical Care with Trusted Experts",
    image: "/images/first.png",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Smith",
    role: "Patient",
    avatar: "/images/man_taking_photo.png",
    content:
      "MedGeneral has revolutionized how I access healthcare. Quick, convenient, and professional.",
  },
  {
    name: "Robert Johnson",
    role: "Senior Patient",
    avatar: "/images/man_taking_photo.png",
    content:
      "The app is so easy to use, and I can consult with my doctor from home.",
  },
  {
    name: "Dr. Emily Davis",
    role: "General Physician",
    avatar: "/images/man_taking_photo.png",
    content:
      "As a healthcare provider, this platform makes it easy to connect with patients.",
  },
];

export const VIDEO_TESTIMONIALS = [
  {
    title: "Patient Success Story",
    url: "https://www.youtube.com/shorts/CGVlU9d8qTE",
    name: "Priya Sharma",
    location: "Patna, Bihar",
  },
  {
    title: "Doctor Experience",
    url: "https://www.youtube.com/shorts/g1bbhFg0Njs",
    name: "Priya Sharma",
    location: "Patna, Bihar",
  },
  {
    title: "Family Healthcare",
    url: "https://youtube.com/shorts/YbbswlVAdIc?si=ljxNspECwxmSPq9w",
    name: "Priya Sharma",
    location: "Patna, Bihar",
  },
  {
    title: "Family Healthcare",
    url: "https://youtube.com/shorts/YbbswlVAdIc?si=ljxNspECwxmSPq9w",
    name: "Priya Sharma",
    location: "Patna, Bihar",
  },
  {
    title: "Patient Testimonial 1",
    url: "https://youtube.com/shorts/YbbswlVAdIc?si=ljxNspECwxmSPq9w",
    name: "Priya Sharma",
    location: "Patna, Bihar",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Doctor Consultation",
    description: "Video or in-person",
    image: "/images/second.png",
    price: "₹399",
    videoOption: true,
    inPersonOption: true,
  },
  {
    title: "Homecare Visit",
    description: "Expert medical advice",
    image: "/images/third.png",
    price: "₹699",
    videoOption: true,
    inPersonOption: true,
  },
  {
    title: "Lab Tests",
    description: "Comprehensive diagnostics",
    image: "/images/seventh.png",
    price: "₹299",
    inPersonOption: true,
  },
  {
    title: "Medicines",
    description: "Transparent pricing",
    image: "/images/fifth.png",
    price: "₹10",
    inPersonOption: true,
  },
  {
    title: "Elder Care",
    description: "Monthly Program",
    image: "/images/fourth.png",
    price: "₹599",
    videoOption: true,
  },
  {
    title: "Surgery Support",
    description: "Cashless Help",
    image: "/images/first.png",
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
