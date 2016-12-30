import React from 'react';


export default class Button extends React.Component {

  constructor(props){
    super(props);
    this.styles = {
      border: '1px solid #eee',
      borderRadius: 3,
      backgroundColor: '#FFFFFF',
      cursor: 'pointer',
      fontSize: 15,
      padding: '3px 10px',
      margin: 10,
    };
  }

  render() {
    if(this.props.small){
      this.styles.fontSize = 10;
    }

    return (
      <button
        style={this.styles}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}



Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};
