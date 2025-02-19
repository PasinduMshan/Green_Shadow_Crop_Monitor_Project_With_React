import React from 'react'

const Vehicle = () => {
  return (
      <>
          <div id="mainContentOfPages" className="dashboard-container">
              {/*<!-- Navbar -->*/}
              <div id="Navbar">
                  <nav className="navbar navbar-expand-lg">
                      <div className="container-fluid">
                          <a id="pageTitle" className="navbar-brand" href="#">Vehicle</a>
                          <span id="dateTime" className="ms-auto clock"></span>
                      </div>
                  </nav>
              </div>

              {/*<!-- Vehicle Content -->*/}
              <div id="vehiclePage">
                  <div className="container containerPage">
                      <h2>Vehicle Management</h2>

                      {/*<!-- Search Vehicle -->*/}
                      <div className="search-container">
                          <input type="text" id="searchVehicle" className="search-bar" placeholder="Search Vehicle..."/>
                      </div>

                      <form id="VehicleForm">
                          <div className="row g-3">
                              <div className="col-md-4">
                                  <label htmlFor="vehicleCode" className="form-label">Vehicle Code</label>
                                  <input type="text" className="form-control form-control-sm" id="vehicleCode" name="vehicleCode" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="licensePlateNumber" className="form-label">License Plate Number</label>
                                  <input type="text" className="form-control form-control-sm" id="licensePlateNumber" name="licensePlateNumber" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="vehicleCategory" className="form-label">Vehicle Category</label>
                                  <input type="text" className="form-control form-control-sm" id="vehicleCategory" name="vehicleCategory" required/>
                              </div>
                          </div>

                          <div className="row g-3 mt-3">
                              <div className="col-md-4">
                                  <label htmlFor="fuelType" className="form-label">Fuel Type</label>
                                  <input type="text" className="form-control form-control-sm" id="fuelType" name="fuelType" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="vehicleStatus" className="form-label">Status</label>
                                  <select id="vehicleStatus" className="form-select form-select-sm" required>
                                      <option value="AVAILABLE">Available</option>
                                      <option value="UNAVAILABLE">Unavailable</option>
                                      <option value="MAINTENANCE">Maintenance</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="remarks" className="form-label">Remarks</label>
                                  <input type="text" className="form-control form-control-sm" id="remarks" name="remarks"/>
                              </div>
                          </div>

                          <div className="row g-3 mt-3">
                              <div className="col-md-4">
                                  <label htmlFor="vehicleStaffId" className="form-label">Staff ID</label>
                                  <select id="vehicleStaffId" className="form-select form-select-sm" required>

                                  </select>
                              </div>
                          </div>

                          <div className="mt-4 d-flex justify-content-end gap-2">
                              <button id="btnSaveVehicle" type="button" className="btn btn-primary btn-sm">Submit</button>
                              <button id="btnUpdateVehicle" type="button" className="btn btn-secondary btn-sm">Update</button>
                          </div>
                      </form>

                      {/*<!-- Vehicle Table -->*/}
                      <div className="table-container mt-5">
                          <table className="table table-striped">
                              <thead>
                              <tr>
                                  <th>Vehicle Code</th>
                                  <th>License Plate Number</th>
                                  <th>Fuel Type</th>
                                  <th>Staff ID</th>
                                  <th>Actions</th>
                              </tr>
                              </thead>
                              <tbody id="vehicleTableBody">
                              {/*<!-- Vehicle data rows will be inserted here -->*/}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>

          </div>

      </>
  )
}

export default Vehicle