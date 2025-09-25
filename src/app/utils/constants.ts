import {
  AppFeature,
  Testimonial,
  VideoTestimonial,
  Service,
  FAQ,
} from "../types";

export const APP_FEATURES: AppFeature[] = [
  {
    title: "Video Consultation",
    description: "Connect with doctors via video calls",
    image: "/images/first.png",
  },
  {
    title: "Digital Prescription",
    description: "Get digital prescriptions instantly",
    image: "/images/second.png",
  },
  {
    title: "Lab Results",
    description: "View your lab results online",
    image: "/images/third.png",
  },
  {
    title: "Appointment Booking",
    description: "Book appointments with ease",
    image: "/images/fourth.png",
  },
  {
    title: "Medicine Delivery",
    description: "Get medicines delivered to your door",
    image: "/images/fifth.png",
  },
  {
    title: "Health Records",
    description: "Access your complete health records",
    image: "/images/sixth.png",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Smith",
    role: "Patient",
    avatar: "/images/avatar1.jpg",
    content:
      "MedGeneral has revolutionized how I access healthcare. Quick, convenient, and professional.",
  },
  {
    name: "Robert Johnson",
    role: "Senior Patient",
    avatar: "/images/avatar2.jpg",
    content:
      "The app is so easy to use, and I can consult with my doctor from home.",
  },
  {
    name: "Dr. Emily Davis",
    role: "General Physician",
    avatar: "/images/avatar3.jpg",
    content:
      "As a healthcare provider, this platform makes it easy to connect with patients.",
  },
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    title: "Patient Success Story",
    thumbnail: "/images/video1-thumb.jpg",
    duration: "2:30",
  },
  {
    title: "Doctor Experience",
    thumbnail: "/images/video2-thumb.jpg",
    duration: "1:45",
  },
  {
    title: "Family Healthcare",
    thumbnail: "/images/video3-thumb.jpg",
    duration: "3:15",
  },
];

export const SERVICES: Service[] = [
  {
    title: "General Consultation",
    description: "Connect with experienced general practitioners",
    image: "/images/general-consultation.jpg",
  },
  {
    title: "Lab Tests",
    description: "Book and track your laboratory tests",
    image: "/images/lab-tests.jpg",
  },
  {
    title: "Specialist Care",
    description: "Access to specialist doctors",
    image: "/images/specialist-care.jpg",
  },
  {
    title: "Mental Health",
    description: "Professional mental health support",
    image: "/images/mental-health.jpg",
  },
  {
    title: "Chronic Care",
    description: "Ongoing care for chronic conditions",
    image: "/images/chronic-care.jpg",
  },
  {
    title: "Preventive Care",
    description: "Preventive healthcare services",
    image: "/images/preventive-care.jpg",
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
