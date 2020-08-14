import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import { withRouter } from 'react-router-dom';

class AppNavbar extends Component {
    constructor(props){
        super(props); // calls parent class constructor 
        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleClick = e => {
        this.props.history.push("/product/upload");
    };
    render() {
        return (
        <Router>
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href='/'>Discount Store</NavbarBrand>
                        {/*<Nav>
                            <NavItem>
                                <NavLink color="light" to='/'>Home</NavLink>
                            </NavItem>
                        </Nav>*/}
                        {/*<NavbarToggler onClick={this.toggle}>Toggle</NavbarToggler>*/}
                        {/*<Collapse isOpen={this.state.isOpen} navbar>*/}
                        <Nav className="ml-auto" navbar>
                            {/*<NavItem>
                                <NavLink color="light" to='/'>Customer Service</NavLink>
                            </NavItem>*/}
                            <NavItem>
                                {/*<Button size="sm" color="info" onClick={this.props.handleClick}>Add new Product</Button>*/}
                                {/*<Button onClick={(e) => {
                                    this.props.history.push('/product/upload')
                                }}>Add Product</Button>*/}
                                <Button onClick={this.handleClick}>Add Product</Button>

                                {/*<Link className="FormBtn" to='/product/upload'>Add Product</Link>*/}
                            </NavItem>

                        </Nav>
                        {/*</Collapse>*/}
                    </Container>
                </Navbar>    
            </div>
            
            
        </Router>
        )
    }
}
export default withRouter(AppNavbar);