import React, { useState } from "react";
import axios from "axios";

function Add_team_leader({onClose }) {
  const [formData, setFormData] = useState({
    
    ID: "",
    type: "",
    Team_leader_id	: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/Add_Team_Leader", formData)
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
        
          <label>ID:</label>
          <input type="text" name="ID" value={formData.ID} onChange={handleInputChange} />

          <label>Type:</label>
          <input type="text" name="Type" value={formData.email} onChange={handleInputChange} />

          <label>Team_leader_id:</label>
          <input type="text" name="Team_leader_id" value={formData.password} onChange={handleInputChange} />

          

          <button type="submit" >
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

export default Add_team_leader;
