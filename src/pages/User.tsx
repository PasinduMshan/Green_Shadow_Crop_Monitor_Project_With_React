import React from 'react'

const User = () => {
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

              {/*// <!-- User Content -->*/}
              <div id="userPage">
                  <div className="container containerPage">
                      <h2>User Management</h2>

                      {/*<!-- Search User -->*/}
                      <div className="search-container">
                          <input type="text" id="searchUser" className="search-bar" placeholder="Search User..."/>
                      </div>

                      {/*<!-- User Form -->*/}
                      <form id="UserForm">
                          <div className="row g-3">
                              <div className="col-md-4">
                                  <label htmlFor="userEmail" className="form-label">Email</label>
                                  <input type="email" className="form-control form-control-sm" id="userEmail" name="email" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="userPassword" className="form-label">Password</label>
                                  <input type="password" className="form-control form-control-sm" id="userPassword" name="password" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="userRole" className="form-label">Role</label>
                                  <select id="userRole" className="form-select form-select-sm" required>
                                      <option value="MANAGER">Manager</option>
                                      <option value="EMPLOYEE">Employee</option>
                                      <option value="ADMINISTRATIVE">Administrative</option>
                                      <option value="SCIENTIST">Scientist</option>
                                  </select>
                              </div>
                          </div>

                          <div className="mt-4 d-flex justify-content-end gap-2">
                              <button id="btnSaveUser" type="button" className="btn btn-primary btn-sm">Submit</button>
                              <button id="btnUpdateUser" type="button" className="btn btn-secondary btn-sm">Update</button>
                          </div>
                      </form>

                      {/*<!-- Table to display User details -->*/}
                      <div className="table-container mt-4">
                          <table className="table table-striped">
                              <thead>
                              <tr>
                                  <th>Email</th>
                                  <th>Role</th>
                                  <th>Action</th>
                              </tr>
                              </thead>
                              <tbody id="UserTableBody">
                              {/*<!-- User data rows will be inserted here -->*/}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default User