// ChildHealthRecordForm.js
import React, { useState } from 'react';
import './dashform.css'; // Import the CSS file for styling

const ChildHealthRecordForm = ({ onSubmit, selectedRecord, onEdit }) => {
  const [childName, setChildName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [vaccine, setVaccine] = useState('');
  const [immunization, setImmunization] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const healthRecord = {
      childName,
      age,
      address,
      vaccine,
      immunization,
    };

    if (selectedRecord) {
      onEdit(selectedRecord.id, healthRecord);
    } else {
      onSubmit(healthRecord);
    }

    // Clear the form fields after submission
    setChildName('');
    setAge('');
    setAddress('');
    setVaccine('');
    setImmunization('');
  };

  return (
    <div className="child-health-record-form">
      <h2> Add Health Record </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Child's Name:</label>
          <input type="text" value={childName} onChange={(e) => setChildName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Birthday:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Vaccine:</label>
          <input type="text" value={vaccine} onChange={(e) => setVaccine(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="text"
            value={immunization}
            onChange={(e) => setImmunization(e.target.value)}
          />
        </div>
        <button type="submit">{selectedRecord ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default ChildHealthRecordForm;
