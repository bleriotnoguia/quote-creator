import React from 'react';
import { Quote } from '../types';

interface QuotePreviewProps {
  quote: Quote;
}

export default function QuotePreview({ quote }: QuotePreviewProps) {
  const aspectRatio = quote.dimensions.height / quote.dimensions.width;

  return (
    <div className="p-4 md:p-6 flex items-center justify-center min-h-[50vh] md:min-h-screen">
      <div
        id="quote-preview"
        className="w-full max-w-3xl rounded-lg shadow-lg flex items-center justify-center overflow-hidden"
        style={{
          aspectRatio: `${quote.dimensions.width} / ${quote.dimensions.height}`,
          backgroundColor: quote.backgroundColor,
          backgroundImage: quote.backgroundImage
            ? `url(${quote.backgroundImage})`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p
          style={{
            fontSize: `${quote.fontSize}px`,
            fontFamily: quote.fontFamily,
            color: quote.textColor,
            textAlign: quote.textAlign,
            opacity: quote.textOpacity,
            maxWidth: '80%',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          {quote.text}
        </p>
      </div>
    </div>
  );
}