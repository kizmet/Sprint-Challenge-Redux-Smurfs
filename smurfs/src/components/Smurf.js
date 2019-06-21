import React from 'react';
import { Card } from 'semantic-ui-react';

const Smurf = props => {
  return (
    <Card>
    <Card.Content>
      <Card.Header>{props.smurf.name}</Card.Header>
      <Card.Meta>{props.smurf.height} tall</Card.Meta>
      <Card.Description>{props.smurf.age} smurf years old</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Smurf;
