import React from 'react';
import ReactDOM from 'react-dom';
import Flagimg from './screenshot.png';
// import './index.css';

const Header = () => {
  return (
    <div>
      <p>I am the header bleh</p>
    </div>
  );
};

const Flag = () => {
  return (
    <div>
      {/* <img src={require('./screenshot.png')} /> */}
      <img src={Flagimg} width='300' height='200' />
    </div>
  );
};

const Info = () => {
  return (
    <div>
      <p>I am the side info</p>
    </div>
  );
};


const InfoBottom = () => {
  return (
    <div>
      <p>I am the bottom info</p>
    </div>
  );
};

class Main extends React.Component {
      constructor(props) {
        super(props);
      }
    
      render() {
        return(
          <div>
            <h1>Hello! just a sample page</h1>
            <Header />
            <Flag />
            <Info /> 
            <InfoBottom />
          </div>
        );
      }
    };


// ========================================
ReactDOM.render(<Main />, document.getElementById('root'))
