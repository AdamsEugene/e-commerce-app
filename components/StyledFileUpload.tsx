import React, { useState } from "react";
import { Card, CardBody, Input, InputProps, Progress } from "@nextui-org/react";
import StyledImage from "./StyledImage";

interface FileUploadProps extends InputProps {
  onFileUpload: (files: FileList) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, ...props }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);

  const handleDragEnter = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      uploadFiles(files);
      previewFiles(files);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFiles(files);
      previewFiles(files);
    }
  };

  const uploadFiles = (files: FileList) => {
    // Simulate file upload progress for each file
    Array.from(files).forEach((file, index) => {
      const totalSize = file.size;
      const chunkSize = 1024 * 1024; // 1MB chunks for demonstration
      let uploaded = 0;

      const uploadInterval = setInterval(() => {
        uploaded += chunkSize;
        const progress = (uploaded / totalSize) * 100;

        setUploadProgress(progress);

        if (progress >= 100) {
          clearInterval(uploadInterval);
          setTimeout(() => {
            setUploadProgress(null);
            onFileUpload(files);
          }, 500); // Delay for visual feedback
        }
      }, 500); // Simulated 500ms delay per chunk
    });
  };

  const previewFiles = (files: FileList) => {
    const previews: string[] = [];
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        previews.push(reader.result as string);
        setFilePreviews([...previews]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Card>
      <CardBody>
        <div
          className={`relative border-2 border-dashed border-gray-400 p-4 text-center ${
            isDragging ? "bg-gray-100" : ""
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Input
            id="file-input"
            type="file"
            {...props}
            onChange={handleFileInputChange}
            className="hidden"
            multiple // Enable multiple file selection
          />
          <p className="text-gray-600">Drag & drop your files here</p>
          <p className="mt-2">or</p>
          <label
            htmlFor={props.id || "file-input"}
            className="cursor-pointer text-blue-500 underline"
          >
            Browse for files
          </label>
        </div>
        <div className="flex flex-row gap-4">
          {filePreviews.map((preview, index) => (
            <div key={index} className="mt-3">
              <StyledImage
                src={preview}
                alt={`File Preview ${index + 1}`}
                className="w-[100px] h-[100px]"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
        {uploadProgress !== null && (
          <Progress
            value={uploadProgress}
            maxValue={100}
            className="mt-3"
            color="primary"
          />
        )}
      </CardBody>
    </Card>
  );
};

// Usage
const YourComponent: React.FC = () => {
  const handleFileUpload = (files: FileList) => {
    // Handle the uploaded files here
    console.log("Uploaded files:", files);
  };

  return (
    <div className="w-full">
      <FileUpload onFileUpload={handleFileUpload} />
    </div>
  );
};

export default YourComponent;
