// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// export function MyQuillEditor() {
//   const [editorHtml, setEditorHtml] = useState('');

//   const modules = {
//     toolbar: [
//       [{ 'header': '1' }, { 'header': '2' }],
//       ['bold', 'italic', 'underline', 'code'],
//       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//       [{ 'indent': '-1'}, { 'indent': '+1' }],
//       ['blockquote'],
//       [{ 'code-block': 'code-block' }],
//       [{ 'color': [] }, { 'background': [] }],
//       [{ 'font': [] }],
//       [{ 'size': ['small', false, 'large', 'huge'] }],
//       ['link'],
//       ['ql-icon-picker'],
//     ],
//   };

//   const formats = [
//     'header',
//     'bold', 'italic', 'underline', 'code',
//     'list', 'bullet',
//     'indent', 'blockquote', 'code-block',
//     'color', 'background',
//     'font', 'size',
//     'link',
//   ];

//   return (
//     <div>
//       <ReactQuill
//         theme="snow"
//         value={editorHtml}
//         onChange={setEditorHtml}
//         modules={modules}
//         formats={formats}
//         className="ql-editor ql-blank"
//         data-gramm="false"
//         placeholder={'Job description...'}
//         // placeholder={'Write something or insert a star ★'}
//         contentEditable="true"
//         data-placeholder="Job description..."
//       />
//     </div>
//   );
// }

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function MyQuillEditor() {
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'code'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['blockquote'],
      [{ 'code-block': 'code-block' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['link'],
      ['ql-icon-picker'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'code',
    'list', 'bullet',
    'indent', 'blockquote', 'code-block',
    'color', 'background',
    'font', 'size',
    'link',
  ];

  return (
    <div style={{ height: '300px' }}> {/* Adjust the height as needed */}
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={setEditorHtml}
        modules={modules}
        formats={formats}
        className="ql-editor ql-blank"
        data-gramm="false"
        placeholder={'Job description...'}
        // contentEditable="true"
        data-placeholder="Job description..."
      />
    </div>
  );
}

