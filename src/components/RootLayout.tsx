import Navigation from "./Navigation.tsx";
import {Outlet} from "react-router-dom";

export function RootLayout() {
    return(
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    );
}