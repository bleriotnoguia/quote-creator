import { toPng } from 'html-to-image';

export async function downloadQuoteImage(elementId: string, fileName: string = 'quote.png') {
  try {
    const element = document.getElementById(elementId);
    if (!element) throw new Error('Element not found');

    const dataUrl = await toPng(element, {
      quality: 0.95,
      pixelRatio: 2,
    });

    const link = document.createElement('a');
    link.download = fileName;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Error downloading image:', error);
    throw error;
  }
}