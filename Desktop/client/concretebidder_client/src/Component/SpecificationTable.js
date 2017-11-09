import React, { Component } from 'react';
import './index.css';
import { button, Form, FormControl, FormGroup, Col, ControlLabel, Grid, PageHeader, Row, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const SpecificationTable = (props) => {
    return (
     
       
        <Col xs={12} md={12} className="TableRow">
          <Table striped bordered condensed hover>
          <tbody>
          <tr>
            <td><Link to={"/DetailedCalculation"}>0</Link></td>
            <td>2</td>
            <td><FormControl type="text" placeholder="VXV" /></td>
            <td><FormControl type="number" placeholder="250" /></td>
            <td><FormControl type="number" placeholder="250" /></td>
            <td><FormControl type="number" placeholder="1250" /></td>
            <td>0.3</td>
            <td>0.15</td>
            <td><FormControl type="number" placeholder="400" /></td>
            <td>TE</td>
            <td></td>
            <td><FormControl type="text" placeholder="Avvaxingar Petr" /></td>
            <td><a href="#">Delete</a></td>
          </tr>
        </tbody>
          </Table>
        </Col>
   

      
          );
      };