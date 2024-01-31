import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// loda lasan
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
// end
import HomePage from "./pages/HomePage.jsx";
import "./App.css";
import PageNotFound from "./pages/Pagenotfound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

import Login from "./pages/Login.jsx";
import { PlacesProvider } from "./contexts/PlacesContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import SignUp from "./pages/SignUp.jsx";
import AllList from "./components/AllList.jsx";
import PlaceDetail from "./components/PlaceDetail.jsx";
import Hostels from "./components/Hostels.jsx";
import Restaurants from "./components/Restaurants.jsx";
import Playgrounds from "./components/Playgrounds.jsx";
import Departments from "./components/Departments.jsx";
import Form from "./components/Form.jsx";
import RequestPlaces from "./components/RequestPlaces.jsx";
import Others from "./components/Others.jsx";

const locales = {
  en: { title: "english" },
  hi: { title: "hindi" },
};

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLocale = (event) => {
    const selectedLocale = event.target.value;
    i18n.changeLanguage(selectedLocale);
  };

  return (
    <>
      <div>
        <label htmlFor="localeDropdown">{t("Select Language")}: </label>
        <select id="localeDropdown" onChange={handleChangeLocale}>
          {Object.keys(locales).map((locale) => (
            <option key={locale} value={locale}>
              {locales[locale].title}
            </option>
          ))}
        </select>
      </div>{" "}
      <PlacesProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<Login />} />
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
                <Route
                  path="requestedLocations/:id"
                  element={<PlaceDetail />}
                />
                <Route path="all" element={<AllList />} />
                <Route path="all/:id" element={<PlaceDetail />} />
                <Route path="departments" element={<Departments />} />
                <Route path="departments/:id" element={<PlaceDetail />} />
                <Route path="others" element={<Others />} />
                <Route path="others/:id" element={<Others />} />
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
    </>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
