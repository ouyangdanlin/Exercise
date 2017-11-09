import React, { Component } from 'react';
import './index.css';
import { button, Col, Grid, PageHeader, Row, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const Header = (props) => {
      return (
        <Grid fluid>
          <Row className="HeaderBorder">
            <Col xs="12" md="8">
              <PageHeader className="header1">Detailed Calculation <br />
                <small className="smallfont">Factory account:4945</small>
                <small className="smallfont">Project Number: 17052</small>
              </PageHeader>
            </Col>
            <Col xs="12" md="4">
              <PageHeader className="IconHeader">
                <Link to ={"/Project"}>
                    <button class="LargeIcons glyphicon glyphicon-home" aria-hidden="true"></button>
                </Link>
                <Link to ={"/ElementSpecification"}>
                    <button class="LargeIcons glyphicon glyphicon-backward" aria-hidden="true"></button>
                </Link>  
                    <button class="LargeIcons glyphicon glyphicon-user" aria-hidden="true"></button>
                <Link to ={"/"}>
                    <button class="LargeIcons glyphicon glyphicon-log-out" aria-hidden="true"></button>  <br />
                </Link>
                <small className="smallfont">Home</small>
                <small className="smallfont">Back</small>
                <small className="smallfont">Settings</small>
                <small className="smallfont">Logout</small>
              </PageHeader>
            </Col>
          </Row>
         </Grid>
            );
        };
      