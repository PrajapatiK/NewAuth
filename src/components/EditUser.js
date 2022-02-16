import React from 'react'

const EditUser = (props) => {
  const { handleSubmit, formValues, handleChange, formErrors } = props
  return (
    <div className="container">
      <br />
      <br />
      <h3>Edit the User details</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label" required>
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>
          {formErrors.username}
        </p>
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label" required>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>{formErrors.email}</p>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" required>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>
          {formErrors.password}
        </p>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label" required>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={formValues.cpassword}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>
          {formErrors.password}
        </p>
        <div className="mb-3">
          <label htmlFor="role" className="form-label" required>
            Role
            <select name="role" value={formValues.role} onChange={handleChange}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </label>
        </div>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile" />
          <label className="custom-file-label">{/* Choose file */}</label>
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Update
        </button>
      </form>
    </div>
  )
}

export default EditUser