import React, { Component } from "react";
import {
    Button,
    Form,
    Container,
    Header,
    Select,
    Input
} from "semantic-ui-react";
import { saveSmurf } from "../actions";
import { connect } from "react-redux";

class SmurfForm extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        name: "",
        age: "",
        height: ""
    };
}
    handleChanges = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === "age") {
            value = parseInt(value, 10);
        }
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
            <Container text style={{ fontFamily: "Roboto", margin: 0 , 'minHeight': '60vh'}}>
                <Header
                    as="h1"
                    style={{
                        fontFamily: "Roboto",
                        fontSize: "26px"
                    }}
                >Add a New Smurf</Header>
                <Form onSubmit={this.addSmurf} style={{ background: "white" }}>
                    <Form.Group>
                    <Form.Field>
                        <input className="newSmurf"
                            //control={Input}
                            //label="Name"
                            onChange={this.handleChanges}
                            placeholder="name"
                            value={this.state.name}
                            name="name"
                        />
                        </Form.Field>
                        <Form.Field>
                        <input
                            //control={Input}
                            label="Age"
                            onChange={this.handleChanges}
                            placeholder="age"
                            value={this.state.age}
                            name="age"
                        />
                        </Form.Field>
                        <Form.Field>
                        <input
                            //control={Input}
                            label="Height"
                            onChange={this.handleChanges}
                            placeholder="height"
                            value={this.state.height}
                            name="height"
                        />
                        </Form.Field>
                        <Form.Field >
                        <button
                            //onClick={this.addSmurf}
                            //control={Button}
                            className="addSmurf"
                            type="submit"
                        >
                            Add to the village
                        </button>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}
export default connect(
    null,
    { saveSmurf }
)(SmurfForm);

//export default SmurfForm;
