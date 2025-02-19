export function Dashboard() {
    return (
        <>
            <div id="mainContentOfPages" className="dashboard-container">
                {/*<!-- Navbar -->*/}
                <div id="Navbar">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a id="pageTitle" className="navbar-brand" href="#">Dashboard</a>
                            <span id="dateTime" className="ms-auto clock"></span>
                        </div>
                    </nav>
                </div>

                {/*<!-- Dashboard Content -->*/}
                <div id="dashBoardPage">
                    <div className="container mt-4">
                        <br/>
                        <h2>Welcome to Green Shadow Agriculture</h2>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h5 className="card-title">Staff Members</h5>
                                        <p id="staffCount" className="card-text">0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h5 className="card-title">Vehicles</h5>
                                        <p id="vehicleCount" className="card-text">0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h5 className="card-title">Equipment</h5>
                                        <p id="equipmentCount" className="card-text">0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h5 className="card-title">Fields</h5>
                                        <p id="fieldCount" className="card-text">0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}