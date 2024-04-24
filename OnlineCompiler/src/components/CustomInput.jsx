import { useState, useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";

const CustomInput = ({ onInputChange }) => {
    const editorRef = useRef();
    const [value, setValue] = useState("");

    const handleInputChange = (newValue) => {
        setValue(newValue);
        onInputChange(newValue);
    };

    const onMount = (editor) => {
        editorRef.current = editor;
    };

    return (
        <Box w="50%">
            <Text mb={2} fontSize="lg">
                Custom Input:
            </Text>
            <br />
            <br />
            <Editor
                height="75vh"
                theme="vs-dark"
                language="plaintext"
                defaultValue=""
                onMount={onMount}
                value={value}
                onChange={(newValue) => handleInputChange(newValue)}
            />
        </Box>
    );
};

export default CustomInput;


// import { useState } from "react";
// import { Box, Textarea } from "@chakra-ui/react";

// const CustomInput = ({ onInputChange }) => {
//     const [value, setValue] = useState("");

//     const handleInputChange = (e) => {
//         setValue(e.target.value);
//         onInputChange(e.target.value);
//     };

//     return (
//         <Box w="50%">
//             <Text mb={2} fontSize="lg">
//                 Custom Input
//             </Text>
//             <Textarea
//                 height="75vh"
//                 bg="#1a1a1a"
//                 color="white"
//                 placeholder="Enter custom input"
//                 onChange={handleInputChange}
//                 value={value}
//             />
//         </Box>
//     );
// };

// export default CustomInput;


// // import { useRef, useState } from "react";
// // import { Box, HStack } from "@chakra-ui/react";
// // import { Editor } from "@monaco-editor/react";
// // import LanguageSelector from "./LanguageSelector";
// // import { CODE_SNIPPETS } from "../constants";
// // import Output from "./Output";

// // const CustomInputs = () => {
// //   const CinputsRef = useRef();
// //   const [civalue, setValue] = useState("");

// //   const onMount = (editor) => {
// //     CinputsRef.current = editor;
// //   };
// //   return (
// //     <Box>
// //       <HStack spacing={4}>
// //         <Box w="50%">
// //           <Editor
// //             options={{
// //               minimap: {
// //                 enabled: false,
// //               },
// //             }}
// //             height="75vh"
// //             theme="vs-dark"
// //             onMount={onMount}
// //             civalue={civalue}
// //             onChange={(civalue) => setValue(civalue)}
// //           />
// //         </Box>
// //       </HStack>
// //     </Box>
// //   );
// // };
// // export default CustomInputs;
