// ページは内容
'use client';

import React from 'react';
import StayCTAbutton from './sections/StayCTAbutton';
import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import RoomSection from './sections/Room';
import AmenitiesSection from './sections/Amenities';
import FoodSection from './sections/Food';
import ExperienceSection from './sections/Experience';
import AccessSection from './sections/Access';
import FAQSection from './sections/FAQSection';

const StayPage = () => {
  return (
    <div>
      <main>
        <StayCTAbutton />
        <HeroSection />
        <AboutSection />
        <RoomSection />
        <AmenitiesSection />
        <FoodSection />
        <ExperienceSection />
        <AccessSection />
        <FAQSection />
      </main>
    </div>
  );
};

export default StayPage;
