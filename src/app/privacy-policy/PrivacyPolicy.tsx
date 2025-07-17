'use client';

import Link from 'next/link';
import { useLocale,useTranslations } from 'next-intl';

import { Breadcrumb } from '@/components/layout/Breadcrumb';

const PrivacyPolicy = () => {
  const t = useTranslations('privacyPolicy');
  const locale = useLocale();

  const breadcrumbItems = [
    { label: t('breadcrumb.home'), href: `/${locale}` },
    { label: t('breadcrumb.privacyPolicy') },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      {/* パンくず */}
      <Breadcrumb items={breadcrumbItems} />

      <h1 className="text-3xl font-bold mb-20 border-b border-black pb-4">
        {t('title')}
      </h1>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.basicPolicy.title')}
        </h2>
        <p>{t('sections.basicPolicy.body')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.definition.title')}
        </h2>
        <p>{t('sections.definition.body')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.scope.title')}
        </h2>
        <p>{t('sections.scope.body')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.purpose.title')}
        </h2>
        <ul className="list-disc list-inside space-y-1">
          {(t.raw('sections.purpose.items') as string[]).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.businessInfo.title')}
        </h2>
        <p>
          {t.rich('sections.businessInfo.body', {
            br: () => <br />,
          })}
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.management.title')}
        </h2>
        <p>{t('sections.management.body1')}</p>
        <p>{t('sections.management.body2')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.thirdParty.title')}
        </h2>
        <p>{t('sections.thirdParty.body1')}</p>

        <ul className="list-disc list-inside space-y-1">
          {(t.raw('sections.thirdParty.items') as string[]).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <p>{t('sections.thirdParty.body2')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.inquiry.title')}
        </h2>
        <p>
          {t.rich('sections.inquiry.body', {
            br: () => <br />,
          })}
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.cookie.title')}
        </h2>
        <p>{t('sections.cookie.body1')}</p>
        <p>{t('sections.cookie.body2')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.analytics.title')}
        </h2>
        <p>{t('sections.analytics.body')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.comments.title')}
        </h2>
        <p>{t('sections.comments.body1')}</p>
        <p>{t('sections.comments.body2')}</p>
        <p>
          {t.rich('sections.comments.body3', {
            a: (children) => (
              <a
                href="https://automattic.com/privacy/"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-600"
              >
                {children}
              </a>
            ),
          })}
        </p>
        <p>{t('sections.comments.body4')}</p>
        <p>{t('sections.comments.body5')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.embeddedContent.title')}
        </h2>
        <p>{t('sections.embeddedContent.body1')}</p>
        <p>{t('sections.embeddedContent.body2')}</p>
        <p>{t('sections.embeddedContent.body3')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.disclaimer.title')}
        </h2>
        <p>{t('sections.disclaimer.body1')}</p>
        <p>{t('sections.disclaimer.body2')}</p>
        <p>{t('sections.disclaimer.body3')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.copyright.title')}
        </h2>
        <p>{t('sections.copyright.body1')}</p>
        <p>{t('sections.copyright.body2')}</p>
        <p>{t('sections.copyright.body3')}</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          {t('sections.links.title')}
        </h2>
        <p>{t('sections.links.body')}</p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
