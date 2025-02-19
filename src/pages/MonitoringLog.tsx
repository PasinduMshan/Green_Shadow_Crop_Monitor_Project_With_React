import React from 'react'

const MonitoringLog = () => {
  return (
      <>
          <div id="mainContentOfPages" className="dashboard-container">
              {/*<!-- Navbar -->*/}
              <div id="Navbar">
                  <nav className="navbar navbar-expand-lg">
                      <div className="container-fluid">
                          <a id="pageTitle" className="navbar-brand" href="#">Monitoring Log Details</a>
                          <span id="dateTime" className="ms-auto clock"></span>
                      </div>
                  </nav>
              </div>

              {/*<!-- Monitoring Log Content -->*/}
              <div id="monitoringLogPage">
                  <div className="container containerPage">
                      <h2>Monitoring Log Management</h2>

                      {/*<!-- Search Monitoring Log  -->*/}
                      <div className="search-container">
                          <input type="text" id="searchLog" className="search-bar" placeholder="Search Logs..."/>
                      </div>

                      <form id="logForm" className="mt-4" encType="multipart/form-data">
                          <div className="row g-3">
                              <div className="col-md-6">
                                  <label htmlFor="logCode" className="form-label">Log Code</label>
                                  <input type="text" className="form-control form-control-sm" id="logCode" name="logCode" required/>
                              </div>
                              <div className="col-md-6">
                                  <label htmlFor="logDate" className="form-label">Log Date</label>
                                  <input type="date" className="form-control form-control-sm" id="logDate" name="logDate" required/>
                              </div>
                          </div>
                          <div className="row g-3 mt-3">
                              <div className="col-md-12">
                                  <label htmlFor="logDetails" className="form-label">Log Details</label>
                                  <textarea className="form-control form-control-sm" id="logDetails" name="logDetails" rows={3} required></textarea>
                              </div>
                          </div>
                          <div className="row g-3 mt-3">
                              <div className="col-md-4">
                                  <label htmlFor="logStaffId" className="form-label">Staff ID</label>
                                  <select id="logStaffId" className="form-select form-select-sm" required>

                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="logeFieldCode" className="form-label">Field Code</label>
                                  <select id="logeFieldCode" className="form-select form-select-sm" required>

                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="logeCropCode" className="form-label">Crop Code</label>
                                  <select id="logeCropCode" className="form-select form-select-sm" required>

                                  </select>
                              </div>
                          </div>

                          {/*<!-- Image Upload Fields -->*/}
                          <div className="image-upload-container mt-4 d-flex justify-content-center gap-3">
                              <div className="form-group text-center">
                                  <label htmlFor="observedImage" className="form-label d-block">Observed Image</label>
                                  <div className="image-upload-wrapper">
                                      <img id="previewImage01" className="image-preview previewImage"
                                           src="https://via.placeholder.com/200x200?text=Click+to+upload+Image+1" alt="Image 1 Preview"/>
                                          <input type="file" className="form-control d-none imagesOfInput" id="observedImage" name="observedImage" accept="image/*"
                                                 required/>
                                  </div>
                              </div>
                          </div>

                          {/*<!-- Action Buttons -->*/}
                          <div className="d-flex justify-content-end mt-4 gap-2">
                              <button id="btnSaveLogService" type="button" className="btn btn-primary btn-sm">Submit</button>
                              <button id="btnUpdateLogService" type="button" className="btn btn-secondary btn-sm">Update</button>
                          </div>
                      </form>

                      {/*<!-- Table to Display Log Details -->*/}
                      <div className="table-container mt-5">
                          <table className="table table-striped">
                              <thead>
                              <tr>
                                  <th>Log Code</th>
                                  <th>Date</th>
                                  <th>Field Code</th>
                                  <th>Crop Code</th>
                                  <th>Staff ID</th>
                                  <th>Action</th>
                              </tr>
                              </thead>
                              <tbody id="logTableBody">
                              {/*<!-- Log data rows will be inserted here -->*/}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>

          </div>
      </>
  )
}

export default MonitoringLog