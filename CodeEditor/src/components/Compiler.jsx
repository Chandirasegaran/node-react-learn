import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Compiler({ code, language, onCompileComplete }) {
  useEffect(() => {
    const compileAndRunCode = async () => {
      try {
        const response = await axios.post(
          'https://judge0-ce.p.rapidapi.com/submissions',
          {
            source_code: code,
            language_id: language,
            stdin: '',
            expected_output: '',
            cpu_time_limit: '2',
            cpu_extra_time: '0.5',
            wall_time_limit: '5',
            memory_limit: '128000',
            stack_limit: '64000',
            max_processes_and_or_threads: '30',
            enable_per_process_and_thread_time_limit: false,
            enable_per_process_and_thread_memory_limit: true,
          },
          {
            headers: {
              'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
              'x-rapidapi-key': '0e69d0bbf9msh08d868f663a29d2p18bbf6jsn637bdc845105', // Replace with your RapidAPI key
              'content-type': 'application/json',
              accept: 'application/json',
            },
          }
        );

        const submissionId = response.data.token;

        let status = 'Queue';
        while (status !== 'Completed' && status !== 'Failed') {
          const result = await axios.get(
            `https://judge0-ce.p.rapidapi.com/submissions/${submissionId}`,
            {
              headers: {
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                'x-rapidapi-key': '0e69d0bbf9msh08d868f663a29d2p18bbf6jsn637bdc845105', // Replace with your RapidAPI key
                accept: 'application/json',
              },
            }
          );
          status = result.data.status.description;

          if (status === 'Completed') {
            if (result.data.stdout) {
              onCompileComplete(result.data.stdout);
            } else if (result.data.stderr) {
              onCompileComplete(result.data.stderr);
            } else {
              onCompileComplete('No output');
            }
          } else if (status === 'Failed') {
            onCompileComplete('Compilation failed');
          }
        }
      } catch (error) {
        console.error('Error compiling and executing code:', error.response ? error.response.data : error);
        onCompileComplete('Error compiling and executing code. Please check your code and try again.');
      }
    };

    if (code && language) {
      compileAndRunCode();
    }
  }, [code, language, onCompileComplete]);

  return (
    <div className="mt-4">
      <h2 className="text-xl">Output</h2>
    </div>
  );
}

Compiler.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  onCompileComplete: PropTypes.func.isRequired,
};

export default Compiler;
