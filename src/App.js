import { useState } from "react";
import "./App.css";
import CardList from "./CardList";
import SearchEmployee from "./SearchEmployee";
import employee from "./emp-data.json";

function App() {
  let [employees, setEmployees] = useState(employee);

  const filterEmployees = (emp_name) => {
    setEmployees(
      employee.filter((emp) => {
        setEmployees(employee.filter(emp =>{
          
        }))
        emp.name.includes(emp_name);
      })
    );
  };
  return (
    <div className="App">
      <SearchEmployee onSearch={filterEmployees} />
      <CardList employees={[...employees]} />
    </div>
  );
}

export default App;
