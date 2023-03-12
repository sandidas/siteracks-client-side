import React from 'react';

interface DownloadButtonProps {
  imageSrc: string;
  fileName: string;
  children: any;
  customClass?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ imageSrc, fileName, children, customClass }) => {
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link.type = "application/postscript"; // Add this line
  };

  return (
    <button onClick={downloadImage} className={`transition ease-in-out duration-500 h-10 items-center font-medium text-text hover:text-primary ${customClass}`}>
      {children && children}
    </button>
  );
};

export default DownloadButton;
