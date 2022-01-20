import React from "react";

function FormListItem({ item, onClick, id }) {
   if (item.iscompleted) {
      return (
         <div id={id}>
            <li id={id} className="form-list-item form-complete">
               <p id={id} className="list-text">
                  {item.formtitle}
               </p>
               <p id={id} className="form-item-date date_new">
                  {item.date}
               </p>
            </li>
         </div>
      );
   } else {
      return (
         <div onClick={onClick} id={id}>
            <li className="form-list-item form-not-complete" id="list-item">
               <p className="list-text">{item.formtitle}</p>
               <p className="form-item-date">{item.date}</p>
            </li>
         </div>
      );
   }
}

export default FormListItem;
