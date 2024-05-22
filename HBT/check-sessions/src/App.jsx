// // src/App.js
// import React, { useState } from 'react';
// import LoginForm from './components/LoginForm';
// import SessionChecker from './components/SessionChecker';

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <div className="App">
//       {!loggedIn ? (
//         <LoginForm onLogin={setLoggedIn} />
//       ) : (
//         <SessionChecker />
//       )}
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import SessionChecker from './components/SessionChecker';
import Cookies from 'js-cookie';
import axios from 'axios';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const sessionCookie = Cookies.get('session_id');

    if (sessionCookie) {
      axios.defaults.headers.common['Cookie'] = `session_id=${sessionCookie}`;

      axios.get('http://localhost:3000/auth/check-session', { withCredentials: true })
        .then(response => {
          if (response.data.loggedIn) {
            setLoggedIn(true);
          }
        })
        .catch(error => {
          console.error('Error checking session:', error);
        });
    }
  }, []);

  return (
    <div className="App">
      {!loggedIn ? (
        <LoginForm onLogin={setLoggedIn} />
      ) : (
        <SessionChecker onLogout={() => setLoggedIn(false)} />
      )}
    </div>
  );
};

export default App;