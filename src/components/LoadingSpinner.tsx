// components/LoadingSpinner.tsx - Loading indicator component
import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = 'Loading...',
  size = 'medium'
}) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <div style={{
        width: size === 'small' ? '16px' : size === 'large' ? '48px' : '32px',
        height: size === 'small' ? '16px' : size === 'large' ? '48px' : '32px',
        border: '4px solid #ccc',
        borderTop: '4px solid #667eea',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      {message && <p style={{ color: '#666', fontWeight: '500' }}>{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
