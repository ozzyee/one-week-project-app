import { useEffect, useState, forwardRef } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useAuthContent } from "../../auth/auth.context";

const Alert = forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({}) {
   const { hasError, setHasErr, errorMsg } = useAuthContent();
   const [open, setOpen] = useState(false);
   const [state, setState] = useState({
      vertical: "top",
      horizontal: "right",
   });
   const { vertical, horizontal } = state;

   useEffect(() => {
      setOpen(hasError);
   }, [hasError]);

   const handleClose = (event, reason) => {
      setOpen(false);
      setHasErr(false);
   };

   return (
      <>
         <Snackbar
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal}
         >
            <Alert
               onClose={handleClose}
               severity="error"
               sx={{ width: "100%" }}
            >
               {errorMsg}
            </Alert>
         </Snackbar>
      </>
   );
}
