import React, { useState } from 'react';
import './App.css';
import type { PDFUploadState } from './types';
import PDFUploader from './components/PDFUploader';
import PDFViewer from './components/PDFViewer';

class PDFSigningApp {
  private state: PDFUploadState;
  private stateSetter: React.Dispatch<React.SetStateAction<PDFUploadState>>;

  constructor(
    initialState: PDFUploadState,
    stateSetter: React.Dispatch<React.SetStateAction<PDFUploadState>>
  ) {
    this.state = initialState;
    this.stateSetter = stateSetter;
  }

  // Method to handle file selection
  handleFileSelect(event: React.ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      this.updateState({ selectedFile: file });
    } else {
      alert('Please select a valid PDF file.');
    }
  }

  // Method to handle PDF upload and signing
  async handleUpload(): Promise<void> {
    if (!this.state.selectedFile) return;

    this.updateState({ loading: true });

    // Simulate server-side signing process
    await this.simulateSigning();

    this.updateState({ loading: false });
  }

  // Method to reset the application state
  resetApplication(): void {
    this.updateState({
      selectedFile: null,
      signedPdfUrl: null,
      loading: false
    });
  }

  // Private method to simulate PDF signing
  private async simulateSigning(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(async () => {
        if (this.state.selectedFile) {
          // Create blob URL for PDF display (simulating signed document)
          const arrayBuffer = await this.state.selectedFile.arrayBuffer();
          const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);

          this.updateState({ signedPdfUrl: url });
        }
        resolve();
      }, 2000); // 2-second delay to simulate processing
    });
  }

  // Private method to update state
  private updateState(updates: Partial<PDFUploadState>): void {
    this.stateSetter(prevState => ({ ...prevState, ...updates }));
    this.state = { ...this.state, ...updates };
  }

  // Getters for component props
  getUploadProps() {
    return {
      selectedFile: this.state.selectedFile,
      loading: this.state.loading,
      onFileSelect: this.handleFileSelect.bind(this),
      onUpload: this.handleUpload.bind(this)
    };
  }

  getViewProps() {
    return {
      pdfUrl: this.state.signedPdfUrl!,
      onUploadAnother: this.resetApplication.bind(this)
    };
  }

  shouldShowUploader(): boolean {
    return !this.state.signedPdfUrl;
  }
}

// Main App Component
const App: React.FC = () => {
  const [uploadState, setUploadState] = useState<PDFUploadState>({
    selectedFile: null,
    signedPdfUrl: null,
    loading: false
  });

  // Create app instance with OOP approach
  const pdfApp = new PDFSigningApp(uploadState, setUploadState);

  return (
    <div className="app-container">
      <h1>Mobile PDF Upload & Sign App</h1>

      {pdfApp.shouldShowUploader() ? (
        <PDFUploader {...pdfApp.getUploadProps()} />
      ) : (
        <PDFViewer {...pdfApp.getViewProps()} />
      )}
    </div>
  );
};

export default App;
