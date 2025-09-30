import React from "react";
import { Layout } from "../app/components/layout/Layout";
import { Hero } from "../app/components/sections/Hero";
import { AppFeatures } from "../app/components/sections/AppFeatures";
import { GetApp } from "../app/components/sections/GetApp";
import { VideoTestimonials } from "../app/components/sections/VideoTestimonials";
import { Testimonials } from "../app/components/sections/Testimonials";
import { Services } from "../app/components/sections/Services";
import { Partners } from "../app/components/sections/Partners";
import { FAQ } from "../app/components/sections/FAQ";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <AppFeatures />
      <GetApp />
      <VideoTestimonials />
      <Testimonials />
      <Services />
      {/* <Partners /> */}
      <FAQ />
    </Layout>
  );
};

export default HomePage;
