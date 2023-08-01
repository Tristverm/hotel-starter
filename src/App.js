import React from "react";

// Importing Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//importing pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

// Importing for React Router

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/room/:id", element: <RoomDetails /> },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
