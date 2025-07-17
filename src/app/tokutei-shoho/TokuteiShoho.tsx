'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

import { Breadcrumb } from '@/components/layout/Breadcrumb';

const TokuteiShohoPage = () => {
  const t = useTranslations('tokuteiShoho');
  const locale = useLocale();

  const breadcrumbItems = [
    { label: t('breadcrumb.home'), href: `/${locale}` },
    { label: t('breadcrumb.pageTitle') },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      {/* パンくず */}
      <Breadcrumb items={breadcrumbItems} />

      <h1 className="text-3xl font-bold mb-6 border-b border-black">
        {t('pageTitle')}
      </h1>

      <table className="table-auto w-full text-left border border-gray-300">
        <tbody>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2 w-1/3">{t('table.vendor')}</th>
            <td className="p-2">{t('table.vendorValue')}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">{t('table.representative')}</th>
            <td className="p-2">{t('table.representativeValue')}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">{t('table.address')}</th>
            <td className="p-2">{t('table.addressValue')}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">{t('table.phone')}</th>
            <td className="p-2">
              {t('table.phoneValue')}
              <p className="text-sm">{t('table.phoneNote')}</p>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">{t('table.phoneReception')}</th>
            <td className="p-2">{t('table.phoneReceptionValue')}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">{t('table.businessHours')}</th>
            <td className="p-2">{t('table.businessHoursValue')}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">{t('table.holidays')}</th>
            <td className="p-2">{t('table.holidaysValue')}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">{t('table.email')}</th>
            <td className="p-2">{t('table.emailValue')}</td>
          </tr>
          <tr>
            <th className="bg-gray-100 p-2">{t('table.siteUrl')}</th>
            <td className="p-2">
              <a
                href="https://umemuranouen.com"
                target="_blank"
                className="text-blue-600 underline"
                rel="noreferrer"
              >
                https://umemuranouen.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default TokuteiShohoPage;
