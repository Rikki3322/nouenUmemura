// ページは内容
'use client';

import React from 'react';

import AboutSection from '@/app/stay/About';
import AccessSection from '@/app/stay/Access';
import AmenitiesSection from '@/app/stay/Amenities';
import ExperienceSection from '@/app/stay/Experience';
import FAQSection from '@/app/stay/FAQSection';
import FoodSection from '@/app/stay/Food';
import HeroSection from '@/app/stay/Hero';
import RoomSection from '@/app/stay/Room';
import StayCTAbutton from '@/app/stay/StayCTAbutton';

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
