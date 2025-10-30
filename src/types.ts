// types.ts - TypeScript interfaces and types
export interface PDFUploadState {
  selectedFile: File | null;
  signedPdfUrl: string | null;
  loading: boolean;
}

export interface PDFUploaderProps {
  selectedFile: File | null;
  loading: boolean;
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUpload: () => void;
}

export interface PDFViewerProps {
  pdfUrl: string;
  onUploadAnother: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}
