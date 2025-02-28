import React, {useEffect, useState} from 'react'
import FieldModel from "../model/FieldModel.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState, AppDispatch} from "../store/store.tsx";
import {deleteFieldFromBackend, getAllFields, saveField, updateField} from "../reducers/FieldSlice.ts";

const Field = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [fieldCode, setFieldCode] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [fieldLocation, setFieldLocation] = useState("");
  const [fieldSize, setFieldSize] = useState("");
  const [fieldImage01, setFieldImage01] = useState<File | null>(null);
  const [fieldImage02, setFieldImage02] = useState<File | null>(null);
  const [previewImage01, setPreviewImage01] = useState<string | null>(null);
  const [previewImage02, setPreviewImage02] = useState<string | null>(null);

  const fields = useSelector((state: RootState)=> state.field);
  useEffect(() => {
    console.log("Fetching fields...");
    dispatch(getAllFields())
  }, [dispatch]);

  const handleRowClick = (fieldCode: string) => {
    const selectedField = fields.find(field => field.fieldCode === fieldCode);
    if (selectedField) {
      setFieldCode(selectedField.fieldCode);
      setFieldName(selectedField.fieldName);
      setFieldLocation(selectedField.fieldLocation);
      setFieldSize(selectedField.fieldSize);
      setPreviewImage01(selectedField.fieldImage01);
      setPreviewImage02(selectedField.fieldImage02);
    }
    console.log("Selected field:", selectedField);
  };



  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, fieldKey: "fieldImage01" | "fieldImage02") => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (fieldKey === "fieldImage01") {
          setFieldImage01(file);
          setPreviewImage01(reader.result as string);
        } else if (fieldKey === "fieldImage02") {
          setFieldImage02(file);
          setPreviewImage02(reader.result as string);
        }
      };
    }
  };

  const saveFieldData = (e: React.FormEvent) => {
    if (!fieldCode || !fieldName || !fieldLocation || !fieldSize || !previewImage01 || !previewImage02) {
      alert("Please fill all fields.");
      return;
    }
    e.preventDefault();  // Prevent the form from submitting
    const newField = new FieldModel(
        fieldCode,
        fieldName,
        fieldLocation,
        fieldSize,
        previewImage01 || "",  // Ensure it has a fallback value
        previewImage02 || ""   // Ensure it has a fallback value
    );
    dispatch(saveField(newField));

    setFieldCode("");
    setFieldName("");
    setFieldLocation("");
    setFieldSize("");
    setFieldImage01(null);
    setFieldImage02(null);
    setPreviewImage01(null);
    setPreviewImage02(null);

    alert("Save fields successfully!!.");
  };

  const updateFieldData = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting

    if (!fieldCode || !fieldName || !fieldLocation || !fieldSize || !previewImage01 || !previewImage02) {
      alert("Please fill all fields.");
      return;
    }

    const updatedField = new FieldModel(
        fieldCode,
        fieldName,
        fieldLocation,
        fieldSize,
        previewImage01 || "",
        previewImage02 || ""
    );

    dispatch(updateField(updatedField));

    alert("Field updated successfully!");

    setFieldCode("");
    setFieldName("");
    setFieldLocation("");
    setFieldSize("");
    setFieldImage01(null);
    setFieldImage02(null);
    setPreviewImage01(null);
    setPreviewImage02(null);
  };



  const handleDeleteField = (fieldCode: string) => {
    if (window.confirm(`Are you sure you want to delete field with code: ${fieldCode}?`)) {
      dispatch(deleteFieldFromBackend(fieldCode));
      alert("Field deleted successfully.");
    }
  };

  return (
      <>
        <div id="mainContentOfPages" className="dashboard-container">
          {/*<!-- Navbar -->*/}
          <div id="Navbar">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a id="pageTitle" className="navbar-brand" href="#">Fields</a>
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

              <form action={''} id="fieldForm" className="mt-4" encType="multipart/form-data">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="fieldCode" className="form-label">Field Code</label>
                    <input type="text" className="form-control form-control-sm" id="fieldCode" name="fieldCode" value={fieldCode}
                           onChange={(e) => setFieldCode(e.target.value)} required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="fieldName" className="form-label">Field Name</label>
                    <input type="text" className="form-control form-control-sm" id="fieldName" name="fieldName" value={fieldName}
                           onChange={(e) => setFieldName(e.target.value)} required/>
                  </div>
                </div>
                <div className="row g-3 mt-3">
                  <div className="col-md-6">
                    <label htmlFor="fieldLocation" className="form-label">Field Location</label>
                    <input type="text" className="form-control form-control-sm" id="fieldLocation" name="fieldLocation" value={fieldLocation}
                           onChange={(e) => setFieldLocation(e.target.value)} required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="fieldSize" className="form-label">Field Size (in acres)</label>
                    <input type="number" step="0.01" className="form-control form-control-sm" id="fieldSize" value={fieldSize}
                           name="fieldSize" onChange={(e) => setFieldSize(e.target.value)} required/>
                  </div>
                </div>

                {/*<!-- Image Upload Fields -->*/}
                <div className="image-upload-container mt-4 d-flex justify-content-center gap-3">
                  {/* Field Image 1 */}
                  <div className="form-group text-center">
                    <label htmlFor="fieldImage01" className="form-label d-block">Field Image 1</label>
                    <div className="image-upload-wrapper">
                      <img
                          id="previewFieldImage01"
                          className="image-preview previewImage"
                          src={previewImage01 || "https://via.placeholder.com/200x200?text=Click+to+upload+Image+1"}
                          alt="Image 1 Preview"
                      />
                      <input
                          type="file"
                          className="form-control d-none imagesOfInput"
                          id="fieldImage01"
                          name="fieldImage01"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, "fieldImage01")}
                      />
                    </div>
                  </div>

                  {/* Field Image 2 */}
                  <div className="form-group text-center">
                    <label htmlFor="fieldImage02" className="form-label d-block">Field Image 2</label>
                    <div className="image-upload-wrapper">
                      <img
                          id="previewFieldImage02"
                          className="image-preview previewImage"
                          src={previewImage02 || "https://via.placeholder.com/200x200?text=Click+to+upload+Image+2"}
                          alt="Image 2 Preview"
                      />
                      <input
                          type="file"
                          className="form-control d-none imagesOfInput"
                          id="fieldImage02"
                          name="fieldImage02"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, "fieldImage02")}
                      />
                    </div>
                  </div>
                </div>


                {/*<!-- Action Buttons -->*/}
                <div className="d-flex justify-content-end mt-4 gap-2">
                  <button id="btnFieldSave" type="submit" className="btn btn-primary btn-sm" onClick={saveFieldData}>Submit</button>
                  <button id="btnFieldUpdate" type="submit" className="btn btn-secondary btn-sm" onClick={updateFieldData}>Update</button>
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
                  {fields.map((field) => (
                      <tr  key={field.fieldCode} onClick={() => handleRowClick(field.fieldCode)} style={{ cursor: "pointer" }} >
                        <td>{field.fieldCode}</td>
                        <td>{field.fieldName}</td>
                        <td>{field.fieldLocation}</td>
                        <td>{field.fieldSize}</td>
                        <td>
                          <button className="btn btn-danger btn-sm crop-delete-btn" title="Delete" onClick={() => handleDeleteField(field.fieldCode)}>
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                  ))}
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