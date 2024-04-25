import React from "react";

const PatientTable = () => {
  const patientsData = [
    { id: 1, name: "Alice", age: 35 },
    { id: 2, name: "Bob", age: 45 },
  ];

  const handleDelete = (patientId) => {};

  return (
    <div>
      <h2>Liste des Patients</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Âge</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patientsData.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>
                <button onClick={() => handleDelete(patient.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
