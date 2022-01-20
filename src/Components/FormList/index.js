import React from "react";
import FormListItem from "../Forms-list-item/index.js";

function FormList({ forms, onClick }) {
   return (
      <ul className="form-list">
         {" "}
         {forms.map(function (item) {
            return (
               <FormListItem
                  item={item}
                  key={item.key}
                  onClick={onClick}
                  id={item.formid}
               />
            );
         })}{" "}
      </ul>
   );
}

export default FormList;
