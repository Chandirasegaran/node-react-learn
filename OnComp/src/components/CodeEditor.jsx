import { useRef, useState, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import Output from "./Output";
import CustomInput from "./CustomInput";
import { executeCode } from "../api";

const CodeEditor = () => {
  const editorRef = useRef();
  const customInputRef = useRef();
  const [value, setValue] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    fetchLanguageInfo();
  }, []); // Fetch language info when the component mounts

  const fetchLanguageInfo = async () => {
    try {
      const response = await fetch("http://localhost:3000/python");
      const data = await response.json();
      setLanguage(data.name); // Set the language state
      setValue(`// Version: ${data.version}\n\n`);
    } catch (error) {
      console.error("Failed to fetch language info:", error);
    }
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleInputChange = (newValue) => {
    setCustomInput(newValue);
  };


  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue=""
            onMount={onMount}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </Box>
        <CustomInput onInputChange={handleInputChange} />
        <Output editorRef={editorRef} language={language} customInput={customInput} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;


// import { useRef, useState, useEffect } from "react";


// import { Box, HStack } from "@chakra-ui/react";
// import { Editor } from "@monaco-editor/react";
// import Output from "./Output";
// import CustomInput from "./CustomInput";
// import { executeCode } from "../api";

// const CodeEditor = () => {
//   const editorRef = useRef();
//   const customInputRef = useRef();
//   const [value, setValue] = useState("");
//   const [customInput, setCustomInput] = useState("");
//   const [language, setLanguage] = useState("");

//   useEffect(() => {
//     fetchLanguageInfo();
//   }, []); // Fetch language info when the component mounts

//   const fetchLanguageInfo = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/python");
//       const data = await response.json();
//       console.log(data.name)
//       console.log(data.version)
//       setLanguage(data.name); // Set the language state
//       setValue(`// Version: ${data.version}\n\n`);
//     } catch (error) {
//       console.error("Failed to fetch language info:", error);
//     }
//   };

//   const onMount = (editor) => {
//     editorRef.current = editor;
//     editor.focus();
//   };

//   const handleInputChange = (newValue) => {
//     setCustomInput(newValue);
//   };

//   return (
//     <Box>
//       <HStack spacing={4}>
//         <Box w="50%">
//           <Editor
//             options={{
//               minimap: {
//                 enabled: false,
//               },
//             }}
//             height="75vh"
//             theme="vs-dark"
//             language="plaintext"
//             defaultValue=""
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
