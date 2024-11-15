import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

// Professional QRCode Generator Component
const QRCodeGenerator = () => {
  const [data, setData] = useState('');
  const [size, setSize] = useState(150);
  const qrRef = React.createRef();

  // Handle downloading the QR code image
  const handleDownload = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.png";
    link.click();
  };

  // Internal styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      maxWidth: '450px',
      margin: '0 auto',
      borderRadius: '10px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff', // White background for the QR container
      textAlign: 'center',
    },
    pageContainer: {
      backgroundColor: '#f7f7f7', // Background color for the entire page
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      marginBottom: '20px',
      color: '#333',
      fontWeight: 'bold',
      fontSize: '28px',
    },
    inputGroup: {
      width: '100%',
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      fontSize: '18px',
      fontWeight: '600',
      color: '#555',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
      marginBottom: '10px',
      boxSizing: 'border-box',
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px',
      width: '100%',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    button: {
      padding: '12px 25px',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      width: '48%',
      transition: 'background-color 0.3s ease',
    },
    buttonGenerate: {
      backgroundColor: '#28a745',
      color: '#fff',
    },
    buttonDownload: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
    qrCodeDisplay: {
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      marginTop: '20px',
    },
    placeholderText: {
      fontSize: '16px',
      color: '#888',
      marginTop: '20px',
    },
  };

  // Handle data input change for real-time QR code generation
  const handleDataChange = (e) => {
    setData(e.target.value);
  };

  // Handle image size input change
  const handleSizeChange = (e) => {
    setSize(Number(e.target.value));
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>QR CODE GENERATOR</h2>

        {/* Data Input Field */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Data for QR Code</label>
          <input
            type="text"
            placeholder="Enter data for QR code"
            value={data}
            onChange={handleDataChange}
            style={styles.input}
          />
        </div>

        {/* Size Input Field */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Image Size (e.g., 150)</label>
          <input
            type="text"
            placeholder="Enter size (e.g., 150)"
            value={size}
            onChange={handleSizeChange}
            style={styles.input}
          />
        </div>

        {/* Buttons Section */}
        <div style={styles.buttonGroup}>
          <button
            onClick={() => {}}
            style={{ ...styles.button, ...styles.buttonGenerate }}
            disabled={!data}
          >
            Generate QR Code
          </button>

          <button
            onClick={handleDownload}
            style={{ ...styles.button, ...styles.buttonDownload }}
            disabled={!data}
          >
            Download
          </button>
        </div>

        {/* QR Code Display */}
        {data ? (
          <div style={styles.qrCodeDisplay} ref={qrRef}>
            <QRCodeCanvas value={data} size={size} />
          </div>
        ) : (
          <p style={styles.placeholderText}>Enter data above to generate a QR code</p>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
