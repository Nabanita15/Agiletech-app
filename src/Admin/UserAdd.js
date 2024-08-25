import React from "react";

function UserAdd() {
  return (
    <>
      <div
        className="modal fade mx-auto p-2"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add User
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="User ID *"
                  />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      id="inputtext"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="inputtext1"
                      className="form-control"
                      placeholder="last name"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="email"
                      id="inputtext"
                      className="form-control"
                      placeholder="Email ID *"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      id="inputtext1"
                      className="form-control"
                      placeholder="Mobile No"
                    />
                  </div>
                  <div className="col">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="">Select Role Type</option>
                      <option value={1}>Super Admin</option>
                      <option value={2}>Admin</option>
                      <option value={3}>Employee</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      id="inputtext"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="password"
                      id="inputtext1"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="password"
                      id="inputtext1"
                      className="form-control"
                      placeholder="confirm password"
                    />
                  </div>
                </div>
              </form>
            </div>
            <table>
              <thead>
                <div className="useraddtable bg-info-subtle">
                  <th>Module Permission</th>
                  <th>Read</th>
                  <th>Write</th>
                  <th>delete</th>
                </div>
              </thead>
              <tbody>
                <div className="useraddtable border-bottom ">
                  <td>Super Admin</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </div>
                <div className="useraddtable border-bottom">
                  <td> Admin</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </div>
                <div className="useraddtable ">
                  <td>Employee</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </div>
              </tbody>
            </table>
            <div className="modal-footer pt-4">
              <button type="button" className="btn btn-primary">
                Add User
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAdd;
