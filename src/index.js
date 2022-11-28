import React from "react";
import ReactDOM from "react-dom/client";
import Loader from "./Loader";
import SeasonDisplay from "./SeasonDisplay";
import './style/App.css'

// This functional component has no way or capability to wait for the result of the geolocation call
// functional component cannot re-render automatically on change of data. Or pause for data to come before rendering
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//        position => console.log(position),
//        err => console.log(err)
//     );
//     return (
//       <div>Latitude : </div>
//     );
// };

class App extends React.Component {
  // only job is to initialize state object
  // constructor(props) {
  //   super(props);
    
  //   this.state = {
  //     lat: null,
  //     errorMsg : ''
  //   };
  // }

  // this is the ONLY TIME we do direct assignment to state. Everywhere else use, setState
  state = {
    lat: null,
    errorMsg : ''
  };

  // Called automatically anytime that the component shows up on the screen
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat : position.coords.latitude}),
      err => this.setState({errorMsg : err.message })
    );
  };

  // called when re-rendering happens
  componentDidUpdate() {
    console.log('componentDidUpdate');
  };

  renderContent () {
    if(this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>
    }
    if(!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
    }
    return (
      <Loader message="Please accept access to location"></Loader>
    );
  }


  // this functional HAS to be defined! 
  // render method is called everytime state updates. so never do functionality in here. 
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);