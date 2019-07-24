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
            jan:'',
            feb:''
           
          };
    }
  

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    //this.setState({propEmail:this.state.email})
    this.setState({ open: false });
  };
  handleSave = () => {
  
    this.setState({ open: false });
  };

  handleJanChange = (e) =>{
    this.setState({jan: e.target.value});

  }
  handleFebChange = (e) =>{

    this.setState({feb: e.target.value});
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
              id="Jan"
              name="Jan"
              label="Jan"
              type="Jan"
              variant="outlined"
              defaultValue={this.props.row.jan}
              fullWidth
              onChange={this.handleJanChange} 
            />
            <TextField
              autoFocus
              margin="dense"
              id="Feb"
              name="Feb"
              label="Feb Name"
              type="Feb"
              defaultValue={this.props.row.feb}
              variant="outlined"
              fullWidth
              onChange={this.handleFebChange} 
            />
            <input type="hidden" name= "key" value={this.props.row.id} ></input>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>{ this.setState({ open: false });
            this.props.onClick(this.state.jan,this.state.feb,this.props.row.id)
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