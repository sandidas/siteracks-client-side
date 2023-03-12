import React from 'react';

interface DownloadButtonProps {
  imageSrc: string;
  fileName: string;
  children: any;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ imageSrc, fileName, children }) => {
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadImage} className="transition ease-in-out duration-500 flex h-10 items-center font-medium text-text hover:animate-pulse">
      {children && children}
    </button>
  );
};

export default DownloadButton;
