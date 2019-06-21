import React, { Component } from 'react';
import { Button, Form, Container, Header, Select,Input } from 'semantic-ui-react';
import { saveSmurf } from "../actions";
import { connect } from "react-redux";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    }  
    state = {
      name: '',
      age: '',
      height: '',
    };
  

    handleChanges = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === 'age') { value = parseInt(value,10)}
    this.setState({ [e.target.name]: value });
    };

    addSmurf = e => {
        e.preventDefault();
        this.props.saveSmurf({
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        });

        this.setState({
            name: "",
            age: "",
            height: ""
        });
    };


  render() {  
    return (
      <div>
                        <input
                            //control={Input}
                            label="Name"
                            onChange={this.handleChanges}
                            placeholder="name"
                            value={this.state.name}
                            name="name"
                        />
                        <input
                            //control={Input}
                            label="Age"
                            onChange={this.handleChanges}
                            placeholder="age"
                            value={this.state.age}
                            name="age"
                        />
                        <input
                            //control={Input}
                            label="Height"
                            onChange={this.handleChanges}
                            placeholder="height"
                            value={this.state.height}
                            name="height"
                        />
                        <button
                        onClick={this.addSmurf}
                        //control={Button} 
                        type="submit">
                            Add to the village
                        </button>
        </div>
      
    );
  }
}
export default connect(null, { saveSmurf })(SmurfForm)

//export default SmurfForm;
