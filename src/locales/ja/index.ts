import contactForm from './contactForm.json';
import Footer from './Footer.json';
import Header from './Header.json';
import ecSites from './ecSites.json';
import furusato from './furusato.json';
import nohaku from './nohaku.json';
import privacyPolicy from './privacyPolicy.json';
import tokuteiShoho from './tokuteiShoho.json';

// homepage フォルダ内のインポート
import action from './homepage/action.json';
import cta from './homepage/cta.json';
import emotionalValue from './homepage/emotionalValue.json';
import FAQSection from './homepage/FAQSection.json';
import finalPushSection from './homepage/finalPushSection.json';
import hero from './homepage/hero.json';
import immediatePurchase from './homepage/immediatePurchase.json';
import orderOptions from './homepage/orderOptions.json';
import priceJustification from './homepage/priceJustification.json';
import problem from './homepage/problem.json';
import riskReduction from './homepage/riskReduction.json';
import scheduledPurchase from './homepage/scheduledPurchase.json';
import solution from './homepage/solution.json';
import subscriptionPurchase from './homepage/subscriptionPurchase.json';
import tabSelector from './homepage/tabSelector.json';
import urgency from './homepage/urgency.json';
import valueProof from './homepage/valueProof.json';

// stay フォルダ内のインポート
import stayAbout from './stay/about.json';
import stayAccess from './stay/access.json';
import stayAmenities from './stay/amenities.json';
import stayExperience from './stay/experience.json';
import stayFAQSection from './stay/FAQSection.json';
import stayFood from './stay/food.json';
import stayHero from './stay/hero.json';
import stayRoom from './stay/room.json';
import stayCTA from './stay/cta.json';

export default {
  homepage: {
    action,
    cta,
    emotionalValue,
    FAQSection,
    finalPushSection,
    hero,
    immediatePurchase,
    orderOptions,
    priceJustification,
    problem,
    riskReduction,
    scheduledPurchase,
    solution,
    subscriptionPurchase,
    tabSelector,
    urgency,
    valueProof,
  },
  stay: {
    about: stayAbout,
    access: stayAccess,
    amenities: stayAmenities,
    experience: stayExperience,
    FAQSection: stayFAQSection,
    food: stayFood,
    hero: stayHero,
    room: stayRoom,
    cta: stayCTA,
  },
  contactForm,
  Footer,
  Header,
  ecSites,
  furusato,
  nohaku,
  privacyPolicy,
  tokuteiShoho,
};
