import React from 'react'
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <>
        <div id="allPageSidebar">
            <div className={"sidebar"}>
                <h4 className="text-center">Green Shadow Agriculture</h4>
                <p className="text-center text-white">Crop Monitoring System</p>
                <Link className={'linkStyle'} to={"/dashboard"}> <i className="bi bi-house"></i> Dashboard </Link>
                <Link className={'linkStyle'} to={"/user"}> <i className="bi bi-person"></i> User </Link>
                <Link className={'linkStyle'} to={"/crop"}> <i className="bi bi-tree"></i> Crop </Link>
                <Link className={'linkStyle'} to={"/field"}> <i className="bi bi-geo-alt"></i> Field </Link>
                <Link className={'linkStyle'} to={"/monitoringLogs"}> <i className="bi bi-bar-chart"></i> Monitoring Logs </Link>
                <Link className={'linkStyle'} to={"/staff"}> <i className="bi bi-people"></i> Staff </Link>
                <Link className={'linkStyle'} to={"/equipment"}> <i className="bi bi-tools"></i> Equipment </Link>
                <Link className={'linkStyle'} to={"/vehicle"}> <i className="bi bi-truck"></i> Vehicle </Link>
            </div>
        </div>
    </>
  )
}

export default Navigation