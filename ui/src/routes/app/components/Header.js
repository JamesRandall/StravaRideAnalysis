import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

export default ({isAuthenticated}) => {
    return <Navbar staticTop>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to={isAuthenticated ? '/dashboard' : '/' }><span className="prefixlogocolor">ride</span><span className="postfixlogocolor">analysis</span></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            {isAuthenticated ?
                <Nav pullRight>
                    <LinkContainer to="/signOut"><NavItem eventKey={1}>Sign Out</NavItem></LinkContainer>
                </Nav> : undefined
            }
        </Navbar.Collapse>
    </Navbar>
}