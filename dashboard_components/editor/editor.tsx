// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// export function MyQuillEditor(props: { description1: any }) {
//   const description = props.description1;

//   description.replace(/\n/g, " ");
//   const [editorHtml, setEditorHtml] = useState(description);

//   const modules = {
//     toolbar: [
//       [{ header: "1" }, { header: "2" }],
//       ["bold", "italic", "underline", "code"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       [{ indent: "-1" }, { indent: "+1" }],
//       ["blockquote"],
//       [{ "code-block": "code-block" }],
//       [{ color: [] }, { background: [] }],
//       [{ font: [] }],
//       [{ size: ["small", false, "large", "huge"] }],
//       ["link"],
//       ["ql-icon-picker"],
//     ],
//   };

//   const formats = [
//     "header",
//     "bold",
//     "italic",
//     "underline",
//     "code",
//     "list",
//     "bullet",
//     "indent",
//     "blockquote",
//     "code-block",
//     "color",
//     "background",
//     "font",
//     "size",
//     "link",
//   ];

//   return (
//     <ReactQuill
//       theme="snow"
//       value={editorHtml}
//       onChange={setEditorHtml}
//       modules={modules}
//       formats={formats}
//     />
//   );
// }
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

export function MyQuillEditor(props: { description1: any }) {
  const { description1 } = props;

  // State to hold the editor content
  const [editorHtml, setEditorHtml] = useState(description1.replace(/\n/g, " "));

  // Update editorHtml state when description1 prop changes
  useEffect(() => {
    setEditorHtml(description1.replace(/\n/g, " "));
  }, [description1]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "code"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["blockquote"],
      [{ "code-block": "code-block" }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["link"],
      ["ql-icon-picker"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "code",
    "list",
    "bullet",
    "indent",
    "blockquote",
    "code-block",
    "color",
    "background",
    "font",
    "size",
    "link",
  ];

  return (
    <ReactQuill
      theme="snow"
      value={editorHtml}
      onChange={setEditorHtml}
      modules={modules}
      formats={formats}
    />
  );
}
