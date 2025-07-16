import Image from 'next/image';
import React from 'react';

import { Calendar,Users } from '@/components/icons/lucide-icons';

const ExperienceSection = () => (
    <div className="bg-white">
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 leading-relaxed">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              アスパラ収穫体験
            </h3>
            <p className="text-lg text-gray-600">（3月〜10月）</p>
            <p className="text-lg text-gray-600">
              四季折々の農家体験をお楽しみください。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Asparagus Harvesting */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/images/stay/experience/001.webp"
                  alt="アスパラ収穫体験"
                  fill
                  className="object-cover filter saturate-110 brightness-95"
                />
                <div className="absolute inset-0 bg-[#fefae0]/20" />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  朝靄の畑で、自然と出会う。
                </h4>
                <p className="text-gray-600 mb-4">
                  朝露のなかでの収穫は、忘れられない旅の思い出に。
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-2" />
                  <span>3月〜10月</span>
                </div>
              </div>
            </div>

            {/* BBQ Experience */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/images/stay/experience/002.webp"
                  alt="日帰りBBQ体験"
                  fill
                  className="object-cover filter saturate-110 brightness-95"
                />
                <div className="absolute inset-0 bg-[#fefae0]/20" />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  里山で、火を囲む。
                </h4>
                <p className="text-gray-600 mb-4">
                  好きな食材で楽しめる、自然のなかの贅沢な時間。
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users size={16} className="mr-2" />
                  <span>持ち込みBBQ可能</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default ExperienceSection;
