import React from 'react'

const Equipment = () => {
  return (
      <>
          <div id="mainContentOfPages" className="dashboard-container">
              {/*<!-- Navbar -->*/}
              <div id="Navbar">
                  <nav className="navbar navbar-expand-lg">
                      <div className="container-fluid">
                          <a id="pageTitle" className="navbar-brand" href="#">Equipments</a>
                          <span id="dateTime" className="ms-auto clock"></span>
                      </div>
                  </nav>
              </div>

              {/*<!-- Equipments Content -->*/}
              <div id="equipmentPage">
                  <div className="container containerPage">
                      <h2>Equipments Management</h2>

                      {/*<!-- Search Equipments -->*/}
                      <div className="search-container">
                          <input type="text" id="searchEquipment" className="search-bar" placeholder="Search Equipment..."/>
                      </div>

                      <form id="EquipmentForm">
                          <div className="row g-3">
                              <div className="col-md-4">
                                  <label htmlFor="equipmentId" className="form-label">Equipment ID</label>
                                  <input type="text" className="form-control form-control-sm" id="equipmentId" name="equipmentId" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="equipmentName" className="form-label">Equipment Name</label>
                                  <input type="text" className="form-control form-control-sm" id="equipmentName" name="equipmentName" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="equipmentType" className="form-label">Equipment Type</label>
                                  <input type="text" className="form-control form-control-sm" id="equipmentType" name="equipmentType" required/>
                              </div>
                          </div>

                          <div className="row g-3 mt-3">
                              <div className="col-md-4">
                                  <label htmlFor="status" className="form-label">Status</label>
                                  <select id="status" className="form-select form-select-sm" name="status" required>
                                      <option value="AVAILABLE">Available</option>
                                      <option value="UNAVAILABLE">Unavailable</option>
                                      <option value="MAINTENANCE">Maintenance</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="equipmentStaffId" className="form-label">Staff ID</label>
                                  <select id="equipmentStaffId" className="form-select form-select-sm" required>

                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="equipmentFieldCode" className="form-label">Field Code</label>
                                  <select id="equipmentFieldCode" className="form-select form-select-sm" required>

                                  </select>
                              </div>
                          </div>

                          <div className="mt-4 d-flex justify-content-end gap-2">
                              <button id="btnSaveEquipment" type="button" className="btn btn-primary btn-sm">Submit</button>
                              <button id="btnUpdateEquipment" type="button" className="btn btn-secondary btn-sm">Update</button>
                          </div>
                      </form>

                      {/*<!-- Table to display equipment details -->*/}
                      <div className="table-container">
                          <table className="table table-striped">
                              <thead>
                              <tr>
                                  <th>Equipment ID</th>
                                  <th>Equipment Name</th>
                                  <th>Type</th>
                                  <th>Status</th>
                                  <th>Action</th>
                              </tr>
                              </thead>
                              <tbody id="EquipmentTableBody">
                              {/*<!-- Equipment data rows will be inserted here -->*/}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>


          </div>
      </>
  )
}

export default Equipment