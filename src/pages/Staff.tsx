import React from 'react'

const Staff = () => {
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

              {/*<!-- Staff Content -->*/}
              <div id="staffPage">
                  <div className="container containerPage">
                      <h2>Staff Management</h2>

                      {/*<!-- Search Staff -->*/}
                      <div className="search-container">
                          <input type="text" id="searchStaff" className="search-bar" placeholder="Search Staff..."/>
                      </div>

                      <form id="StaffForm">
                          <div className="row g-3">
                              <div className="col-md-4">
                                  <label htmlFor="staffId" className="form-label">Staff ID</label>
                                  <input type="text" className="form-control form-control-sm" id="staffId" name="staffId" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="firstName" className="form-label">First Name</label>
                                  <input type="text" className="form-control form-control-sm" id="firstName" name="firstName" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="lastName" className="form-label">Last Name</label>
                                  <input type="text" className="form-control form-control-sm" id="lastName" name="lastName" required/>
                              </div>
                          </div>

                          <div className="row g-3 mt-3">
                              <div className="col-md-4">
                                  <label htmlFor="designation" className="form-label">Designation</label>
                                  <input type="text" className="form-control form-control-sm" id="designation" name="designation" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="gender" className="form-label">Gender</label>
                                  <select id="gender" className="form-select form-select-sm" required>
                                      <option value="MALE">MALE</option>
                                      <option value="FEMALE">FEMALE</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="StaffRole" className="form-label">Role</label>
                                  <select id="StaffRole" className="form-select form-select-sm" name="role" required>
                                      <option value="MANAGER">MANAGER</option>
                                      <option value="EMPLOYEE">EMPLOYEE</option>
                                      <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                                      <option value="SCIENTIST">SCIENTIST</option>
                                  </select>
                              </div>
                          </div>

                          <div className="row g-3 mt-3">
                              <div className="col-md-6">
                                  <label htmlFor="joinDate" className="form-label">Join Date</label>
                                  <input type="date" className="form-control form-control-sm" id="joinDate" name="joinDate" required/>
                              </div>
                              <div className="col-md-6">
                                  <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                                  <input type="date" className="form-control form-control-sm" id="dateOfBirth" name="dateOfBirth" required/>
                              </div>
                          </div>

                          <div className="row g-3 mt-3">
                              <div className="col-md-4">
                                  <label htmlFor="contactNo" className="form-label">Contact Number</label>
                                  <input type="text" className="form-control form-control-sm" id="contactNo" name="contactNo" required/>
                              </div>
                              <div className="col-md-8">
                                  <label htmlFor="email" className="form-label">Email</label>
                                  <input type="email" className="form-control form-control-sm" id="email" name="email" required/>
                              </div>
                          </div>

                          <div className="row g-3 mt-3">
                              <div className="col-md-12">
                                  <label htmlFor="address01" className="form-label">Address</label>
                                  <input type="text" className="form-control form-control-sm mb-2" id="address01" name="address01" placeholder="Address Line 1" required/>
                                      <input type="text" className="form-control form-control-sm mb-2" id="address02" name="address02" placeholder="Address Line 2"/>
                                          <input type="text" className="form-control form-control-sm mb-2" id="address03" name="address03" placeholder="Address Line 3"/>
                                              <input type="text" className="form-control form-control-sm mb-2" id="address04" name="address04" placeholder="Address Line 4"/>
                                                  <input type="text" className="form-control form-control-sm mb-2" id="address05" name="address05" placeholder="Address Line 5"/>
                              </div>
                          </div>

                          <div className="row g-3 mt-3">
                              <div className="col-md-4">
                                  <label htmlFor="staffSort" className="form-label">Role</label>
                                  <select id="staffSort" className="form-select form-select-sm" required>
                                      <option>Normal</option>
                                      <option>Name</option>
                                      <option>Designation</option>
                                      <option>Gender </option>
                                  </select>
                              </div>
                          </div>

                          <div className="mt-4 d-flex justify-content-end gap-2">
                              <button id="btnStaffSave" type="button" className="btn btn-primary btn-sm">Submit</button>
                              <button id="btnStaffUpdate" type="button" className="btn btn-secondary btn-sm">Update</button>
                              <button id="btnStaffSort" type="button" className="btn btn-info btn-sm">Sort</button>
                          </div>
                      </form>

                      {/*<!-- Table to display Staff details -->*/}
                      <div className="table-container">
                          <table id="StaffTable" className="table table-striped">
                              <thead>
                              <tr>
                                  <th>Staff Id</th>
                                  <th>First Name</th>
                                  <th>Designation</th>
                                  <th>Contact</th>
                                  <th>Action</th>
                              </tr>
                              </thead>
                              <tbody id="StaffTableBody">
                              {/*<!-- Staff data rows will be inserted here -->*/}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Staff


