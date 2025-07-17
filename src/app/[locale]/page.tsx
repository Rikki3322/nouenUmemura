'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ActionSection from '@/components/sections/ActionSection/ActionSection';
import CTAbutton from '@/components/sections/CTAbutton';
import EmotionalValueSection from '@/components/sections/EmotionalValueSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalPushSection from '@/components/sections/FinalPushSection';
import HeroSection from '@/components/sections/HeroSection';
import PriceJustificationSection from '@/components/sections/PriceJustificationSection';
import ProblemSection from '@/components/sections/ProblemSection';
import RiskReductionSection from '@/components/sections/RiskReductionSection';
import SolutionSection from '@/components/sections/SolutionSection';
import UrgencySection from '@/components/sections/UrgencySection';
import ValueProofSection from '@/components/sections/ValueProofSection';
import { useSeasonalContents } from '@/data/useSeasonalContents';
import { getCurrentSeasonalContent } from '@/utils/season-detector';

const HomePage = () => {
  const t = useTranslations('homepage.home');

  const seasonStatus = getCurrentSeasonalContent();
  if (!seasonStatus) {
    return (
      <div className="p-8 text-center text-red-600">{t('error.noSeason')}</div>
    );
  }

  const { season, phase } = seasonStatus;
  const seasonalContents = useSeasonalContents();

  const seasonal = seasonalContents.find(
    (content) => content.season === season && content.phase === phase
  );

  if (!seasonal) {
    return (
      <div className="p-8 text-center text-red-600">{t('error.noContent')}</div>
    );
  }

  const seasonType = { season, phase };

  return (
    <div>
      <Header />
      <main>
        <CTAbutton />
        <HeroSection />
        <UrgencySection seasonType={seasonType} seasonal={seasonal} />
        <ProblemSection />
        <SolutionSection />
        <ValueProofSection />
        <EmotionalValueSection />
        <RiskReductionSection />
        <PriceJustificationSection />
        <ActionSection seasonType={seasonType} seasonal={seasonal} />
        <FinalPushSection seasonType={seasonType} seasonal={seasonal} />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
