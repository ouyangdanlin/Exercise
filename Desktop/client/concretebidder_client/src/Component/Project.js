import React, { Component } from 'react';
import './index.css';
import {ImageSlider} from './ImageSlider';
import {Filters} from './Filters';
import { Button, Form, FormControl, FormGroup, Grid, Row, Col, ControlLabel, Carousel,PageHeader } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import RightHeader from './RightHeader';
class Popup extends React.Component {
  render() {
    return (
    <div className="static-modal">
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <p>hahahahahahahhahahah</p>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    </div>
    );
  }
}

class Project extends Component{

  render(){
    
    return (
      <Grid fluid>
         <Row className="HeaderBorder margin">
         <Col xs="12" md="8">
           <PageHeader className="header1">Projects <span>
            <small> Welcome To Concrete Bidder </small></span>
           </PageHeader>
         </Col>
         <Col xs='12' md='4'>
         <Row>
           <Col xm='12' sm='6' />           
            
           <Link to={"#"}>  
             <RightHeader title="&nbsp;Setting" buttonName="glyphicon-user" /> 
             </Link>  
           <Link to={"/"}>  
             <RightHeader title="&nbsp;Logout" buttonName="glyphicon-log-out" /> 
           </Link>  
         </Row>
       </Col>
       </Row>
       {/*  <Row className="slider" >         
            <ImageSlider>
            </ImageSlider>          
        </Row> */}
        <Row className="BodyContent">
          
            <Filters> </Filters>
         
          <Col xm={12} sm={9} className="projects">
            <Row>
              <Col xm={3} sm={2}>
                <h5>Sort by : </h5>
              </Col>
              <Col xm={3} sm={3 }>
                <FormGroup controlId="formControlsSelect">
               
                  <FormControl componentClass="select" placeholder="select">
                  
                 <option value="select"> High Price </option> 
                 <option value="select"> Low Price </option> 
                )
              })
            }     
                    
                  </FormControl>
                </FormGroup>
              </Col>
              <Col className="align-right" xm={6} sm={6}>

              <Link to={"/Newprojectform"}>Add New Project <button className="LargeIcons glyphicon glyphicon-plus" aria-hidden="true"></button> </Link>
              </Col>
            </Row>
            <Row>
              { this.props.projects.map((project)=>{
                return (<Link to={"/elementspecification"}>
                <Col sm={4} className="New">
                  <ul className="New">
                    <li>Name: {project.ProjectName}</li>
                    <li>Date Created:{project.CreatedDate}</li>
                    <li>FactoryName:{project.FactoryName}</li>
                    <li> Price:{project.Price}</li>
                    <li>Status{project.Status} </li>
                
                  </ul>
                </Col>
                </Link>)
              })

              }
            
              
            </Row>
            <Row>
              <Col sm={12}>
                <a href="#">Load More</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid> 
    );
  }
}

export default Project;