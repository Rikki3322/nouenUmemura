'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import {
  AtSign,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Twitter,
  Youtube,
} from '@/components/icons/lucide-icons';

const Footer = () => {
  const t = useTranslations('Footer');

  const quickLinks = [
    { href: '/stay', label: t('quickLinks.stay') },
    { href: '/ecsites', label: t('quickLinks.purchase') },
    { href: '/furusato', label: t('quickLinks.furusato') },
    { href: '/nohaku', label: t('quickLinks.nohaku') },
    { href: '/contact', label: t('quickLinks.contact') },
  ];

  const isExternalLink = (url: string) => /^(https?:)?\/\//.test(url);

  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-100 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Company Info */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="relative flex items-center space-x-2">
                  <Image
                    src="/assets/images/inverse_logo.png"
                    alt={t('farmName')}
                    width={100}
                    height={50}
                    className="h-[50px] w-auto"
                  />
                </div>
                <span className="font-bold text-lg">{t('farmName')}</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t('description')}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://line.me/R/ti/p/@890kprkl?oat_content=url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href="https://www.instagram.com/asparagus.saga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.facebook.com/UMEMURANOUEN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://x.com/saga_asparagus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="https://www.threads.com/@asparagus.saga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <AtSign size={16} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC8xv35NH5BlXp3tV8iIUCeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="https://www.tiktok.com/@asparagus.saga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Music2 size={16} />
                </a>
              </div>
            </div>

            {/* Access */}
            <div className="space-y-4">
              <h3 className="font-bold text-base mb-3">{t('accessTitle')}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin
                    className="text-green-600 flex-shrink-0 mt-1"
                    size={14}
                  />
                  <div>
                    <p className="text-gray-600 text-sm">〒849-5251</p>
                    <p className="text-gray-600 text-sm">{t('address')}</p>
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
                  <p className="text-gray-600 text-sm">info@umemuranouen.com</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 md:mx-auto">
              <h3 className="font-bold text-base mb-3">{t('servicesTitle')}</h3>
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
              <h3 className="font-bold text-base mb-3">{t('newsTitle')}</h3>
              <p className="text-gray-600 text-sm">{t('newsDescription')}</p>
              <a
                href="https://line.me/R/ti/p/@890kprkl?oat_content=url"
                className="w-full bg-green-600 text-white py-2 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-sm min-h-[40px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                <span>{t('lineAddFriend')}</span>
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-100 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-gray-600 text-sm">{t('copyright')}</p>
              <div className="flex space-x-4 text-sm">
                <a
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  {t('privacy')}
                </a>
                <a
                  href="/tokutei-shoho"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  {t('commerce')}
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
