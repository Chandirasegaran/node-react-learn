import { useState } from "react";
import { Box, Button, Text, Input, useToast } from "@chakra-ui/react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode, inputValue);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output:
      </Text>
      <Input
        mb={4}
        placeholder="Enter input (if required)"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Box
        height="50vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        overflow="auto"
      >
        {output.map((line, i) => (
          <Text key={i}>{line}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default Output;


// import { useState, useRef } from "react";
// import { Box, Button, Text, useToast } from "@chakra-ui/react";
// import { executeCode } from "../api";

// const Output = ({ editorRef, language }) => {
//   const toast = useToast();
//   const [output, setOutput] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const inputRef = useRef(null);

//   const runCode = async () => {
//     const sourceCode = editorRef.current.getValue();
//     if (!sourceCode) return;
//     try {
//       setIsLoading(true);
//       const { run: result } = await executeCode(language, sourceCode, "");
//       setOutput(result.output.split("\n"));
//       setIsError(!!result.stderr);
//     } catch (error) {
//       console.log(error);
//       toast({
//         title: "An error occurred.",
//         description: error.message || "Unable to run code",
//         status: "error",
//         duration: 6000,
//       });
//     } finally {
//       setIsLoading(false);
//       inputRef.current.focus();
//     }
//   };

//   const handleInput = (e) => {
//     if (e.key === "Enter") {
//       const input = e.target.value.trim();
//       if (input) {
//         setOutput((prevOutput) => [...prevOutput, `> ${input}`, ...handleInputLogic(input)]);
//         e.target.value = "";
//       }
//     }
//   };

//   const handleInputLogic = (input) => {
//     // Add your input handling logic here
//     // Return an array of strings to be displayed in the output
//     return [`Input received: ${input}`];
//   };

//   return (
//     <Box w="50%">
//       <Text mb={2} fontSize="lg">
//         Terminal:
//       </Text>
//       <Button
//         variant="outline"
//         colorScheme="green"
//         mb={4}
//         isLoading={isLoading}
//         onClick={runCode}
//       >
//         Run Code
//       </Button>
//       <Box
//         height="50vh"
//         p={2}
//         color={isError ? "red.400" : ""}
//         border="1px solid"
//         borderRadius={4}
//         borderColor={isError ? "red.500" : "#333"}
//         overflow="auto"
//       >
//         {output.map((line, i) => (
//           <Text key={i}>{line}</Text>
//         ))}
//       </Box>
//       <Box mt={4}>
//         <input
//           type="text"
//           ref={inputRef}
//           onKeyPress={handleInput}
//           placeholder="Enter input here..."
//           style={{
//             width: "100%",
//             backgroundColor: "#1a1a1a",
//             color: "white",
//             border: "none",
//             padding: "8px 12px",
//             borderRadius: "4px",
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Output;

// // import { useState } from "react";
// // import { Box, Button, Text, useToast } from "@chakra-ui/react";
// // import { executeCode } from "../api";

// // const Output = ({ editorRef, language }) => {
// //   const toast = useToast();
// //   const [output, setOutput] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [isError, setIsError] = useState(false);
// //   const [inputValue, setInputValue] = useState("");
// //   const [consoleInput, setConsoleInput] = useState("");

// //   const runCode = async () => {
// //     const sourceCode = editorRef.current.getValue();
// //     if (!sourceCode) return;
// //     try {
// //       setIsLoading(true);
// //       const { run: result } = await executeCode(language, sourceCode, consoleInput);
// //       setOutput(result.output.split("\n"));
// //       setIsError(!!result.stderr);
// //     } catch (error) {
// //       console.log(error);
// //       toast({
// //         title: "An error occurred.",
// //         description: error.message || "Unable to run code",
// //         status: "error",
// //         duration: 6000,
// //       });
// //     } finally {
// //       setIsLoading(false);
// //       setInputValue("");
// //     }
// //   };

// //   const handleConsoleInput = (e) => {
// //     setConsoleInput(e.target.value);
// //   };

// //   return (
// //     <Box w="50%">
// //       <Text mb={2} fontSize="lg">
// //         Output:
// //       </Text>
// //       <Button
// //         variant="outline"
// //         colorScheme="green"
// //         mb={4}
// //         isLoading={isLoading}
// //         onClick={runCode}
// //       >
// //         Run Code
// //       </Button>
// //       <Box
// //         height="50vh"
// //         p={2}
// //         color={isError ? "red.400" : ""}
// //         border="1px solid"
// //         borderRadius={4}
// //         borderColor={isError ? "red.500" : "#333"}
// //         overflow="auto"
// //       >
// //         {output.length
// //           ? output.map((line, i) => <Text key={i}>{line}</Text>)
// //           : 'Click "Run Code" to see the output here'}
// //       </Box>
// //       <Box mt={4}>
// //         <Text mb={2} fontSize="lg">
// //           Console Input:
// //         </Text>
// //         <input
// //           type="text"
// //           className="console-input"
// //           placeholder="Enter input here if required..."
// //           onChange={handleConsoleInput}
// //           value={consoleInput}
// //         />
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Output;


// // // import { useState, useRef } from "react";
// // // import { Box, Button, Text, useToast, Textarea } from "@chakra-ui/react";
// // // import { executeCode } from "../api";

// // // const Output = ({ editorRef, language, customInput }) => {
// // //   const toast = useToast();
// // //   const [output, setOutput] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [isError, setIsError] = useState(false);
// // //   const [inputValue, setInputValue] = useState("");

// // //   const runCode = async () => {
// // //     const sourceCode = editorRef.current.getValue();
// // //     if (!sourceCode) return;
// // //     try {
// // //       setIsLoading(true);
// // //       const { run: result } = await executeCode(language, sourceCode, inputValue || customInput);
// // //       setOutput(result.output.split("\n"));
// // //       result.stderr ? setIsError(true) : setIsError(false);
// // //     } catch (error) {
// // //       console.log(error);
// // //       toast({
// // //         title: "An error occurred.",
// // //         description: error.message || "Unable to run code",
// // //         status: "error", 
// // //         duration: 6000,
// // //       });
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <Box w="50%">
// // //       <Text mb={2} fontSize="lg">
// // //         Output:
// // //       </Text>
// // //       <Button
// // //         variant="outline"
// // //         colorScheme="green"
// // //         mb={4}
// // //         isLoading={isLoading}
// // //         onClick={runCode}
// // //       >
// // //         Run Code
// // //       </Button>
// // //       <Box
// // //         height="50vh"
// // //         p={2}
// // //         color={isError ? "red.400" : ""}
// // //         border="1px solid"
// // //         borderRadius={4}
// // //         borderColor={isError ? "red.500" : "#333"}
// // //         overflow="auto"
// // //       >
// // //         {output
// // //           ? output.map((line, i) => <Text key={i}>{line}</Text>)
// // //           : 'Click "Run Code" to see the output here'}
// // //       </Box>
// // //       <Box mt={4}>
// // //         <Text mb={2} fontSize="lg">
// // //           Console Input:
// // //         </Text>
// // //         <Textarea
// // //           height="25vh"
// // //           bg="#1a1a1a"
// // //           color="white"
// // //           placeholder="Enter input here if required..."
// // //           onChange={(e) => setInputValue(e.target.value)}
// // //           value={inputValue}
// // //         />
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default Output;


// // // // import { useState } from "react";
// // // // import { Box, Button, Text, useToast } from "@chakra-ui/react";
// // // // import { executeCode } from "../api";

// // // // const Output = ({ editorRef, language ,customInput}) => {
// // // //   const toast = useToast();
// // // //   const [output, setOutput] = useState(null);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [isError, setIsError] = useState(false);

// // // //   const runCode = async () => {
// // // //     const sourceCode = editorRef.current.getValue();
// // // //     if (!sourceCode) return;
// // // //     try {
// // // //       setIsLoading(true);
// // // //       const { run: result } = await executeCode(language, sourceCode, customInput);
// // // //       setOutput(result.output.split("\n"));
// // // //       result.stderr ? setIsError(true) : setIsError(false);
// // // //     } catch (error) {
// // // //       console.log(error);
// // // //       toast({
// // // //         title: "An error occurred.",
// // // //         description: error.message || "Unable to run code",
// // // //         status: "error",
// // // //         duration: 6000,
// // // //       });
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Box w="50%">
// // // //       <Text mb={2} fontSize="lg">
// // // //         Output:
// // // //       </Text>
// // // //       <Button
// // // //         variant="outline"
// // // //         colorScheme="green"
// // // //         mb={4}
// // // //         isLoading={isLoading}
// // // //         onClick={runCode}
// // // //       >
// // // //         Run Code
// // // //       </Button>
// // // //       <Box
// // // //         height="75vh"
// // // //         p={2}
// // // //         color={isError ? "red.400" : ""}
// // // //         border="1px solid"
// // // //         borderRadius={4}
// // // //         borderColor={isError ? "red.500" : "#333"}
// // // //       >
// // // //         {output
// // // //           ? output.map((line, i) => <Text key={i}>{line}</Text>)
// // // //           : 'Click "Run Code" to see the output here'}
// // // //       </Box>
// // // //     </Box>
// // // //   );
// // // // };
// // // // export default Output;
