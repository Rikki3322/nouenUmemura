'use client';

import {
  MonitorSmartphone,
  MessageCircle,
} from '@/components/icons/lucide-icons';
import { Button } from '@/app/ui/button';
import Link from 'next/link';

const OrderOptions = () => {
  return (
    <div className="pt-8">
      <h3 className="mb-6 text-center text-xl font-semibold">
        お好みの方法をお選びいただけます
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="rounded-lg bg-white p-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <MonitorSmartphone size={16} className="text-green-600" />
            <h4 className="font-semibold">オンライン注文</h4>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            楽天・BASE・食べチョク・ポケマルで販売中
          </p>
          <Link href="/ecsites" passHref>
            <Button
              className="w-full cursor-pointer hover:opacity-80 hover:shadow-md"
              variant="outline"
            >
              あなたにぴったりのサイト診断をする
            </Button>
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <MessageCircle size={16} className="text-green-600" />
            <h4 className="font-semibold">LINEで注文</h4>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">代金引換OK</p>
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
              LINEともだち追加
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderOptions;
