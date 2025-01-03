import React from 'react';
import { Type, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { Quote } from '../types';

interface TextControlsProps {
  quote: Quote;
  onUpdate: (updates: Partial<Quote>) => void;
}

export default function TextControls({ quote, onUpdate }: TextControlsProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quote Text
        </label>
        <textarea
          value={quote.text}
          onChange={(e) => onUpdate({ text: e.target.value })}
          className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your inspiring quote..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Size
        </label>
        <div className="flex items-center space-x-2">
          <Type size={16} />
          <input
            type="range"
            min="16"
            max="72"
            value={quote.fontSize}
            onChange={(e) => onUpdate({ fontSize: Number(e.target.value) })}
            className="w-full"
          />
          <span className="text-sm">{quote.fontSize}px</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Text Alignment
        </label>
        <div className="flex space-x-2">
          {(['left', 'center', 'right'] as const).map((align) => (
            <button
              key={align}
              onClick={() => onUpdate({ textAlign: align })}
              className={`p-2 rounded ${
                quote.textAlign === align ? 'bg-blue-100' : 'bg-gray-100'
              }`}
            >
              {align === 'left' && <AlignLeft size={16} />}
              {align === 'center' && <AlignCenter size={16} />}
              {align === 'right' && <AlignRight size={16} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}