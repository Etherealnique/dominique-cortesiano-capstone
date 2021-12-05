// import React from "react";
// import "./CoinModal.scss";

// function CoinModal(props) {
//   return props.trigger ? (
//     <div className="modal">
//       <div className="modal__inner">
//         <button
//           className="modal__close-btn"
//           onClick={() => props.setTrigger(false)}
//         >
//           close
//         </button>
//         {props.children}
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// }

// export default CoinModal;

import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./CoinModal.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AuthModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="authmodal__btn-login" onClick={handleOpen}>
        How Blockchain Works
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              <h1>I am the Coin Modal</h1>
              <ReactPlayer url="https://www.youtube.com/watch?v=SSo_EIwHSd4" />
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
