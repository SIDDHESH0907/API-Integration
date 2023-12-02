import React from "react";
import Card from "./Card";
import "./CardList.css";
import employee from "./emp-data.json";

function CardList() {
  let page_no = 0;
  let per_page = 3;
  let start_index = 0;
  let end_index = 3;
  let employees = employee.slice(start_index, end_index);

  let pre_page = () => {
    page_no -= 1;
    if (page_no >= 0) {
      start_index = page_no * per_page;
      end_index = start_index + per_page;
      console.log(start_index, end_index);
      employee = employee.slice(start_index, end_index);
    }
  };

  let next_page = () => {
    page_no += 1;
    if (page_no >= 0) {
      start_index = page_no * per_page;
      end_index = start_index + per_page;
      console.log(start_index, end_index);
      employee = employee.slice(start_index, end_index);
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
        <button className="button" onClick={pre_page}>Pre</button>
        <button className="button" onClick={next_page}>Next</button>
      </div>
    </>
  );
}

export default CardList;
