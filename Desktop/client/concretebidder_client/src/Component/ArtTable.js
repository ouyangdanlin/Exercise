import React, { Component } from 'react';
import './index.css';
import {button, Form, FormControl, FormGroup, Col, Grid, PageHeader, Row, Table, Image, Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const ArtTable = (props) => {
        return (

        <Panel>
            <Row className="Title"> 
                <Col className="Article" xs={3} md={2}>
                    <h1>Articles</h1>
                </Col>
                <Col className="AddArticle">        
                    <small className="bottomfont">Add New Article</small>
                    <button className="BottomIcons glyphicon glyphicon-plus" aria-hidden="true"></button>
                </Col>
            </Row>
    
         <Row className="SpecificationTable">
             <Col xs={12} md={12}>
              <Table striped bordered condensed hover>
                  <thead>
                   <tr>
                      <th>Articles</th>
                      <th>Designation</th>
                      <th>Unit</th>
                      <th>Time</th>
                      <th>Fare</th>
                      <th>With-reference</th>
                      <th>Control</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                      <th>My time min</th>
                      <th>Arb salary kr</th>
                      <th>Cost kr</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><FormControl type="text" placeholder="01-ÄRBLÖ-000" /></td>
                      <td>Arbetslön för</td>
                      <td>min</td>
                      <td>0</td>
                      <td>5</td>
                      <td><FormControl type="number" placeholder="0.39" /></td>
                      <td><FormControl type="number" placeholder="" /></td>
                      <td><FormControl type="number" placeholder="1,00" /></td>
                      <td>2,07</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td><a href="">Delete</a></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
        </Panel> 

    );
};