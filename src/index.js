import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';


class MyComponent extends React.Component {
      constructor(props) {
        super(props);
      }
    
      render() {
        return(
          <div>
            <h1>Hello! just a sample page</h1>
          </div>
        );
      }
    };


// ========================================
ReactDOM.render(<MyComponent />, document.getElementById('root'))
