import HomePage from "../Pages/HomePage";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import ListTripsPage from "../Pages/ListTripsPage";
import TripDetailsPage from "../Pages/TripDetailsPage";
import LoginPage from "../Pages/LoginPage";
import ErrorPage from "../Pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="admin" element={<AdminHomePage />} />
                <Route path="application" element={<ApplicationFormPage />} />
                <Route path="create" element={<CreateTripPage />} />
                <Route path="list" element={<ListTripsPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="trip" element={<TripDetailsPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}