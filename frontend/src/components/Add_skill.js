import React, { useEffect,useState } from "react";
import axios from "axios";

function Add_skill({onClose }) {

  const Reload = () => {
    window.location.reload();
  };
  const [formData, setFormData] = useState({
    
    Training_name: "",
    Training_state: "",
    Emp_id: "",
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/Add_skill", formData)
      .then((res) => {
        console.log(res);
        alert(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          console.log(err.response.data);
        } else {
          console.log("Error creating user");
        }
      });
  };

  return (
    <div className="form-modal">
      <div className="form-modal-content">
        <h2>Add User</h2>
        <form onSubmit={handleFormSubmit} className="add-user-form">
        
          <label>Training_name:</label>
          <input type="text" name="Training_name" value={formData.Training_name} onChange={handleInputChange} />

          <label>Training_state:</label>
          <input type="text" name="Training_state" value={formData.Training_state} onChange={handleInputChange} />

          <label>Emp_id:</label>
          <input type="text" name="Emp_id" value={formData.Emp_id} onChange={handleInputChange} />


          <button type="submit" onClick={Reload}>
            Done
          </button>
          
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add_skill;
