import './App.css'
import Field from "./pages/Field.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Staff from "./pages/Staff.tsx";
import Crop from "./pages/Crop.tsx";
import Equipment from "./pages/Equipment.tsx";
import Vehicle from "./pages/Vehicle.tsx";
import MonitoringLog from "./pages/MonitoringLog.tsx";
import User from "./pages/User.tsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/RootLayout.tsx";
import {useSelector} from "react-redux";
import Login from "./pages/Login.tsx";
import {RootState} from "./store/store.tsx";


function App() {
  const isAuthenticated = useSelector((state:RootState) => state.user.isAuthenticated);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: isAuthenticated ? <RootLayout /> : <Navigate to="/login" />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "field", element: <Field /> },
        { path: "staff", element: <Staff /> },
        { path: "crop", element: <Crop /> },
        { path: "equipment", element: <Equipment /> },
        { path: "vehicle", element: <Vehicle /> },
        { path: "monitoringLogs", element: <MonitoringLog /> },
        { path: "user", element: <User /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
