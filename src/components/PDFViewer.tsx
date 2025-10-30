// components/PDFViewer.tsx - PDF display component
import React from 'react';
import type { PDFViewerProps } from '../types';
import Button from './Button';

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, onUploadAnother }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>📋 Signed PDF Document</h2>

      <div style={{ width: '100%', maxWidth: '800px' }}>
        <iframe
          src={pdfUrl}
          style={{
            width: '100%',
            height: '400px',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}
          title="Signed PDF Document"
        />
      </div>

      <Button onClick={onUploadAnother} variant="secondary">
        🔄 Upload Another PDF
      </Button>
    </div>
  );
};

export default PDFViewer;
