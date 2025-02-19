import React from 'react'

const Crop = () => {
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

              {/*<!-- Crop Content -->*/}
              <div id="cropPage">
                  <div className="container containerPage">
                      <h2>Crop Management</h2>

                      {/*<!-- Search Crop -->*/}
                      <div className="search-container">
                          <input type="text" id="searchCrop" className="search-bar" placeholder="Search Crops..."/>
                      </div>

                      <form id="cropForm" className="mt-4" encType="multipart/form-data">
                          <div className="row g-3">
                              <div className="col-md-4">
                                  <label htmlFor="cropCode" className="form-label">Crop Code</label>
                                  <input type="text" className="form-control form-control-sm" id="cropCode" name="cropCode" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="cropCommonName" className="form-label">Common Name</label>
                                  <input type="text" className="form-control form-control-sm" id="cropCommonName" name="cropCommonName" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="cropScientificName" className="form-label">Scientific Name</label>
                                  <input type="text" className="form-control form-control-sm" id="cropScientificName" name="cropScientificName" required/>
                              </div>
                          </div>
                          <div className="row g-3">
                              <div className="col-md-4">
                                  <label htmlFor="cropCategory" className="form-label">Category</label>
                                  <input type="text" className="form-control form-control-sm" id="cropCategory" name="cropCategory" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="cropSeason" className="form-label">Season</label>
                                  <input type="text" className="form-control form-control-sm" id="cropSeason" name="cropSeason" required/>
                              </div>
                              <div className="col-md-4">
                                  <label htmlFor="cropFieldCode" className="form-label">Field Code</label>
                                  <select id="cropFieldCode" className="form-select form-select-sm" required>
                                  </select>
                              </div>
                          </div>

                          {/*// <!-- Image Upload Field -->*/}
                          <div className="image-upload-container mt-4 d-flex justify-content-center gap-3">
                              <div className="form-group text-center">
                                  <label htmlFor="cropImage01" className="form-label d-block">Crop Image</label>
                                  <div className="image-upload-wrapper">
                                      <img id="previewCropImage01" className="image-preview previewImage"
                                           src="https://via.placeholder.com/200x200?text=Click+to+upload+Image+1" alt="Image 1 Preview"/>
                                          <input type="file" className="form-control d-none imagesOfInput" id="cropImage01" name="cropImage01" accept="image/*"
                                                 required/>
                                  </div>
                              </div>
                          </div>

                          {/*<!-- Action Buttons -->*/}
                          <div className="d-flex justify-content-end mt-4 gap-2">
                              <button id="btnSaveCrop" type="button" className="btn btn-primary btn-sm">Submit</button>
                              <button id="btnUpdateCrop" type="button" className="btn btn-secondary btn-sm">Update</button>
                          </div>
                      </form>

                      {/*<!-- Table to Display Crop Details -->*/}
                      <div className="table-container">
                          <table id="cropTable" className="table table-striped">
                              <thead>
                              <tr>
                                  <th>Crop Code</th>
                                  <th>Common Name</th>
                                  <th>Scientific Name</th>
                                  <th>Category</th>
                                  <th>Action</th>
                              </tr>
                              </thead>
                              <tbody id="CropTableBody">
                              {/*<!-- Crop data rows will be inserted here -->*/}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Crop