import {
    ADMIN_ROUTE, APPLICATION_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE,
    VACANCIES_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth";
import Bankemploee from "./pages/Bankemploee";
import Main from "./pages/Main";
import Vacancies from "./pages/Vacancies";
import ApplicationPage from "./pages/ApplicationPage";

export const authRoutes = [


]
export const publicRoutes = [

    {
        path: ADMIN_ROUTE,
        Component: Bankemploee
    },

    {
        path: APPLICATION_ROUTE,
        Component: ApplicationPage
    },

    {
        path: MAIN_ROUTE,
        Component: Main
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: VACANCIES_ROUTE,
        Component: Vacancies
    },


]