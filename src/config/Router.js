import {
    createBrowserRouter,
} from "react-router-dom";
import RenderLayout from "./RenderLayout";
import HalamanUtama from "../components/pages/HalamanUtama";
import SearchCar from "../components/pages/SearchCar";
import CarDetail from "../components/pages/CarDetail";

// NOTES: each time you want to add new page, add it here

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RenderLayout children={<HalamanUtama />} />,
    },
    {
        path: "/SearchCar",
        element: <RenderLayout children={<SearchCar />} />,
    },
    {
        path: "/CarDetail/:id",
        element: <RenderLayout children={<CarDetail />} />,
    },
]);