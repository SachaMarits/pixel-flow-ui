import "./file-upload.scss";
import "../EmptyLinePlaceholder/empty-line-placeholder.scss";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "../Button";

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

export default function FileUpload({
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

  const displayAllowedExtensions =
    allowedExtensions &&
    showAllowedExtensions &&
    `(.${allowedExtensions.join(", .")})`;

  useEffect(() => {
    if (onChange) onChange(files);
  }, [files]);

  return (
    <div
      className={`pf-file-upload ${className}`}
      onDragEnter={dragAndDrop ? handleDragEnter : undefined}
      onDragOver={dragAndDrop ? handleDragEnter : undefined}
      onDragLeave={dragAndDrop ? handleDragLeave : undefined}
      onDrop={dragAndDrop ? handleDrop : undefined}
    >
      {dragAndDrop && (
        <div
          className={`pf-empty-line-placeholder${isDragOver ? "-success" : ""}`}
        >
          <p className="pf-file-upload-placeholder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pf-upload-icon"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>{" "}
            Drag and drop or{" "}
            <u
              className="pf-pointer"
              onClick={() => fileInputRef?.current?.click()}
            >
              choose {multiple ? "files" : "a file"}
            </u>{" "}
            to upload {displayAllowedExtensions}
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
          // action="upload"
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
          .map(({ name }) => (
            <div key={name} className="pf-file-preview">
              {name}{" "}
              <svg
                className="pf-file-delete pf-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                onClick={() => setFiles(files.filter((f) => f.name !== name))}
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
              <i
                className="pf-file-delete mdi mdi-close text-danger pointer ml-2 p-1"
                onClick={() => setFiles(files.filter((f) => f.name !== name))}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
