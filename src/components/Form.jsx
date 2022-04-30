import React from "react";
import {useEffect, useState } from "react";
import styles from "./Form.module.css";


const Form = () => {
  const [formData, setFormData] = useState({});

  //onChange
  const handleChange = (e) => {
    console.log(e.target.value, e.target.checked);

    const InputName = e.target.name;

    if (InputName === "checkbox") {
      setFormData({
        ...formData,
        [InputName]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [InputName]: e.target.value,
      });
    }
  };



  // onSubmit
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  
  // getData();
    alert("New Employee added");
  };




  const getData = async ()=> {
    try {
          let response = await fetch(`http://localhost:3000/employees`);
          let data= response.json();
     
    } catch (e) {
      console.log(e)
    }
  }


useEffect(()=> {
  getData();
},[]);







  return (
    <div className={styles.form}>
      <h1>Employee Details</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className={styles.grid}>
          <label htmlFor="age">Age</label>
          <input
            className="form-control"
            type="number"
            name="age"
            onChange={handleChange}
          />
        </div>
        <div className={styles.grid}>
          <label htmlFor="address">Address</label>
          <input
            className="form-control"
            type="address"
            name="address"
            onChange={handleChange}
          />
        </div>
        <div className={styles.grid}>
          <label htmlFor="department">Department</label>
          <select
            className="form-control"
            type="select"
            name="department"
            onChange={handleChange}
          >
            <option value="">Departments</option>
            <option value="finance">Finance</option>
            <option value="service">Service</option>
            <option value="reservation">reservation</option>
            <option value="hr">Engineering</option>
          </select>
        </div>
        <div className="form-check d-flex mx-5 gap-5">
          <label className="form-check-label" htmlFor="checkbox">
            Marital Status : -
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox"
            onChange={handleChange}
          />
        </div>

        <div className={styles.grid}>
          <label htmlFor="salary">Salary</label>
          <input
            className="form-control"
            type="number"
            name="number"
            onChange={handleChange}
          />
        </div>

        <input
          className="btn bg-warning"
          type="submit"
          placeholder="Submit"
          value="Add Employee"
        />
        {/* <button onClick={}></button> */}
      </form>
    </div>
  );
};

export default Form;
