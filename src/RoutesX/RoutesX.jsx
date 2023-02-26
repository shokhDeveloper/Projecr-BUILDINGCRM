import { useRoutes } from "react-router"
import { Asosiy } from "../Pages"
import { Klient } from "../Pages/Klient/Klient"
import { Zayafki } from "../Pages/Заявки/Zayafki"
import { Sotrudkiko } from "../Pages/Сотрудники"

export const RoutesX = () => {
    const route = [
        // {
        //     path: "/",
        //     element: <Asosiy/>
        // },
        {
            path: "/главная/*",
            element: <Asosiy/>,
        },
        {
            path: "/сотрудники",
            element: <Sotrudkiko/>
        },
        {
            path: "/заявки",
            element: <Zayafki/>
        },
        {
            path: "/клиенты",
            element: <Klient/>
        }
    ]
    return useRoutes(route)
}