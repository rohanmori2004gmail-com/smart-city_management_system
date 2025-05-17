import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './About';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Services from './services1';
import Work from './Work';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/About",
      element: <AboutUs />
    },
    {
      path: "/services",
      element: <Services />
    },
    {
      path: "/Work",
      element: <Work /> 
    },
    {
      path: "/Contact",
      element: <Contact />
    }
   
   
  ]
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

