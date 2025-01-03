import React from 'react';
import SizePresets from './SizePresets';
import CustomSizeInput from './CustomSizeInput';

interface SizeControlsProps {
  width: number;
  height: number;
  onSizeChange: (width: number, height: number) => void;
}

export default function SizeControls({ width, height, onSizeChange }: SizeControlsProps) {
  return (
    <div className="space-y-6">
      <CustomSizeInput
        width={width}
        height={height}
        onSizeChange={onSizeChange}
      />
      <SizePresets onSelect={onSizeChange} />
    </div>
  );
}