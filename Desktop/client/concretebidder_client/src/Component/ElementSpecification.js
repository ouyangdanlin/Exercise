import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { button, Form, FormControl, FormGroup, Col, ControlLabel, Grid, PageHeader, Row, Table} from 'react-bootstrap';
import Header from './Header';
import RightHeader from './RightHeader';
import {SpeSearch} from './SpeSearch'
import {Title} from './Title'
import {SpecificationTable} from './SpecificationTable'
class ElementSpecification extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="HeaderBorder">   
              
          <Header title="ElementSpecification" account="4595" number="1501" name="testProject"/> 
          <Col xs='12' md='4'>
            <Row>
              <Col xm='12' sm='4' />           
              <Link to={"/Project"}>
                <RightHeader title="&nbsp;&nbsp;Home" buttonName="glyphicon-home"/>
              </Link> 
              <Link to={"#"}>  
                <RightHeader title="&nbsp;Setting" buttonName="glyphicon-user" /> 
                </Link>  
              <Link to={"/"}>  
                <RightHeader title="&nbsp;Logout" buttonName="glyphicon-log-out" /> 
              </Link>  
            </Row>
          </Col>
        </Row>
        <Row className="marginTop">
          <Col xs={12} md={4}>
            <span className="leftHeader"> Number of Elements : 10 </span>
            <span className="leftHeader"> Number of hours : 2hrs</span>
          </Col>
          
          <SpeSearch></SpeSearch>

          <Col xs={12} md={4} >
            <p className="RevisionBar">Revision :
              <input type="text" placeholder='1' />  </p>
          </Col>
        </Row>
        <Row className="Title">
        <Title />
        </Row>
        <Row className="SpecificationTable">
        <SpecificationTable />
        <SpecificationTable />
        </Row>
        <Row className="BottomRow"> 
          <Col className="AddProduct" xm={12} sm={6}>        
              <small className="bottomfont">Add New Product</small>
              <button className="BottomIcons glyphicon glyphicon-plus" aria-hidden="true"></button>
          </Col>
          
          <Col className="PrintVersion" xm={12} sm={6}>  
              <small className="bottomfont">Print out</small>
              <button className="BottomIcons glyphicon glyphicon-print" aria-hidden="true"></button>       
          </Col>
        </Row>
      </Grid>


    );
  }
}


export default ElementSpecification;



