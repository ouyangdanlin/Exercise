import React, { Component } from 'react';
import './index.css';
import { button, Form, FormControl, FormGroup, Col, ControlLabel, Grid, PageHeader, Row, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const Title = (props) => {
      return (
        
          
         
          <Col xs={12} md={12}>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Project Layers</th>
                  <th>Variant Number</th>
                  <th>Littera</th>
                  <th>Weighe</th>
                  <th>Height</th>
                  <th>Length</th>
                  <th>Area [m^2]</th>
                  <th>Vikt[ton]</th>
                  <th>Product Group</th>
                  <th>ID Number</th>
                  <th>Single Amount</th>
                  <th>Ammaking</th>
                  <th>Operations</th>
                </tr>
              </thead>
            </Table>
          </Col>
  

       
            );
        };