import React, { Component } from 'react';
import './index.css';
import { Button, Form, FormControl, FormGroup, Grid, Row, Col, ControlLabel, Carousel } from 'react-bootstrap';

export const Filters = (props) => {
    return (
        <Col xm={12} sm={3} className="filters">
        <h4>Filter by: </h4>
        <hr />
        <Form>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Factory</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">Fact1</option>
              <option value="other">Fact2</option>
              <option value="other">Fact3</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel> </ControlLabel>
            <FormControl componentClass="textarea" multiple>
              
            </FormControl>
          </FormGroup>
          {/* <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel> </ControlLabel>
            <FormControl componentClass="select" multiple>
              <option value="select">Fact1</option>
              <option value="other">Fact2</option>
              <option value="other">Fact3</option>
              <option value="other">Fact4</option>
              <option value="other">Fact5</option>
            </FormControl>
          </FormGroup> */}
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Status</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">New(G)</option>
              <option value="other">Ongoing(Y)</option>
              <option value="other">Finish(R)</option>
              <option value="other">All</option>
            </FormControl>
          </FormGroup>
          <Button bsStyle="success" type="button">Submit</Button>
        </Form>
        </Col>
    );
};
