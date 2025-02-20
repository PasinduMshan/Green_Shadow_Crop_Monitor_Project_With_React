import './App.css'
import Field from "./pages/Field.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Staff from "./pages/Staff.tsx";
import Crop from "./pages/Crop.tsx";
import Equipment from "./pages/Equipment.tsx";
import Vehicle from "./pages/Vehicle.tsx";
import MonitoringLog from "./pages/MonitoringLog.tsx";
import User from "./pages/User.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/RootLayout.tsx";


function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout/>,
      children:([
        {path:"/dashboard", element:<Dashboard/>},
        {path:"/field", element:<Field/>},
        {path:"/staff", element:<Staff/>},
        {path:"/crop", element:<Crop/>},
        {path:"/equipment", element:<Equipment/>},
        {path:"/vehicle", element:<Vehicle/>},
        {path:"/monitoringLogs", element:<MonitoringLog/>},
        {path:"/user", element:<User/>}
      ])

    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
