import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import { userConstants } from '../_constants';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  function UserProDialog(props) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
  
    return (
      <div>
        <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
          {props.authentication.user.username}
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"User Profile"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-username">
                User Name: {props.authentication.user.username}
              
            </DialogContentText>
            <DialogContentText id="alert-dialog-slide-firstName">
              First Name: {props.authentication.user.firstName}
            </DialogContentText>
            <DialogContentText id="alert-dialog-slide-lastName">
              First Name: {props.authentication.user.lastName}
            </DialogContentText>
            <DialogContentText id="alert-dialog-slide-lastName">
              First Name: {props.authentication.user.role}
            </DialogContentText>
          </DialogContent>

          <DialogActions>
          <Link  color="inherit" href="/login"><Button color="primary">Logout</Button></Link>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  const mapStateToProps = state =>({
    authentication:state.authentication
});

  export default connect(mapStateToProps)(UserProDialog);  