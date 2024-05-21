// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import BaseRoute from './Components/BaseRoute';
// import DashboardRoute from './Components/DashboardRoute';
// import NotFound from './Components/NotFound';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<BaseRoute />} />
//       <Route path="/dashboard" element={<DashboardRoute />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export default App;

import React from 'react';
import Login from './Components/auth/login';
import Register from './Components/auth/register';
import BaseRoute from './Components/BaseRoute';
import DashboardRoute from './Components/DashboardRoute';
import NotFound from './Components/NotFound';
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App(){
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <DashboardRoute />,
    },
  ]
  const routesElement = useRoutes(routesArray)
  return(
    <AuthProvider>
    <BaseRoute/>
    <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  )
}

export default App;
