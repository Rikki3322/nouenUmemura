'use client';

import { useTranslations } from 'next-intl';

import {
  Car,
  FishSymbol,
  MapPin,
  Plane,
  TrainFront,
} from '@/components/icons/lucide-icons';

const AccessSection = () => {
  const t = useTranslations('stay.access');

  return (
    <div className="bg-white">
      <section id="access" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('heading')}
              <br />
              {t('subheading')}
            </h3>
            <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-2">
              <MapPin className="text-amber-600" size={24} />
              {t('address')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[auto_auto] gap-12">
            {/* アクセス方法 */}
            <div className="lg:row-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {t('accessTitle')}
                </h4>
                <div className="space-y-3">
                  {/* 高速道路 */}
                  <div className="flex flex-col gap-2">
                    <Car className="text-amber-600 mt-1" size={24} />
                    <h5 className="font-semibold text-gray-900">
                      {t('car.title')}
                    </h5>
                    <p
                      className="text-gray-600 text-sm"
                      dangerouslySetInnerHTML={{
                        __html: t.raw('car.description'),
                      }}
                    />
                  </div>

                  {/* 電車 */}
                  <div className="flex flex-col gap-2">
                    <TrainFront className="text-amber-600 mt-1" size={24} />
                    <h5 className="font-semibold text-gray-900">
                      {t('train.title')}
                    </h5>
                    <p
                      className="text-gray-600 text-sm"
                      dangerouslySetInnerHTML={{
                        __html: t.raw('train.description'),
                      }}
                    />
                  </div>

                  {/* 飛行機 */}
                  <div className="flex flex-col gap-2">
                    <Plane className="text-amber-600 mt-1" size={24} />
                    <h5 className="font-semibold text-gray-900">
                      {t('plane.title')}
                    </h5>
                    <p
                      className="text-gray-600 text-sm"
                      dangerouslySetInnerHTML={{
                        __html: t.raw('plane.description'),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="lg:col-span-2 h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.7674995432376!2d129.97329291008643!3d33.29874507333924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356a802ed448edfd%3A0x10c5922fb38074f6!2z44CSODQ5LTUyNTEg5L2Q6LOA55yM5LyK5LiH6YeM5biC5aSn5bed55S65aSn5bed6YeO77yR77yT77yX77yV4oiS77yS!5e0!3m2!1sja!2sjp!4v1750913213247!5m2!1sja!2sjp"
                className="w-full h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* 観光案内 */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                {t('tourTitle')}
              </h4>
              <div className="space-y-4">
                {['within20', 'within30', 'within60', 'local'].map((key, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {key === 'local' ? (
                      <FishSymbol className="text-amber-600 mt-1 w-8 h-8 sm:w-6 sm:h-6" />
                    ) : (
                      <Car className="text-amber-600 mt-1 w-8 h-8 sm:w-6 sm:h-6" />
                    )}
                    <p className="text-gray-700">{t(`sightseeing.${key}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessSection;
