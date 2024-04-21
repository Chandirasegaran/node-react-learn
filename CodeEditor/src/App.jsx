import React, { useState } from 'react';
// import CodeEditor from './CodeEditor';
// import Compiler from './Compiler';
import CodeEditor from './components/CodeEditor';
import Compiler from './components/Compiler';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('52'); // Default to JavaScript
  const [theme, setTheme] = useState('vs-dark');
  const [output, setOutput] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleRunCode = () => {
    setOutput('Compiling and executing code...');
  };

  const handleCompileComplete = (result) => {
    setOutput(result);
  };
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl mb-4">Rich Code Editor</h1>
      <div className="grid grid-cols-2 gap-8">
        <CodeEditor 
          code={code} 
          onChange={handleCodeChange} 
          theme={theme} 
          setTheme={handleThemeChange}
          onRun={handleRunCode}
        />
        <div className="flex flex-col space-y-4">
          <label className="mr-2">Language:</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="p-2">
            <option value="52">JavaScript</option>
            <option value="71">Python</option>
            <option value="62">Java</option>
            {/* Add more language options */}
          </select>
          <Compiler code={code} language={language} onCompileComplete={handleCompileComplete} />
          <div className="mt-4">
            <h2 className="text-xl">Output</h2>
            <pre className="bg-gray-200 p-4 rounded-md">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
