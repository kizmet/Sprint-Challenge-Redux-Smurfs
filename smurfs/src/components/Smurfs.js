import React from "react";
import { connect } from "react-redux";
import { getSmurfs, saveSmurf } from "../actions";
import Smurf from "./Smurf";
//import SmurfForm from './SmurfForm';
import {
    Menu,
    Header,
    Container,
    Card,
    Button,
    Form,
    Input
} from "semantic-ui-react";

class Smurfs extends React.Component {
    state = {
        name: "",
        age: "",
        height: ""
    };
    componentDidMount() {
        this.props.getSmurfs();
    }

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
            <Container text style={{ fontFamily: "Roboto", margin: 0 }}>
                <Header
                    as="h1"
                    style={{
                        fontSide: "16px"
                    }}
                >
                    Smurf Village
                </Header>

                <Card.Group>
                    {this.props.smurfs.map(smurf => (
                        <Smurf key={smurf.id} smurf={smurf} />
                    ))}
                </Card.Group>
                
                    {/*<Form onSubmit={this.addSmurf}>*/}
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
                    {/*</Form>*/}
                
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps,
    { getSmurfs, saveSmurf }
)(Smurfs);
