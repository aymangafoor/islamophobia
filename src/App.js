import React from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import './App.css';
import Home from './screens/home/Home'
import Contact from './screens/contact/contact'
import About from './screens/about/about'
import Hate from './screens/hate/hate'
import Definition from './screens/definition/definition'
import Everyday from './screens/everyday/everyday'
import Tracking from './screens/tracking/tracking'
import Library from './screens/library/library'



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/contact' component={Contact} exact/>
          <Route path='/about' component={About} exact/>
          <Route path='/hate' component={Hate} exact/>
          <Route path='/library' component={Library} exact/>
          <Route path='/definition' component={Definition} exact/>
          <Route path='/everyday' component={Everyday} exact/>
          <Route path='/tracking' component={Tracking} exact/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
