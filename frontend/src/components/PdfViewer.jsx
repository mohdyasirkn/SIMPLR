import React, { useState } from "react";
import { PDFViewer, Document, Page } from "@react-pdf/renderer";

const PdfPreview = ({ url }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-full h-full">
      <PDFViewer className="w-full h-full">
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </PDFViewer>
    </div>
  );
};

export default PdfPreview;
