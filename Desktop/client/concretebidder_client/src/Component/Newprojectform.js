import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { Button,Form,FormControl,FormGroup,Col,ReactDOM,OverlayTrigger,ControlLabel} from 'react-bootstrap';
import axios from 'axios';

class Newprojectform extends Component {
   constructor(props) {
        super(props);
        
        this.state = {
          ProjectName:'',
          Price:'',
          FactoryName:'',
          CustomerName:'',
          Location:'',
          Status :''
        }     
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

     onSubmit = (e) => {
        e.preventDefault();
        
        const { ProjectName,Price,FactoryName,CustomerName,Location,Status } = this.state;
    
       
        axios.post('http://concretebidderapi.azurewebsites.net/projects', {
          ProjectName,Price,FactoryName,CustomerName,Location,Status
        })
        .then(response => {})
        .catch(e => {
          console.log(e)
        })
      }
      
render() {
  
return (

<div>
 <h1>New Project</h1>
        <hr/>
        <br/>
       
         Projectname
         <input 
         value={this.state.ProjectName}
         onChange={this.onChange.bind(this)}
         type="string" 
         name="ProjectName" />
         <br/>
         Price
         <input 
         value={this.state.Price}
         onChange={this.onChange.bind(this)}
         type="int" 
         name="Price" />
         <br/>
         Factoryname
         <input 
         value={this.state.FactoryName}
         onChange={this.onChange.bind(this)}
         type="string" 
         name="FactoryName" />
         <br/>
         Status
         <input 
         value={this.state.Status}
         onChange={this.onChange.bind(this)}
         type="string" 
         name="Status" />
         <br/>
         Customername
         <input 
         value={this.state.CustomerName}
         onChange={this.onChange.bind(this)}
         type="string" 
         name="CustomerName" />
         <br/>
         Location
         <input 
         value={this.state.Location}
         onChange={this.onChange.bind(this)}
         type="string" 
         name="Location" />
         <br/>
      <button onClick={this.onSubmit} className="btn btn-primary btn-lg" type="submit">Submit</button>
      
</div>

)
}
}
 


export default Newprojectform;


 /* export const Newprojectform = (props) => {
    return (
     
        <div className="container">
        <br/>
        <h1>New Project</h1>
        <hr/>
        <br/>
        <Form horizontal>

        <FormGroup controlId="formHorizontalProjectname">
        <Col componentClass={ControlLabel} sm={2}>
        Project Name
        </Col>
        <Col sm={6}>
        <FormControl type="text" placeholder="projectname" />
        </Col>
        </FormGroup>
        <br/>
        <FormGroup controlId="formHorizontalChooseFactory">
        <Col componentClass={ControlLabel} sm={2}>
        ChooseFactory
        </Col>
        <Col sm={6}>
        <FormControl componentClass="Select" placeholder="ChooseFactory">
          <option value="Select">Fac1</option>
          <option value="other">Fac2</option>
          <option value="other">Fac3</option>
          <option value="other">Fac4</option>
        </FormControl>
        </Col>
        </FormGroup>
        <br/>
        <FormGroup controlId="formHorizontalCustomer">
        <Col componentClass={ControlLabel} sm={2}>
        Customer name
        </Col>
        <Col sm={6}>
        <FormControl type="text" placeholder="Customer" />
        </Col>
        </FormGroup>
        <br/>
        <FormGroup controlId="formHorizontalLocation">
        <Col componentClass={ControlLabel} sm={2}>
        Location
        </Col>
        <Col sm={6}>
        <FormControl type="text" placeholder="Location" />
        </Col>
        </FormGroup>
        <br/>
        <FormGroup controlId="formHorizontalDate">
        <Col componentClass={ControlLabel} sm={2}>
        Date
        </Col>
        <Col sm={6}>
        <FormControl type="Date" placeholder="Date" />
        </Col>
        </FormGroup>
        <br/>
        <FormGroup controlId="formHorizontalStatus">
        <Col componentClass={ControlLabel} sm={2}>
        Status
        </Col>
        <Col sm={2}>
        <FormControl componentClass="select" placeholder="Status">
          <option value="select">New</option>
          <option value="other">Ongoing</option>
          <option value="other">Finished</option>
        </FormControl>
        </Col>
        </FormGroup>
        

        </Form>
       
        <br/>
        <div className="button-group">
        <Col sm={4}>
        <Link to={"/Project"}>
          <Button bsSize="large" active>Cancel</Button>
        </Link>  
        </Col>
        <Col sm={1}>
        <Link to={"/ElementSpecification"}>
          <Button bsStyle="primary" bsSize="large" active>Next(Go to Element specification)</Button>
          </Link>
        </Col>
        </div>

     </div> 
    );
  };
 */