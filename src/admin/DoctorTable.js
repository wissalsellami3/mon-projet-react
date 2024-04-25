import React from "react";

const DoctorTable = () => {
  const doctorsData = [
    { id: 1, name: "Dr. Jean Dupont", specialty: "Cardiologue" },
    { id: 2, name: "Dr. Marie Martin", specialty: "Dermatologue" },
  ];

  const handleConsult = (doctorId) => {};

  const handleValidate = (doctorId) => {};

  return (
    <div>
      <h2>Liste des Médecins</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Spécialité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctorsData.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>
                <button onClick={() => handleConsult(doctor.id)}>
                  Consulter
                </button>
                <button onClick={() => handleValidate(doctor.id)}>
                  Valider
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;
