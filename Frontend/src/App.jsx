import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import "./App.css";
import PageNotFound from "./pages/Pagenotfound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

import Login from "./pages/Login.jsx";
import { PlacesProvider } from "./contexts/PlacesContext.jsx";
import { AuthProvider, useAuth } from "./contexts/AuthContext.jsx";
import SignUp from "./pages/SignUp.jsx";
import AllList from "./components/AllList.jsx";
import PlaceDetail from "./components/PlaceDetail.jsx";
import Hostels from "./components/Hostels.jsx";
import Restaurants from "./components/Restaurants.jsx";
import Playgrounds from "./components/Playgrounds.jsx";
import Departments from "./components/Departments.jsx";
import Form from "./components/Form.jsx";
import RequestPlaces from "./components/RequestPlaces.jsx";
import { useState } from "react";

function App() {
  return (
    <PlacesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="app"
              element={
                <ProtectedRoutes>
                  <AppLayout />
                </ProtectedRoutes>
              }
            >
              <Route index element={<Navigate replace to="all" />} />
              <Route path="requestedLocations" element={<RequestPlaces />} />
              <Route path="requestedLocations/:id" element={<PlaceDetail />} />
              <Route path="all" element={<AllList />} />
              <Route path="all/:id" element={<PlaceDetail />} />
              <Route path="departments" element={<Departments />} />
              <Route path="departments/:id" element={<PlaceDetail />} />
              <Route path="hostels" element={<Hostels />} />
              <Route path="hostels/:id" element={<PlaceDetail />} />
              <Route path="restaurants" element={<Restaurants />} />
              <Route path="restaurants/:id" element={<PlaceDetail />} />
              <Route path="playgrounds" element={<Playgrounds />} />
              <Route path="playgrounds/:id" element={<PlaceDetail />} />
              <Route path="form" element={<Form />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </PlacesProvider>
  );
}

export default App;
