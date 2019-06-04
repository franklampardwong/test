import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class FormDialog extends React.Component {
    constructor(){
        super();
        
        this.state = {
            open: false,
            email:'',
            companyName:''
           
          };
    }
  

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({propEmail:this.state.email})
    this.setState({ open: false });
  };
  handleSave = () => {
  
    this.setState({ open: false });
  };

  handleEmailChange = (e) =>{
    this.setState({email: e.target.value});

  }
  handleCompanyNameChange = (e) =>{

    this.setState({companyName: e.target.value});
  }


  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
         Update
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <form >
          <DialogTitle id="form-dialog-title">Update</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              Email:
            </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              defaultValue={this.props.row.email}
              fullWidth
              onChange={this.handleEmailChange} 
            />
            <TextField
              autoFocus
              margin="dense"
              id="companyName"
              name="companyName"
              label="Company Name"
              type="text"
              defaultValue={this.props.row.companyName}
              variant="outlined"
              fullWidth
              onChange={this.handleCompanyNameChange} 
            />
            <input type="hidden" name= "key" value={this.props.row.id} ></input>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>{ this.setState({ open: false });
            this.props.onClick(this.state.email,this.state.companyName,this.props.row.id)
            }
            } color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
        </Dialog>
      </div>
    );
  }
}
export default FormDialog;