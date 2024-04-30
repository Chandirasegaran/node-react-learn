import { useRef, useState } from "react";
import { Box, HStack, Button, Text, useToast } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { executeCode } from "../api";

const CodeConsole = () => {
  const editorRef = useRef();
  const [editorValue, setEditorValue] = useState("");
  const [consoleContent, setConsoleContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputBuffer, setInputBuffer] = useState([]);
  const [isOutputEditable, setIsOutputEditable] = useState(false);

  const toast = useToast();

  const runCode = async () => {
    const sourceCode = editorValue;
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode("c", sourceCode, inputBuffer.join("\n"));
      setConsoleContent(prevContent => prevContent + ">> " + inputBuffer.join("\n") + "\n" + result.output + "\n");
      setInputBuffer([]);
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
      setIsOutputEditable(false);
    }
  };

  const handleConsoleInput = (e) => {
    if (e.key === "Enter") {
      setInputBuffer(prevBuffer => [...prevBuffer, e.target.value]);
      e.target.value = "";
    }
  };

  const handleOutputClick = () => {
    if (!isLoading) {
      setIsOutputEditable(true);
    }
  };

  const handleOutputChange = (e) => {
    setConsoleContent(e.target.value);
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
            language="c"
            defaultValue="//"
            onMount={(editor) => {
              editorRef.current = editor;
              editor.focus();
            }}
            value={editorValue}
            onChange={(newValue) => setEditorValue(newValue)}
          />
        </Box>
        <Box w="50%">
          <Box mb={2}>
            <Text mb={2} fontSize="lg">
              Console:
            </Text>
            <textarea
              className="console-textarea"
              placeholder="Enter input here if required..."
              onKeyDown={handleConsoleInput}
              style={{ width: "100%", height: "25vh" }}
            />
          </Box>
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
            height="75vh"
            p={2}
            color={isError ? "red.400" : ""}
            border="1px solid"
            borderRadius={4}
            borderColor={isError ? "red.500" : "#333"}
            overflow="auto"
            whiteSpace="pre-wrap"
            onClick={handleOutputClick}
          >
            <textarea
              readOnly={!isOutputEditable}
              value={consoleContent}
              onChange={handleOutputChange}
              style={{
                width: "100%",
                height: "100%",
                background: isOutputEditable ? "#1a1a1a" : "transparent",
                color: isOutputEditable ? "white" : "",
                border: "none",
                resize: "none",
                overflow: "auto",
                whiteSpace: "pre-wrap",
              }}
            />
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default CodeConsole;
