import { colors } from '@ignite-ui/tokens';
import { getContrast } from 'polished';
import React from 'react';

const getContrastingColor = (color: string) =>
  getContrast(color, '#ffffff') < 3.5 ? '#000000' : '#ffffff';

export function ColorGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div key={key} style={{ background: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrastingColor(color),
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ));
}