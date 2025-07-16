'use client';

import { cn } from '@/utils/cn';
import { Button } from '@/app/ui/button';
import { useTranslations } from 'next-intl';

type TabType = 'immediate' | 'scheduled' | 'subscription';

interface TabSelectorProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabSelector = ({ activeTab, onTabChange }: TabSelectorProps) => {
  const t = useTranslations('tabSelector');

  const tabs = [
    { key: 'immediate' as const, label: t('immediate') },
    { key: 'scheduled' as const, label: t('scheduled') },
    { key: 'subscription' as const, label: t('subscription') },
  ];

  return (
    <div className="mb-8 flex justify-center">
      <div className="flex rounded-lg bg-white p-1 shadow-sm">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            variant={activeTab === tab.key ? 'cta' : 'default'}
            className={cn(
              'w-[110px] sm:w-auto',
              'rounded-md px-4 py-2 text-sm font-medium',
              activeTab !== tab.key && 'text-gray-600 hover:text-gray-800'
            )}
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
export type { TabType };
