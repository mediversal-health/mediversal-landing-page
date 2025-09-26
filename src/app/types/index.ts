export interface AppFeature {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export interface VideoTestimonial {
  title: string;
  thumbnail: string;
  duration: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  price: string;
  videoOption?: boolean;
  inPersonOption?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}
