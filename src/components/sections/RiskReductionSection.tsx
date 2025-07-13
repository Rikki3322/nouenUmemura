import React from 'react';
import { Check, FileText, Send } from '@/components/icons/lucide-icons';

const RiskReductionSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              安心の品質保証
            </h2>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="text-green-600" size={20} />
                  <h3 className="font-semibold text-gray-900">鮮度保証</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  収穫から冷蔵保管で最短配送
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="text-green-600" size={20} />
                  <h3 className="font-semibold text-gray-900">保存方法</h3>
                </div>
                <p className="text-gray-700 text-sm">保存方法説明書同封</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Send className="text-green-600" size={20} />
                  <h3 className="font-semibold text-gray-900">サポート</h3>
                </div>
                <p className="text-gray-700 text-sm">LINEでのサポート対応</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskReductionSection;
