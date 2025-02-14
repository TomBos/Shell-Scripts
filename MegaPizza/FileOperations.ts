import * as cheerio from 'cheerio';
import { readFileSync, writeFileSync } from 'fs';

export function ReduceFile(fileName: string): void {
    try {
        const html = readFileSync(fileName, 'utf8');
        const $ = cheerio.load(html);
        const productData: string[] = [];

        $("div.products").each((_, element) => {
            const productHtml = $(element).html();

            if (productHtml) {
                productData.push(productHtml);
            }
        });

        writeFileSync('cleanedProducts.html', productData.join(''), 'utf8');
    } catch (error) {
        console.error("Error processing file:", error);
    }
}
