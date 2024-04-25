import React, { useState } from "react";
import DoctorTable from "./DoctorTable";
import PatientTable from "./PatientTable";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleTabChange("doctors")}>Médecins</li>
          <li onClick={() => handleTabChange("patients")}>Patients</li>
        </ul>
      </nav>
      {activeTab === "doctors" && <DoctorTable />}
      {activeTab === "patients" && <PatientTable />}
    </div>
  );
};

export default AdminDashboard;
