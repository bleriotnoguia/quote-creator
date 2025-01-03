import React, { useState } from 'react';
import { Quote } from '../types';
import TextControls from './TextControls';
import FontControls from './FontControls';
import ActionButtons from './ActionButtons';
import QuotePreview from './QuotePreview';
import ImageSearch from './ImageSearch';
import ImageUploader from './ImageUploader';
import SizeControls from './SizeControls';
import { downloadQuoteImage } from '../utils/download';

const initialQuote: Quote = {
  text: 'Enter your inspiring quote here...',
  fontSize: 32,
  fontFamily: 'Inter',
  textColor: '#ffffff',
  textAlign: 'center',
  backgroundColor: '#000000',
  textOpacity: 1,
  dimensions: {
    width: 1080,
    height: 1080,
  },
};

export default function QuoteEditor() {
  const [quote, setQuote] = useState<Quote>(initialQuote);
  const [showImageSearch, setShowImageSearch] = useState(false);

  const handleQuoteUpdate = (updates: Partial<Quote>) => {
    setQuote((prev) => ({ ...prev, ...updates }));
  };

  const handleImageSelect = (imageUrl: string) => {
    handleQuoteUpdate({ backgroundImage: imageUrl });
  };

  const handleSizeChange = (width: number, height: number) => {
    handleQuoteUpdate({ dimensions: { width, height } });
  };

  const handleDownload = async () => {
    try {
      await downloadQuoteImage('quote-preview');
    } catch (error) {
      console.error('Failed to download image:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        const blob = await downloadQuoteImage('quote-preview');
        await navigator.share({
          files: [new File([blob], 'quote.png', { type: 'image/png' })],
          title: 'Share Quote',
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Editor Panel */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-lg space-y-8 order-2 md:order-1">
        <TextControls quote={quote} onUpdate={handleQuoteUpdate} />
        <FontControls quote={quote} onUpdate={handleQuoteUpdate} />
        <SizeControls
          width={quote.dimensions.width}
          height={quote.dimensions.height}
          onSizeChange={handleSizeChange}
        />
        <ImageUploader
          onImageSelect={handleImageSelect}
          onShowImageSearch={() => setShowImageSearch(true)}
        />
        <ActionButtons onDownload={handleDownload} onShare={handleShare} />
      </div>

      {/* Preview Panel */}
      <div className="w-full md:w-2/3 order-1 md:order-2">
        <QuotePreview quote={quote} />
      </div>

      {showImageSearch && (
        <ImageSearch
          onSelect={handleImageSelect}
          onClose={() => setShowImageSearch(false)}
        />
      )}
    </div>
  );
}