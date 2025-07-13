/**
 * 複数のクラス名を条件付きで結合するユーティリティ関数
 * @param classes - クラス名の配列。false/null/undefined は無視される
 * @returns 結合されたクラス名の文字列
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
