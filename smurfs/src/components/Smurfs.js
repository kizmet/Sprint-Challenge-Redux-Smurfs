import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions'
import Smurf from './Smurf';

class Smurfs extends React.Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)
    )
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs })(Smurfs)
