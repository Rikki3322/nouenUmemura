'use client';

import {
  Instagram,
  MessageCircle,
  Mountain,
} from '@/components/icons/lucide-icons';
import { Button } from '@/app/ui/button';

const NohakuCTAbutton = () => {
  return (
    <div className="bg-white">
      {/* Fixed Button - Desktop */}
      <div className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <a
          href="https://line.me/R/ti/p/@890kprkl?oat_content=url"
          className="hover:text-green-600 transition-colors flex flex-col items-center px-4 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="https://www.instagram.com/asparagus.saga/"
          className="text-gray-600 hover:text-green-600 transition-colors flex flex-col items-center px-4 py-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-6 rounded-full shadow-lg transition-all duration-300 flex flex-col items-center gap-2 hover:shadow-xl"
        >
          <Mountain size={20} />
          <span className="font-medium text-sm writing-mode-vertical-rl text-orientation-mixed">
            農泊を体験する
          </span>
        </a>
      </div>

      {/* Fixed Button - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 p-4">
        <Button asChild variant="ctaFixed">
          <span>
            <Mountain size={20} />
            農泊はこちら
          </span>
        </Button>
      </div>
    </div>
  );
};

export default NohakuCTAbutton;
