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
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <Container text style={{ fontFamily: "Roboto", margin: 0 }}>
                <Header
                    as="h1"
                    style={{
                        fontSize: "26px",
                        fontFamily: "Roboto"
                    }}
                >
                    Smurf Village
                </Header>
                <Card.Group>
                    {this.props.smurfs.map(smurf => (
                        <Smurf key={smurf.id} smurf={smurf} />
                    ))}
                </Card.Group>
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
