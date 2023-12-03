import React, { useState } from "react";
import Card from "./Card";
import "./CardList.css";
import employee from "./emp-data.json";

function CardList() {
  let [page_no, setPageNumber] = useState(0);
  let per_page = 3;
  let start_index = page_no * per_page;
  let end_index = start_index + per_page;
  let [employees, setEmployees] = useState(employee.slice(start_index, end_index));

  let pre_page = () => {
    if (page_no > 0) {
      setPageNumber((prevPage) => prevPage - 1);
      start_index = (page_no - 1) * per_page;
      end_index = start_index + per_page;
      setEmployees(employee.slice(start_index, end_index));
    }
  };

  let next_page = () => {
    if (page_no < Math.floor(employee.length / per_page)-1) {
      setPageNumber((prevPage) => prevPage + 1);
      start_index = (page_no + 1) * per_page;
      end_index = start_index + per_page;
      setEmployees(employee.slice(start_index, end_index));
    }
  };

  return (
    <>
      <div className="card-list">
        <div className="parent">
          {employees.map((employee) => {
            return <Card {...employee} key={employee.id} />;
          })}
        </div>
      </div>

      <div className="nav">
        <button onClick={pre_page} disabled={page_no === 0 || page_no < 0}>
          Pre
        </button>
        <button onClick={next_page}>Next</button>
      </div>
    </>
  );
}

export default CardList;
