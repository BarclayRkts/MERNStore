import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Container, Button, Collapse} from 'reactstrap';
import { BrowserRouter as Router } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style/AppNavbar.css';

library.add(fas);

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
                        <Collapse isOpen={this.state.isOpen} navbar>
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
                            <NavItem>
                                <FontAwesomeIcon className='cart' icon={['fas', 'shopping-cart']}/>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Container>
                </Navbar>    
            </div>
            
            
        </Router>
        )
    }
}
export default withRouter(AppNavbar);