import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [signedPdfUrl, setSignedPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      alert('Please select a PDF file.');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);
    // Simulate sending to mock server
    setTimeout(async () => {
      // Mock signing: just return the same file
      const arrayBuffer = await selectedFile.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setSignedPdfUrl(url);
      setLoading(false);
    }, 2000); // Simulate 2s delay
  };

  return (
    <div className="app-container">
      <h1>Mobile PDF Upload & Sign App</h1>
      {!signedPdfUrl ? (
        <div className="upload-section">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <button onClick={() => fileInputRef.current?.click()}>
            Select PDF
          </button>
          {selectedFile && <p>Selected: {selectedFile.name}</p>}
          <button onClick={handleUpload} disabled={!selectedFile || loading}>
            {loading ? 'Signing...' : 'Upload & Sign'}
          </button>
        </div>
      ) : (
        <div className="view-section">
          <h2>Signed PDF</h2>
          <iframe src={signedPdfUrl} width="100%" height="600px" title="Signed PDF"></iframe>
          <button onClick={() => { setSignedPdfUrl(null); setSelectedFile(null); }}>Upload Another</button>
        </div>
      )}
    </div>
  );
}

export default App
