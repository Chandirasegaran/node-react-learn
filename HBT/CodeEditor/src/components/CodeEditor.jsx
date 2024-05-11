import React from 'react';
import PropTypes from 'prop-types';
import MonacoEditor from 'react-monaco-editor';

function CodeEditor({ code, onChange, theme, setTheme, onRun }) {
  const handleEditorChange = (newCode) => {
    onChange(newCode);
  };

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
  };

  const editorOptions = {
    minimap: {
      enabled: false,
    },
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-600 h-300">
        <MonacoEditor
          width="800"
          height="400"
          theme={theme}
          value={code}
          options={editorOptions}
          onChange={handleEditorChange}
        />
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={onRun} className="bg-blue-500 text-white px-4 py-2 rounded">
          Run
        </button>
        <div>
          <label className="mr-2">Theme:</label>
          <select value={theme} onChange={(e) => handleThemeChange(e)} className="p-2">
            <option value="vs-light">VS Light</option>
            <option value="vs-dark">VS Dark</option>
            <option value="hc-black">High Contrast</option>
          </select>
        </div>
      </div>
    </div>
  );
}

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  onRun: PropTypes.func.isRequired,
};

export default CodeEditor;
