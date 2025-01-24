import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import NewPage from "./components/NewPage";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DailyHistory from './Pages/DailyHistory';
import WeeklyHistory from './Pages/WeeklyHistory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/newday",
        element: <NewPage />,
      },
      {
        path: "/history/daily",
        element: <DailyHistory />,
      },
      {
        path: "/history/weekly",
        element: <WeeklyHistory />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
