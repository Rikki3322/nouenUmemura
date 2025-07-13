import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  AtSign,
  Youtube,
  Music2,
} from '@/components/icons/lucide-icons';

// Quick Links配列（内部リンクはパス、外部は完全URLを指定）
const quickLinks = [
  { href: '/stay', label: '農家民宿うめむら' },
  { href: '/ecsites', label: '購入先サイト一覧' },
  { href: '/furusato', label: 'ふるさと納税' }, // 外部例
  { href: '/nohaku', label: '農泊（準備中）' },
  { href: '/contact', label: 'お問い合わせ' },
];

// hrefが外部リンクか判定する関数
const isExternalLink = (url: string) => /^(https?:)?\/\//.test(url);

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-100 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Company Info */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                {/* ロゴ */}
                <div className="relative flex items-center space-x-2">
                  <Image
                    src="/assets/images/inverse_logo.png"
                    alt="うめむら農園"
                    width={100}
                    height={50}
                    className="h-[50px] w-auto"
                  />
                </div>
                <span className="font-bold text-lg">うめむら農園</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                佐賀県伊万里の豊かな自然の中で、
                愛情込めてアスパラガスを栽培しています。
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://line.me/R/ti/p/@890kprkl?oat_content=url"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href="https://www.instagram.com/asparagus.saga/"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.facebook.com/UMEMURANOUEN/"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://x.com/saga_asparagus"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="https://www.threads.com/@asparagus.saga"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AtSign size={16} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC8xv35NH5BlXp3tV8iIUCeg"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="https://www.tiktok.com/@asparagus.saga"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Music2 size={16} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-bold text-base mb-3">アクセス</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin
                    className="text-green-600 flex-shrink-0 mt-1"
                    size={14}
                  />
                  <div>
                    <p className="text-gray-600 text-sm">〒849-5251</p>
                    <p className="text-gray-600 text-sm">
                      佐賀県伊万里市大川町大川野1375-2
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-green-600 flex-shrink-0" size={14} />
                  <p className="text-gray-600 text-sm">
                    {'080'}-{'5242'}-{'6581'}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-green-600 flex-shrink-0" size={14} />
                  <p className="text-gray-600 text-sm">
                    {'info'}@{'umemuranouen'}
                    {'.com'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 md:mx-auto">
              <h3 className="font-bold text-base mb-3">サービス</h3>
              <ul className="space-y-2">
                {quickLinks.map(({ href, label }) =>
                  isExternalLink(href) ? (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                      >
                        {label}
                      </a>
                    </li>
                  ) : (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="font-bold text-base mb-3">最新情報</h3>
              <p className="text-gray-600 text-sm">
                農園からのお知らせをLINEでお届けします
              </p>
              <a
                href="https://line.me/R/ti/p/@890kprkl?oat_content=url"
                className="w-full bg-green-600 text-white py-2 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-sm min-h-[40px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                <span>LINEともだち追加</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-gray-600 text-sm">
                © 2025 うめむら農園. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  プライバシーポリシー
                </a>
                <a
                  href="/tokutei-shoho"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  特定商取引法
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
