import React from 'react';

import '../styles/token-grid.css';

interface TokenGridProps {
  token: Record<string, string>;
  hasRemValue?: boolean;
}

export function TokenGrid({ token, hasRemValue = false }: TokenGridProps) {
  return (
    <table className="token-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          { hasRemValue && <th>Pixels</th> }
        </tr>
      </thead>

      <tbody>
        {Object.entries(token).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              { hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td> }
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}