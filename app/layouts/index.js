import React from 'react';
import { Link } from 'react-router';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/home'}>home</Link>
        <Link to={'/about'}>About</Link>
        {this.props.children}
      </div>
    );
  }
}
export default Index;