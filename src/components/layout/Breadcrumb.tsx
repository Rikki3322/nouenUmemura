import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string; // hrefがあればリンクにする
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-8">
      <ul className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className={item.href ? '' : 'text-gray-600'}>
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              item.label
            )}
            {/* 最後のアイテム以外はスラッシュを表示 */}
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-500">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
