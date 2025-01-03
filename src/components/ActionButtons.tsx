import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { Quote } from '../types';

interface ActionButtonsProps {
  onDownload: () => void;
  onShare: () => void;
}

export default function ActionButtons({ onDownload, onShare }: ActionButtonsProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onDownload}
        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <Download size={16} />
        <span>Download</span>
      </button>
      <button
        onClick={onShare}
        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        <Share2 size={16} />
        <span>Share</span>
      </button>
    </div>
  );
}