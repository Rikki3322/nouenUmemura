import {
  MapPin,
  Car,
  FishSymbol,
  TrainFront,
  Plane,
} from '@/components/icons/lucide-icons';

const AccessSection = () => {
  return (
    <div className="bg-white">
      <section id="access" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              畑と山に囲まれた家へ
              <br />
              ようこそ
            </h3>
            <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-2">
              <MapPin className="text-amber-600" size={24} />
              佐賀県伊万里市大川町大川野1375-2
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[auto_auto] gap-12">
            {/* アクセス方法 - 左列、縦に2行分占める */}
            <div className="lg:row-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  アクセス方法
                </h4>
                <div className="space-y-3">
                  <div className="flex flex-col gap-2">
                    <Car className="text-amber-600 mt-1" size={24} />
                    <h5 className="font-semibold text-gray-900">
                      高速道路でお越しの場合
                    </h5>
                    <p className="text-gray-600 text-sm">
                      1. 有明海沿岸道路「大川中央IC」で降りてください。
                      <br />
                      2. IC出口から国道497号へ
                      <br />
                      <br />
                      ICから家までは 約1.6 km（車で3〜5分）。
                      <br />
                      地元の小道を進むルートのため、カーナビや案内サインを活用するのがおすすめです。
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <TrainFront className="text-amber-600 mt-1" size={24} />
                    <h5 className="font-semibold text-gray-900">
                      博多駅から電車でお越しの場合
                    </h5>
                    <p className="text-gray-600 text-sm">
                      1. JR特急「みどり」または「ハウステンボス」 に乗車
                      <br />
                      博多駅 → 新鳥栖駅 → 有田駅（所要時間：約1時間40分）
                      <br />
                      2. Matsuura Railway（松浦鉄道） 西九州線 に乗り換え
                      <br />
                      有田駅 → 伊万里駅（所要時間：約25分）
                      <br />
                      <br />
                      ※伊万里駅の送迎についてはご相談いただけます。
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Plane className="text-amber-600 mt-1" size={24} />
                    <h5 className="font-semibold text-gray-900">
                      佐賀空港からのアクセス
                    </h5>
                    <p className="text-gray-600 text-sm">
                      1. 空港通り（県道49号）を北上し、国道444号へ
                      <br />
                      2.
                      途中、武雄南ICから西九州自動車道（有明海沿岸道路）に接続
                      <br />
                      3. 「大川中央IC」で降りて、国道497号へ
                      <br />
                      <br />
                      ICから家までは 約1.6 km（車で3〜5分）。
                      <br />
                      地元の小道を進むルートのため、カーナビや案内サインを活用するのがおすすめです。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map - 右上（2列分使う） */}
            <div className="lg:col-span-2 h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.7674995432376!2d129.97329291008643!3d33.29874507333924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356a802ed448edfd%3A0x10c5922fb38074f6!2z44CSODQ5LTUyNTEg5L2Q6LOA55yM5LyK5LiH6YeM5biC5aSn5bed55S65aSn5bed6YeO77yR77yT77yX77yV4oiS77yS!5e0!3m2!1sja!2sjp!4v1750913213247!5m2!1sja!2sjp"
                className="w-full h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* 観光案内 - 右下（2列分使う） */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center mb-6">
                観光案内
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Car className="text-amber-600 mt-1" size={24} />
                  <p className="text-gray-700">
                    20分圏内：きゅうらぎ温泉、さよ湖河川プール、大川内山、イマリンビーチ
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Car className="text-amber-600 mt-1" size={24} />
                  <p className="text-gray-700">
                    30分圏内：唐津城、有田ポーセリングパーク、武雄温泉、嬉野温泉、松浦一酒造
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Car className="text-amber-600 mt-1" size={24} />
                  <p className="text-gray-700">
                    60分圏内：ハウステンボス、九十九島水族館海きらら、九十九島動植物園森きらら
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FishSymbol className="text-amber-600 mt-1" size={24} />
                  <p className="text-gray-700">
                    町内：ブラックバス釣りスポット、淀姫神社、梨狩り、自家焙煎コーヒー豆のカフェholoholo、
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessSection;
