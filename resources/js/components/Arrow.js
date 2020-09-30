import React from 'react';


class Arrow extends React.Component {
    constructor(props) {
      super(props);
    }

    handleClick = () => {
        console.log('MLEBU','sasa');
    }
  
    render() {
      return (
        <div>
          <h1 id="1" onClick={this.handleClick()}>HELLO INDONESIA</h1>
        </div>
      );
    }
}

export default Arrow;