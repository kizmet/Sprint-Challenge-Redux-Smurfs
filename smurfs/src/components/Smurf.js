import React from 'react';


const Smurf = props => {
  return (
    <div className="Friend">

      <header>
        <h1>{props.smurf.name}</h1>
      </header>

      <div className="age">
        <h4>Age:</h4>
        <p>{props.smurf.age}</p>
      </div>

      <div className="email">
        <h4>email:</h4>
        <p>{props.smurf.height}</p>
      </div>

    </div>
  )
}

export default Smurf;
