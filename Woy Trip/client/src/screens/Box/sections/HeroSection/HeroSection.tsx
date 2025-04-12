import React from "react";
import { Button } from "../../../../components/ui/button";

import hero from "../../../../assets/images/1.png"

export const HeroSection = (): JSX.Element => {
  return (
    <section className="pt-10 relative w-full min-h-screen bg-gradient-to-b from-[#7DD2FF]/45 to-transparent">
      {/* Hero Content Wrapper */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20">
        
        {/* Left Content */}
        <div className="text-center lg:text-left pt-16 lg:pt-36 max-w-2xl">
          {/* Subheading */}
          <p className="font-bold text-[#00c7ff] text-lg lg:text-xl font-['Poppins',Helvetica] uppercase">
            Best Destinations Around the World
          </p>

          {/* Main Heading */}
          <h1 className="mt-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-[86px] tracking-tight font-['Volkhov',Helvetica]">
            Travel, enjoy
            <br /> and live a new
            <br /> and full life
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* CTA Button */}
          <Button className="mt-6 md:mt-10 px-8 py-3 md:w-[436px] md:h-[58px] bg-[#38d4ff] rounded-lg shadow-md hover:bg-[#38d4ff]/90">
            <span className="font-medium text-lg text-white font-['Poppins',Helvetica]">
              Find out more
            </span>
          </Button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-[300px] md:w-[400px] lg:w-[500px] overflow-hidden object-cover scale-150"
            src={hero}
            alt="Main travel illustration"
          />
        </div>
      </div>
    </section>
  );
};
