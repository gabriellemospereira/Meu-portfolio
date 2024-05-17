import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';

import './styles/components/main.sass'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Projects from './pages/Projects.jsx';
import FolderProjects from './pages/FolderProjects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
  },

  {
    path: "/projects",
    element: <Projects />
  },

  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/folder-projects",
    element: <FolderProjects />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
