import React from 'react'

const Field = () => {
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

          {/*<!-- Field Content -->*/}
          <div id="fieldPage">
            <div className="container containerPage">
              <h2>Field Management</h2>

              {/*<!-- Search Field -->*/}
              <div className="search-container">
                <input type="text" id="searchField" className="search-bar" placeholder="Search Fields..."/>
              </div>

              <form id="fieldForm" className="mt-4" encType="multipart/form-data">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="fieldCode" className="form-label">Field Code</label>
                    <input type="text" className="form-control form-control-sm" id="fieldCode" name="fieldCode" required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="fieldName" className="form-label">Field Name</label>
                    <input type="text" className="form-control form-control-sm" id="fieldName" name="fieldName" required/>
                  </div>
                </div>
                <div className="row g-3 mt-3">
                  <div className="col-md-6">
                    <label htmlFor="fieldLocation" className="form-label">Field Location</label>
                    <input type="text" className="form-control form-control-sm" id="fieldLocation" name="fieldLocation" required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="fieldSize" className="form-label">Field Size (in acres)</label>
                    <input type="number" step="0.01" className="form-control form-control-sm" id="fieldSize" name="fieldSize" required/>
                  </div>
                </div>

                {/*<!-- Image Upload Fields -->*/}
                <div className="image-upload-container mt-4 d-flex justify-content-center gap-3">
                  <div className="form-group text-center">
                    <label htmlFor="fieldImage01" className="form-label d-block">Field Image 1</label>
                    <div className="image-upload-wrapper">
                      <img id="previewFieldImage01" className="image-preview previewImage"
                           src="https://via.placeholder.com/200x200?text=Click+to+upload+Image+1" alt="Image 1 Preview"/>
                        <input type="file" className="form-control d-none imagesOfInput" id="fieldImage01" name="fieldImage01" accept="image/*"/>
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <label htmlFor="fieldImage02" className="form-label d-block">Field Image 2</label>
                    <div className="image-upload-wrapper">
                      <img id="previewFieldImage02" className="image-preview previewImage"
                           src="https://via.placeholder.com/200x200?text=Click+to+upload+Image+2" alt="Image 2 Preview"/>
                        <input type="file" className="form-control d-none imagesOfInput" id="fieldImage02" name="fieldImage02" accept="image/*"/>
                    </div>
                  </div>
                </div>


                {/*<!-- Action Buttons -->*/}
                <div className="d-flex justify-content-end mt-4 gap-2">
                  <button id="btnFieldSave" type="button" className="btn btn-primary btn-sm">Submit</button>
                  <button id="btnFieldUpdate" type="button" className="btn btn-secondary btn-sm">Update</button>
                </div>
              </form>

              {/*<!-- Table to Display Field Details -->*/}
              <div className="table-container mt-5">
                <table className="table table-striped" id="fieldTable">
                  <thead>
                  <tr>
                    <th>Field Code</th>
                    <th>Field Name</th>
                    <th>Location</th>
                    <th>Size (Acres)</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody id="fieldTableBody">
                  {/*<!-- Field data rows will be inserted here -->*/}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
export default Field