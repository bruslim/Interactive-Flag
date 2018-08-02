import React from 'react';
import ReactDOM from 'react-dom';
//import FlagSVG from './Flag.svg';
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
      {/* <img src={FlagSVG} width='600' height='400' /> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="1235"
      xmlnsLink="http://www.w3.org/1999/xlink" height="650" fill="#FFF">
        <path d="m0,0h1235v650H0"></path>
        <path stroke="#B22234" strokeWidth="2470" strokeDasharray="50" d="m0,0v651"></path>
        <path fill="#3C3B6E" d="m0,0h494v350H0"></path>
        <g id="q"><path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="q"></path></g>
        <g id="d"><path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="d"></path></g>
        <g id="e"><path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="e"></path></g>
        <g id="f"><path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="f"></path></g>
        <g id="t"><path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="t"></path></g>
        <g id="w"><path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="w"></path></g>
        <g id="a"><path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="a"></path></g>
        <g id="b"><path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="b"></path></g>
        <g id="c"><path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="c"></path></g>
        <g class="fill" id="s"><path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="s"></path></g>
        
        <path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="s"></path>
      {/* line 1 */}
        <use xlinkHref="#s" x="82"></use>
        <use xlinkHref="#s" x="164"></use>
        <use xlinkHref="#s" x="250"></use>
        <use xlinkHref="#s" x="328"></use>
        <use xlinkHref="#s" x="410"></use>
      {/* line 2 */}
        <use xlinkHref="#a" x="41" y="35"></use>
        <use xlinkHref="#a" x="124" y="35"></use>
        <use xlinkHref="#a" x="206" y="35"></use>
        <use xlinkHref="#a" x="286" y="35"></use>
        <use xlinkHref="#a" x="370" y="35"></use>     
      {/* line 3 */}
        <use xlinkHref="#d" y="70"></use>
        <use xlinkHref="#d" x="82" y="70"></use>
        <use xlinkHref="#d" x="164" y="70"></use>
        <use xlinkHref="#d" x="250" y="70"></use>
        <use xlinkHref="#d" x="328" y="70"></use>
        <use xlinkHref="#d" x="410" y="70"></use>
      {/* line 4 */}
        <use xlinkHref="#b" x="41" y="105"></use>
        <use xlinkHref="#b" x="124" y="105"></use>
        <use xlinkHref="#b" x="206" y="105"></use>
        <use xlinkHref="#b" x="286" y="105"></use>
        <use xlinkHref="#b" x="370" y="105"></use>
      {/* line 5 */}
        <use xlinkHref="#q" y="140"></use>
        <use xlinkHref="#q" x="82" y="140"></use>
        <use xlinkHref="#q" x="164" y="140"></use>
        <use xlinkHref="#q" x="250" y="140"></use>
        <use xlinkHref="#q" x="328" y="140"></use>
        <use xlinkHref="#q" x="410" y="140"></use>
      {/* line 6 */}
        <use xlinkHref="#c" x="41" y="175"></use>
        <use xlinkHref="#c" x="124" y="175"></use>
        <use xlinkHref="#c" x="206" y="175"></use>
        <use xlinkHref="#c" x="286" y="175"></use>
        <use xlinkHref="#c" x="370" y="175"></use>
      {/* line 7 */}
        <use xlinkHref="#w" y="210"></use>
        <use xlinkHref="#q" x="82" y="210"></use>
        <use xlinkHref="#q" x="164" y="210"></use>
        <use xlinkHref="#q" x="250" y="210"></use>
        <use xlinkHref="#q" x="328" y="210"></use>
        <use xlinkHref="#q" x="410" y="210"></use>
      {/* line 8 */}
        <use xlinkHref="#f" x="41" y="246"></use>
        <use xlinkHref="#f" x="124" y="246"></use>
        <use xlinkHref="#f" x="206" y="246"></use>
        <use xlinkHref="#f" x="286" y="246"></use>
        <use xlinkHref="#f" x="370" y="246"></use>
      {/* line 9 */}
        <use xlinkHref="#e" y="280"></use>
        <use xlinkHref="#e" x="82" y="280"></use>
        <use xlinkHref="#e" x="164" y="280"></use>
        <use xlinkHref="#e" x="250" y="280"></use>
        <use xlinkHref="#e" x="328" y="280"></use>
        <use xlinkHref="#e" x="410" y="280"></use>
      </svg>
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
