// components/PDFUploader.tsx - PDF upload interface component
import React, { useRef } from 'react';
import type { PDFUploaderProps } from '../types';
import Button from './Button';
import LoadingSpinner from './LoadingSpinner';

const PDFUploader: React.FC<PDFUploaderProps> = ({
  selectedFile,
  loading,
  onFileSelect,
  onUpload
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFileSelect(event);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileSelect}
        ref={fileInputRef}
        style={{ display: 'none' }}
        aria-label="Select PDF file"
      />

      <Button onClick={handleButtonClick} variant="secondary">
        📄 Select PDF File
      </Button>

      {selectedFile && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#333', fontWeight: '500', margin: '5px 0' }}>
            Selected: <span style={{ color: '#667eea' }}>{selectedFile.name}</span>
          </p>

          {loading ? (
            <LoadingSpinner message="Signing PDF..." />
          ) : (
            <Button onClick={onUpload}>
              ✍️ Upload & Sign PDF
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default PDFUploader;
