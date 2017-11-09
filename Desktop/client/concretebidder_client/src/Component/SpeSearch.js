import React, { Component } from 'react';
import './index.css';
import { button, Form, FormControl, FormGroup, Col, ControlLabel, Grid, PageHeader, Row, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const SpeSearch = (props) => {
      return (
        <Col xs={12} md={4}>
        <span className="SearchBar">
          <input type="text" placeholder="Keyword" />
          <button> Search </button>
        </span>
      </Col>
            );
        };