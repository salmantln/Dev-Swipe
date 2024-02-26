import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    const updatedFiles = { ...files };
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        updatedFiles[file.name] = file;
      }
    }
    return updatedFiles;
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      updateFilesCb(convertNestedObjectToArray(updatedFiles));
    }
  };

  const removeFile = (fileName) => {
    const updatedFiles = { ...files };
    delete updatedFiles[fileName];
    setFiles(updatedFiles);
    updateFilesCb(convertNestedObjectToArray(updatedFiles));
  };

  return (
    <>
      <section className="relative my-6 mx-auto border-2 border-dotted border-gray-200 p-8 rounded-md flex flex-col items-center bg-white">
        <label className="absolute -top-6 text-sm text-black">{label}</label>
        <p className="font-bold text-center">Drag and drop your files anywhere or</p>
        <button
          type="button"
          onClick={handleUploadBtnClick}
          className="mt-4 px-4 py-2 border-2 border-blue-500 text-blue-500 font-bold uppercase rounded hover:bg-blue-500 hover:text-white transition-colors"
        >
          <i className="fas fa-file-upload mr-2"></i>
          Upload {otherProps.multiple ? "files" : "a file"}
        </button>
        <input
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          className="opacity-0"
          {...otherProps}
        />
      </section>
      <article className="mb-8">
        <span className="block mb-2">To Upload</span>
        <div className="flex flex-wrap">
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
              <div key={fileName} className="w-1/5 p-1">
                <div className="relative h-32 rounded-md border border-gray-300 overflow-hidden">
                  {isImageFile && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col p-2 text-white">
                    <span className="text-xs">{file.name}</span>
                    <span className="text-xs">{convertBytesToKB(file.size)} kb</span>
                    <button
                      onClick={() => removeFile(fileName)}
                      className="absolute top-1 right-1 text-white"
                    >
                         <FontAwesomeIcon icon={faTimes} />
                      {/* <i className="fas fa-times"></i> */}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default FileUpload;
