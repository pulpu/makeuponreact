import React, {Component} from 'react';
import Sidebar from './containers/sidebar/sidebar'
import Footer from './containers/footer/footer'
import './App.scss';



class App extends Component {
  render() {
    return (
    <div className="App">
          <Sidebar></Sidebar>
          {this.props.children}
          <Footer></Footer>
    </div>
    )};
}

export default App;
