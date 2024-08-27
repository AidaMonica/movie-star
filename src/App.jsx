import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home }from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { Page404 } from './pages/Page404';
import { Favorites } from './pages/Favorites';
import { TopMovies } from './pages/TopMovies';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
       },
       {
        path: "/favorites",
        element: <Favorites />,
       },
       {
        path: "/movies/:year",
        element: <TopMovies />,
       },
       {
        path: "*",
        element: <Page404 />,
       }
    ]
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;