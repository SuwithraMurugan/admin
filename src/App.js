import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import AllStudent from "./components/AllStudent";
import EditStudent from "./components/EditStudent";
import Hooks from "./components/Hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export const StudentContext = React.createContext();
function App() {
  let data = {
    earning: "20,000",
    annual: "2,40,000",
    task: 20,
    pending: 26,
  };
  let [Students, setStudents] = useState([
    { name: "suwithra", email: "suwi@gmail.com", mobile: "7550208586" },
    {
      name: "gayathri",
      email: "gayu@gmail.com",
      mobile: "21264785745",
    },
    {
      name: "sandhya",
      email: "sandy@gmail.com",
      mobile: "56273737945",
    },
  ]);
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex", flextemplatecolumns: "20% 80%" }}>
          <div>
            <Sidebar />
          </div>
          <div>
            <StudentContext.Provider value={{ Students, setStudents }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard value={data} />} />
                <Route path="/all-student" element={<AllStudent  />} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/" element={<Dashboard value={data} />} />
              </Routes>
            </StudentContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
