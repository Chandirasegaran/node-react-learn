import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;


// import { useRef, useState } from "react";
// import { Box, HStack } from "@chakra-ui/react";
// import { Editor } from "@monaco-editor/react";
// import LanguageSelector from "./LanguageSelector";
// import { CODE_SNIPPETS } from "../constants";
// import Output from "./Output";
// import CustomInput from "./CustomInput";

// const CodeEditor = () => {
//   const editorRef = useRef();
//   const customInputRef = useRef();
//   const [value, setValue] = useState("");
//   const [customInput, setCustomInput] = useState("");

//   const [language, setLanguage] = useState("javascript");

//   const onMount = (editor) => {
//     editorRef.current = editor;
//     editor.focus();
//   };

//   const onSelect = (language) => {
//     setLanguage(language);
//     setValue(CODE_SNIPPETS[language]);
//   };

//   const handleInputChange = (newValue) => {
//     setCustomInput(newValue);
//   };

//   return (
//     <Box>
//       <HStack spacing={4}>
//         <Box w="50%">
//           <LanguageSelector language={language} onSelect={onSelect} />
//           <Editor
//             options={{
//               minimap: {
//                 enabled: false,
//               },
//             }}
//             height="75vh"
//             theme="vs-dark"
//             language={language}
//             defaultValue={CODE_SNIPPETS[language]}
//             onMount={onMount}
//             value={value}
//             onChange={(newValue) => setValue(newValue)}
//           />
//         </Box>
//         <CustomInput onInputChange={handleInputChange} />
//         <Output editorRef={editorRef} language={language} customInput={customInput} />
//       </HStack>
//     </Box>
//   );
// };

// export default CodeEditor;


// // import { useRef, useState } from "react";
// // import { Box, HStack, Textarea,Text } from "@chakra-ui/react";
// // import { Editor } from "@monaco-editor/react";
// // import LanguageSelector from "./LanguageSelector";
// // import { CODE_SNIPPETS } from "../constants";
// // import Output from "./Output";

// // const CodeEditor = () => {
// //   const editorRef = useRef();
// //   const customInputRef = useRef();
// //   const [value, setValue] = useState("");
// //   const [customInput, setCustomInput] = useState("");

// //   const [language, setLanguage] = useState("javascript");

// //   const onMount = (editor) => {
// //     editorRef.current = editor;
// //     editor.focus();
// //   };

// //   const onSelect = (language) => {
// //     setLanguage(language);
// //     setValue(CODE_SNIPPETS[language]);
// //   };

// //   const handleInputChange = (e) => {
// //     setCustomInput(e.target.value);
// //   };

// //   return (
// //     <Box>
// //       <HStack spacing={4}>
// //         <Box w="50%">
// //           <LanguageSelector language={language} onSelect={onSelect} />
// //           <Editor
// //             options={{
// //               minimap: {
// //                 enabled: false,
// //               },
// //             }}
// //             height="75vh"
// //             theme="vs-dark"
// //             language={language}
// //             defaultValue={CODE_SNIPPETS[language]}
// //             onMount={onMount}
// //             value={value}
// //             onChange={(value) => setValue(value)}
// //           />
// //         </Box>
// //         <Output editorRef={editorRef} language={language} customInput={customInput} />
       
// //         <Textarea
// //           ref={customInputRef}
// //           height="75vh"
// //           width="50%"
// //           bg="#1a1a1a"
// //           color="white"
// //           placeholder="Enter custom input here"
// //           onChange={handleInputChange}
// //           value={customInput}
// //         />
// //       </HStack>
// //     </Box>
// //   );
// // };

// // export default CodeEditor;


// // // import { useRef, useState } from "react";
// // // import { Box, HStack } from "@chakra-ui/react";
// // // import { Editor } from "@monaco-editor/react";
// // // import LanguageSelector from "./LanguageSelector";
// // // import { CODE_SNIPPETS } from "../constants";
// // // import Output from "./Output";
// // // import CustomInput from "./CustomInput";

// // // const CodeEditor = () => {
// // //   const editorRef = useRef();
// // //   const [value, setValue] = useState("");
// // //   const [language, setLanguage] = useState("javascript");

// // //   const onMount = (editor) => {
// // //     editorRef.current = editor;
// // //     editor.focus();
// // //   };

// // //   const onSelect = (language) => {
// // //     setLanguage(language);
// // //     setValue(CODE_SNIPPETS[language]);
// // //   };

// // //   return (
// // //     <Box>
// // //       <HStack spacing={4}>
// // //         <Box w="50%">
// // //           <LanguageSelector language={language} onSelect={onSelect} />
// // //           <Editor
// // //             options={{
// // //               minimap: {
// // //                 enabled: false,
// // //               },
// // //             }}
// // //             height="75vh"
// // //             theme="vs-dark"
// // //             language={language}
// // //             defaultValue={CODE_SNIPPETS[language]}
// // //             onMount={onMount}
// // //             value={value}
// // //             onChange={(value) => setValue(value)}
// // //           />
// // //         </Box>
// // //         <Output editorRef={editorRef} language={language} />
// // //         <CustomInput></CustomInput>
// // //       </HStack>
// // //     </Box>
// // //   );
// // // };
// // // export default CodeEditor;
