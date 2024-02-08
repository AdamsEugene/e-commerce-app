import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  InputProps,
  Progress,
} from "@nextui-org/react";
import { IoCloseSharp } from "react-icons/io5";
import { TbUpload } from "react-icons/tb";
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

  const handleDeletePreview = (index: number) => {
    const updatedPreviews = [...filePreviews];
    updatedPreviews.splice(index, 1);
    setFilePreviews(updatedPreviews);
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
          <label
            htmlFor={props.id || "file-input"}
            className="cursor-pointer text-gray-500 w-full h-full flex flex-col items-center justify-center"
          >
            {/* Content inside label */}
            <p className="">Drag & drop your files here</p>
            <TbUpload className="text-6xl my-2" />
            <span className="">Browse for files</span>
          </label>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          {filePreviews.map((preview, index) => (
            <div key={index} className="mt-3 relative">
              <StyledImage
                src={preview}
                alt={`File Preview ${index + 1}`}
                className="w-[100px] h-[100px]"
                width={100}
                height={100}
              />
              <Button
                isIconOnly
                color="danger"
                size="sm"
                onClick={() => handleDeletePreview(index)}
                className="absolute top-0 right-0 p-2 text-white rounded-full z-10"
              >
                <IoCloseSharp className="text-5xl" />
              </Button>
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
const StyledFileUpload: React.FC = () => {
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

export default StyledFileUpload;
