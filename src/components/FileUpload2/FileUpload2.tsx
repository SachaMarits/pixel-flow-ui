import "./file-upload.scss";
import "../EmptyLinePlaceholder/empty-line-placeholder.scss";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "../Button";
import FileUploadIcon from "./FileUploadIcon";
import { PressIcon } from "../Icons";
import FilePreviewIcon from "./FilePreviewIcon";

interface CustomFile extends File {
  base64Data?: string;
}

interface FileUploadProps {
  className?: string;
  allowedExtensions?: string[];
  multiple: boolean;
  dragAndDrop: boolean;
  onChange: (f: unknown) => void;
  showAllowedExtensions?: boolean;
}

export default function FileUpload2({
  className = "",
  allowedExtensions,
  multiple,
  dragAndDrop,
  onChange,
  showAllowedExtensions = false,
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(Array.from(e.dataTransfer.files));
  };

  const handleFiles = async (f: File[]) => {
    const filteredFiles = f.filter((file) => {
      const fileExtension = file.name.split(".").pop();
      if (allowedExtensions)
        return fileExtension
          ? allowedExtensions.includes(fileExtension)
          : false;
      return true;
    });

    const promises = filteredFiles.map((file: CustomFile) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64Data = e?.target?.result;
          if (typeof base64Data === "string") file.base64Data = base64Data;
          resolve(file);
        };
        reader.readAsDataURL(file);
      });
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filesWithBase64: any = await Promise.all(promises);
    setFiles(multiple ? [...files, ...filesWithBase64] : [filesWithBase64]);
  };

  const formatFileSize = (bytes: number) => {
    const units = ["o", "Ko", "Mo", "Go", "To"];
    let index = 0;

    while (bytes >= 1024 && index < units.length - 1) {
      bytes /= 1024;
      index++;
    }

    return `${bytes.toFixed(2)} ${units[index]}`;
  };

  const displayAllowedExtensions =
    allowedExtensions &&
    showAllowedExtensions &&
    `(.${allowedExtensions.join(", .")})`;

  useEffect(() => {
    if (onChange) onChange(files);
  }, [files]);

  return (
    <div
      className={`pf-file-upload2 ${className}`}
      onDragEnter={dragAndDrop ? handleDragEnter : undefined}
      onDragOver={dragAndDrop ? handleDragEnter : undefined}
      onDragLeave={dragAndDrop ? handleDragLeave : undefined}
      onDrop={dragAndDrop ? handleDrop : undefined}
    >
      {dragAndDrop && (
        <div
          className={`pf-file-upload-placeholder ${
            isDragOver ? "pf-file-upload-over" : ""
          }`}
          onClick={() => fileInputRef?.current?.click()}
        >
          <FileUploadIcon />
          <h3>Drop or select file</h3>
          <p>
            Drag and drop or <u>choose {multiple ? "files" : "a file"}</u> to
            upload {displayAllowedExtensions}
          </p>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) =>
          e.target.files && handleFiles(Array.from(e.target.files))
        }
        multiple={multiple}
        style={{ display: "none" }}
        accept={
          allowedExtensions
            ? allowedExtensions.map((ext) => `.${ext}`).join(",")
            : "*"
        }
      />

      {!dragAndDrop && (
        <Button
          color="primary"
          onClick={() =>
            fileInputRef.current ? fileInputRef.current.click() : {}
          }
        >
          Upload files {displayAllowedExtensions}
        </Button>
      )}

      <div className="pf-files">
        {files
          .filter((f) => f.name)
          .map(({ name, type, size }, index) => (
            <div key={name + index} className="pf-file-preview">
              <div className="pf-file-preview-details">
                <FilePreviewIcon type={type} />

                <div className="pf-file-preview-text">
                  <p>{name}</p>
                  <p className="pf-file-preview-secondary">
                    {formatFileSize(size)}
                  </p>
                </div>
              </div>
              <PressIcon
                className="pf-file-preview-delete"
                onClick={() => setFiles(files.filter((_, i) => i !== index))}
              >
                <svg
                  className="pf-file-delete pf-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                </svg>
              </PressIcon>
            </div>
          ))}
      </div>
    </div>
  );
}
