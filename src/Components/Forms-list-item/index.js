import React from "react";

function FormListItem({ item }) {
  if (item.iscompleted) {
    return (
      <div>
        <li className="form-list-item form-complete">
          <p>{item.formtitle}</p>
          <p className="form-item-date">{item.date}</p>
        </li>
      </div>
    );
  } else {
    return (
      <div>
        <li className="form-list-item form-not-complete">
          <p>{item.formtitle}</p>
          <p className="form-item-date">{item.date}</p>
        </li>
      </div>
    );
  }
}

export default FormListItem;
