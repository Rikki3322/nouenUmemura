// ページは内容
'use client';

import React from 'react';

import AboutSection from './sections/About';
import AccessSection from './sections/Access';
import AmenitiesSection from './sections/Amenities';
import ExperienceSection from './sections/Experience';
import FAQSection from './sections/FAQSection';
import FoodSection from './sections/Food';
import HeroSection from './sections/Hero';
import RoomSection from './sections/Room';
import StayCTAbutton from './sections/StayCTAbutton';

const StayPage = () => (
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

export default StayPage;
