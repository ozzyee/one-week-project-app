import React from "react";
import "../../Style/notification.css";

function Notification({ todos }) {
  return <div className="notification">{todos}</div>;
}

export default Notification;
