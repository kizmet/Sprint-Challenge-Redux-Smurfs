import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Container } from 'semantic-ui-react';

class Navigation extends React.Component {

  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render () {
  const { activeItem } = this.state
  return (
        <Menu color="blue" inverted widths={2}
              style={{
                fontFamily:'Permanent Marker',
                fontSize: '26px',
                margin:0
              }}
              >
                  <Menu.Item
                  name="home"
                  active={this.activeItem==='home'}
                  onClick={this.handleItemClick}
                  href='/'
                   >Home</Menu.Item>   
                   <Menu.Item as={Link} to="/smurf-form"
                   name="add-a-smurf"     
                   active={this.activeItem==='add-a-smurf'}
                   onClick={this.handleItemClick}
                   
                   >Add a Smurf 
                   </Menu.Item>
              </Menu>
              

  )
  }
}
export default Navigation;
