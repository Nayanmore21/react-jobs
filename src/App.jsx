

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/about" element={<h1>my app</h1>} />
  ));

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
