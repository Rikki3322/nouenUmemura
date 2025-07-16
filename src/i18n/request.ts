import { getRequestConfig } from 'next-intl/server';
import fs from 'fs/promises';
import path from 'path';

export default getRequestConfig(async ({ locale }) => {
  const fallbackLocale = 'ja';
  const supportedLocales = ['ja', 'en'];

  const resolvedLocale = supportedLocales.includes(locale ?? '')
    ? locale!
    : fallbackLocale;

  const localeDir = path.join(process.cwd(), 'src', 'locales', resolvedLocale);
  const files = await fs.readdir(localeDir);

  const messages: Record<string, any> = {};

  for (const file of files) {
    if (!file.endsWith('.json')) continue;

    const key = path.basename(file, '.json');
    const filePath = path.join(localeDir, file);

    // 動的importは使わずにファイルを読み込む
    const fileContents = await fs.readFile(filePath, 'utf-8');
    messages[key] = JSON.parse(fileContents);
  }

  return {
    locale: resolvedLocale,
    messages,
  };
});
