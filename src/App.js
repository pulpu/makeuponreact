import React, {Component} from 'react';
import Sidebar from './components/sidebar/sidebar'
import Footer from './components/footer/footer'
import './App.scss';



class App extends Component {
  render() {
    return (
    <div className="App">
          <Sidebar></Sidebar>
          <Footer></Footer>
    </div>
    )};
}

export default App;
