import {
    LOGIN_ROUTE, PROFILE_ROUTE, PROJECTS_ROUTE, PROJECTS_PAGE_ROUTE
} from "./utils/consts";
import Profile from "./page/Profile";
import Projects from "./page/Projects";
import Auth from "./page/Auth";
import ProjectPage from "./page/ProjectPage";

export const authRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: PROJECTS_ROUTE,
        Component: Projects
    },
    {
        path: PROJECTS_PAGE_ROUTE  + '/:id',
        Component: ProjectPage
    }
]
export const publicRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: PROJECTS_ROUTE,
        Component: Projects
    },
    {
        path: PROJECTS_PAGE_ROUTE + '/:id',
        Component: ProjectPage
    }
]