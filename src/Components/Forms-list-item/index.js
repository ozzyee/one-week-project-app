import React from "react";

function FormListItem({ item }) {
  return (
    <div>
      <li className="form-list-item">
        <p>{item.formtitle}</p>
        <p>{item.date}</p>
      </li>
    </div>
  );
}

export default FormListItem;
