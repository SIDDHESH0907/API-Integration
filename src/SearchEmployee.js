import React, { useRef, useState } from "react";

function SearchEmployee() {
  // let employee_name = useRef()

  let [employee_name, setEmployeesName] = useState("");

  const changeEmpName = (event) => {
    setEmployeesName(event.target.value);
  };

  const employee_search = (event) => {
    console.log(employee_name);
    // console.log(employee_name.current.value);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={employee_search}>
        {/* <input type="text" ref={employee_name} /> */}
        <input type="text" value={employee_name} onChange={changeEmpName} />
        <button>Search</button>
      </form>
    </>
  );
}

export default SearchEmployee;
