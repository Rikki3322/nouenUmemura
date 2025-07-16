'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { Breadcrumb } from '@/components/layout/Breadcrumb';

const ContactForm = () => {
  const t = useTranslations('ContactForm');

  const [form, setForm] = useState({
    name: '',
    kana: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
    inquiryType: '',
    postal_code: '',
    address: '',
  });

  const breadcrumbItems = [
    { label: t('breadcrumb.home'), href: '/' },
    { label: t('breadcrumb.contact') },
  ];

  const inquiryOptions = t.raw('inquiryOptions') as string[];

  const isValid =
    form.name &&
    form.kana &&
    form.email &&
    form.phone &&
    form.message &&
    form.inquiryType &&
    form.agree;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      alert(t('validation.requiredFields'));
      return;
    }
    alert(t('alert.submitted'));
  };

  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mb-12">
        <h1 className="text-4xl font-bold border-b border-black pb-4 mb-6">
          {t('title')}
        </h1>
        <h2 className="text-lg leading-relaxed">{t('description')}</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* 問い合わせ区分 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
              {t('required')}
            </span>
            <span className="text-lg">{t('inquiryType.label')}</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {inquiryOptions.map((option) => (
              <label key={option} className="inline-flex items-center">
                <input
                  type="radio"
                  name="inquiryType"
                  value={option}
                  checked={form.inquiryType === option}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="leading-relaxed">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* お問い合わせ内容 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
              {t('required')}
            </span>
            <label htmlFor="message" className="w-32">
              {t('message.label')}
            </label>
          </div>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t('message.placeholder')}
            rows={6}
            className="w-full border border-gray-300 bg-[#f9f6f0] p-4 leading-relaxed"
          />
        </div>

        {/* フィールド群 */}
        <div className="space-y-6">
          {(
            [
              'name',
              'kana',
              'email',
              'phone',
              'postal_code',
              'address',
            ] as const
          ).map((key) => {
            const required = ['name', 'kana', 'email', 'phone'].includes(key);
            return (
              <div key={key}>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-white text-xs px-2 py-0.5 rounded ${
                      required ? 'bg-black' : 'bg-gray-400'
                    }`}
                  >
                    {t(required ? 'required' : 'optional')}
                  </span>
                  <label htmlFor={key} className="w-32">
                    {t(`fields.${key}.label`)}
                  </label>
                </div>
                <input
                  id={key}
                  name={key}
                  type={
                    key === 'email'
                      ? 'email'
                      : key === 'phone' || key === 'postal_code'
                      ? 'tel'
                      : 'text'
                  }
                  value={form[key]}
                  onChange={handleChange}
                  placeholder={t(`fields.${key}.placeholder`)}
                  className="w-full border border-gray-300 bg-[#f9f6f0] p-4"
                />
              </div>
            );
          })}
        </div>

        {/* プライバシー同意 */}
        <div className="border-t pt-8">
          <p className="text-sm mb-4 leading-relaxed">
            {t('privacy.intro')}
            <Link href="/privacy-policy" className="underline text-blue-700">
              {t('privacy.link')}
            </Link>
            {t('privacy.outro')}
          </p>
          <label className="inline-flex items-start gap-3 leading-relaxed">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <span>{t('privacy.confirm')}</span>
          </label>
        </div>

        {/* 送信ボタン */}
        <div className="pt-8">
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-4 text-white rounded transition ${
              isValid
                ? 'bg-black hover:bg-gray-800'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {t('submit')}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
