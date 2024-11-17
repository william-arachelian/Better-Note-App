import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useEffect } from 'react';

function App() {
  const [pdfUrl, setPdfUrl] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If running in Electron, we can pass the PDF file path from main process
    const pdfPath = window.electron.loadPDF('dummy.pdf'); // Assuming the PDF is in the public folder
    setPdfUrl(pdfPath);
  }, []);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onLoadError = (error) => {
    setError('Failed to load PDF');
    setLoading(false);
    console.error(error);
  };

  return (
    <div>
      <h1>PDF Viewer</h1>
      <p>{pdfUrl}</p>
      {loading && <div>Loading PDF...</div>}
      {error && <div>{error}</div>}

      <Document
        file={pdfUrl}
        onLoadSuccess={onLoadSuccess}
        onLoadError={onLoadError}
        loading="Loading PDF..."
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div>
        {numPages && (
          <span>
            Page {pageNumber} of {numPages}
          </span>
        )}
        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
