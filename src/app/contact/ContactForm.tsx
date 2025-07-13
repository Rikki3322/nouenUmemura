'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

const ContactForm = () => {
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
    { label: 'HOME', href: '/' },
    { label: 'お問い合わせ' },
  ];

  const inquiryOptions = [
    'BASEで購入したアスパラガス',
    '楽天で購入したアスパラガス',
    'ポケマルで購入したアスパラガス',
    '食べチョクで購入したアスパラガス',
    'アスパラガス全般',
    '出荷/配送',
    '農家民宿うめむら',
    '日帰りBBQ',
    '収穫体験',
    '農泊',
    '修学旅行',
    'その他',
  ];

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
      alert('全ての必須項目に入力してください。');
      return;
    }
    // 送信処理をここに
    alert('送信しました！');
  };

  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      {/* パンくず */}
      <Breadcrumb items={breadcrumbItems} />

      {/* 見出し */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold border-b border-black pb-4 mb-6">
          お問い合わせ
        </h1>
        <h2 className="text-lg leading-relaxed">
          必要事項にご入力の上、送信してください。
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* 内容 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
              必須
            </span>
            <span className="text-lg">何についてですか？</span>
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

        {/* テキストエリア */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
              必須
            </span>
            <label htmlFor="message" className="w-32">
              お問い合わせ内容
            </label>
          </div>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="例：本当に生で食べられるの？"
            rows={6}
            className="w-full border border-gray-300 bg-[#f9f6f0] p-4 leading-relaxed"
          />
        </div>

        {/* 入力欄群 */}
        <div className="space-y-6">
          {[
            {
              label: 'お名前',
              name: 'name',
              type: 'text',
              placeholder: '例：伊万里 太郎',
              required: true,
            },
            {
              label: 'ふりがな',
              name: 'kana',
              type: 'text',
              placeholder: '例：いまり たろう',
              required: true,
            },
            {
              label: 'メールアドレス',
              name: 'email',
              type: 'email',
              placeholder: '例：TaroImari@yahoo.com',
              required: true,
            },
            {
              label: '電話番号',
              name: 'phone',
              type: 'tel',
              placeholder: '例：0955-23-0000',
              required: true,
            },
            {
              label: '郵便番号',
              name: 'postal_code',
              type: 'tel',
              placeholder: '例：848-0027',
              required: false,
            },
            {
              label: '住所',
              name: 'address',
              type: 'text',
              placeholder: '例：佐賀県伊万里市立花町○○番地',
              required: false,
            },
          ].map((field) => (
            <div key={field.name}>
              <div className="flex items-center gap-2 mb-3">
                {field.required ? (
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
                    必須
                  </span>
                ) : (
                  <span className="bg-gray-400 text-white text-xs px-2 py-0.5 rounded">
                    任意
                  </span>
                )}
                <label htmlFor={field.name} className="w-32">
                  {field.label}
                </label>
              </div>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={form[field.name as keyof typeof form] as string}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 bg-[#f9f6f0] p-4"
              />
            </div>
          ))}
        </div>

        {/* 利用規約 */}
        <div className="border-t pt-8">
          <p className="text-sm mb-4 leading-relaxed">
            ご提供いただきました情報は、当サイトのプライバシーポリシーに則ってお取り扱い致します。
            詳細な個人情報取り扱いにつきましては、
            <Link href="/privacy-policy" className="underline text-blue-700">
              プライバシーポリシー
            </Link>
            をご確認ください。
          </p>
          <label className="inline-flex items-start gap-3 leading-relaxed">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <span>
              確認画面は表示されません。上記内容で宜しければチェックを入れて送信ボタンをクリックして下さい。
            </span>
          </label>
        </div>

        {/* ボタン */}
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
            送信する
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
