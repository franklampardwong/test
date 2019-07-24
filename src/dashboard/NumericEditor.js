import React from "react";
import ReactDOM from "react-dom";
import { Input } from "@material-ui/core";
import ContentEditable from 'react-contenteditable'
import '../css/editor.css';




class NumericEditor extends React.Component {
    constructor(props) {
      super(props);
      this.state = { [props.column.key]: props.value };
      console.log(this.state[props.column.key]);
    }
  
    getValue() {
        return this.state;
      }
  
    getInputNode() {
      return ReactDOM.findDOMNode(this).getElementsByTagName("input")[0];
    }
    
    handleChange = (e) =>{
        console.log(isNaN(e.target.value));
        if (isNaN(e.target.value)) {
            this.setState({[this.props.column.key]:''});
            return;
        }else{
            this.setState({[this.props.column.key]:e.target.value});
            console.log(this.state);
            return e.target.value ;
        }
    
    }

    
    render() {
      return (
        <div>
                    <ContentEditable html={this.state[this.props.column.key]}  className='editor-base' onChange={this.handleChange}/>
          </div>
      );
    }
  }
  export default NumericEditor;