import React from "react";
import Card from "./Card";
import "./CardList.css";
import employees from "./emp-data.json";

function CardList() {
  return (
    <div className="parent">
      {/* <Card {...employee[0]} /> */}

      {/* <Card employee_data={employee[0]} />
      <Card employee_data={employee[1]} />
      <Card employee_data={employee[2]} />
      <Card employee_data={employee[3]} /> */}

      {employees.map((employee) => {
        return <Card {...employee} />;
      })}
    </div>
  );
}

export default CardList;

