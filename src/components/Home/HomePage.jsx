import React from "react";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";

import iphone from "../../assets/img/iphone-14-pro.webp";
import mac from "../../assets/img/mac-system-cut.jfif";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the power of the latest iPhone 14 with our most Pro Camera ever."
        link="#"
        image={iphone}
      />
      {/* Featured Products */}
      <FeaturedProducts />

      {/* Hero Section */}
      <HeroSection
        title="Build the ulimate setup"
        subtitle="You can add studio display and colour-matched magic accessories to cour bag after configure your mac mini."
        link="#"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
