'use client';

import {
  MonitorSmartphone,
  MessageCircle,
} from '@/components/icons/lucide-icons';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const OrderOptions = () => {
  const t = useTranslations('orderOptions');

  return (
    <div className="pt-8">
      <h3 className="mb-6 text-center text-xl font-semibold">{t('title')}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="rounded-lg bg-white p-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <MonitorSmartphone size={16} className="text-green-600" />
            <h4 className="font-semibold">{t('onlineTitle')}</h4>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            {t('onlineDesc')}
          </p>
          <Link href="/ecsites" passHref>
            <Button
              className="w-full cursor-pointer hover:opacity-80 hover:shadow-md"
              variant="outline"
            >
              {t('onlineButton')}
            </Button>
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <MessageCircle size={16} className="text-green-600" />
            <h4 className="font-semibold">{t('lineTitle')}</h4>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">{t('lineDesc')}</p>
          <Link
            href="https://line.me/R/ti/p/@890kprkl?oat_content=url"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="w-full  cursor-pointer hover:opacity-80 hover:shadow-md"
              variant="outline"
            >
              {t('lineButton')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderOptions;
