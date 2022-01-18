import "./style.css";

function Text({ type, children }) {
   if (type === "title") {
      return <h1 className="title">{children}</h1>;
   }

   if (type === "sub-title") {
      return <h2 className="sub-title">{children}</h2>;
   }

   return null;
}

export default Text;
