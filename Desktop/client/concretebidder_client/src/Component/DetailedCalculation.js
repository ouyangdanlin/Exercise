import React, { Component } from 'react';
import './index.css';
import {button, Form, FormControl, FormGroup, Col, Grid, PageHeader, Row, Table,Image,Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Header from './Header';
import RightHeader from './RightHeader';
import {Summary} from './SummaryTable';
import {DetailImage} from './DCimage';
 
import calc from '../assets/calc.png'; 
import {Dimension} from './Dimension';
import {ArtTable} from './ArtTable';

class DetailedCalculation extends Component {
      render() {
        return (
          <Grid fluid>
            <Row className="HeaderBorder botpad"> 
              <Header title="Detailed Calculation" account="4595" number="1501" name="testProject"/> 
              <Col xs='12' md='4'>
                <Row>
                  <Col xm='12' sm='2' />           
                  <Link to={"/Project"}>
                  <RightHeader title="&nbsp;&nbsp;Home" buttonName="glyphicon-home"/>
                </Link> 
                <Link to={"elementspecification"}>  
                  <RightHeader title="&nbsp;&nbsp;&nbsp;Back" buttonName="glyphicon-backward" /> 
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
              
          <Summary></Summary>
        
      
          <DetailImage></DetailImage>
            <br />
            <Dimension></Dimension>
              <br />
          
            <ArtTable></ArtTable>
              <br />

            <Row className="BottomRow"> 
              <Col className="PrintVersion">  
                  <small className="bottomfont">Print out</small>
                  <button className="BottomIcons glyphicon glyphicon-print" aria-hidden="true"></button>       
              </Col>
            </Row>

         </Grid>
    
    
        );
      }
    }
    
    export default DetailedCalculation;
