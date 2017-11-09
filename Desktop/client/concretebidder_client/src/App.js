import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Prompt,
  Switch, 
} from 'react-router-dom';
import Login from './Component/Login';
import ElementSpecification from './Component/ElementSpecification';
import DetailedCalculation from './Component/DetailedCalculation';
import Project from './Component/Project';
import Newprojectform from './Component/Newprojectform';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      projects:[ {
        status:"On going",
        name:"Test",
        noofelement:3,
        price:"400",
        date:"12/4/2017"
      },
      {
        status:"On going",
        name:"Test1",
        noofelement:3,
        price:"400",
        date:"12/4/2017"
      }
    ]
    }
  }
  componentDidMount(){
    axios.get("http://concretebidderapi.azurewebsites.net/projects").then((response) => {
     this.setState({projects:response.data})
         
      console.log(response.data);
      
  })
  .catch(error => {
      console.error(error);
     
  });

 

  }
   render() {
 
     return (
  <Router>
  <div className="row">   
      <Route exact path="/" component={Login} />
      <Route path="/project" render={ props => <Project
                                                                projects={ this.state.projects }
                                                               
                                                                {...props }/> }/>
      <Route path="/elementspecification" component={ElementSpecification} />
      <Route path="/newprojectform"  component={Newprojectform} />
      <Route path="/detailedCalculation" component={DetailedCalculation} />
  </div>
  </Router>
    );
  }
}
export default App;
