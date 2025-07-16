'use client';
import { ReactNode,useEffect, useRef, useState } from 'react';

const FadeInOnScroll = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // ←追加

  useEffect(() => {
    // 初回レンダリング時に画面幅をチェック
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth >= 768);
    }
  }, []);

  useEffect(() => {
    if (!isDesktop || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isDesktop]);

  // スマホなどではアニメーションなしで即表示
  if (!isDesktop) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1500 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 delay-100'
          : 'opacity-0 translate-y-4 delay-0'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
