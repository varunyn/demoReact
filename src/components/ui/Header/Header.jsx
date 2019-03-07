import React from 'react';
import style from './style.scss';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
// import {fa_angle_down} from 'react-icons/fa';

import logo from '../../../assets/images/Oracle_logo.svg';
import { IoIosArrowDown } from 'react-icons/io';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" className={style.navbar}>
          <NavbarBrand href="/">
            <img src={logo} className={style.navImage} height="20" alt="image" />
          </NavbarBrand>
          <div className={style.navItem}>
            <UncontrolledButtonDropdown>
              <DropdownToggle nav caret>
                Section 1
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>

            <UncontrolledButtonDropdown>
              <DropdownToggle nav caret>
                Section 2
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </Navbar>
      </div>

      /* <div className="container">
         <Navbar  light expand="md"  classNameName={style.navbar}>
              <NavbarBrand href="/">
                  <img src={logo}  classNameName={style.navImage}/>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar> 

        <nav className="navbar navbar-expand-md no-gutters">
          <div className="col-2 text-left">
            <a href="#">
              <img src={logo} height="20" alt="image" />
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav12"
            aria-controls="navbarNav12"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggleOpen}
          >
            <span>
              <IoIosArrowDown />
            </span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center col-md-8 col-lg-6 col-xl-4 col-sm-8"
            id="navbarNav12"
            isOpen={this.state.isOpen}
            className={menuClass}
          >
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </nav>
         <div classNameName={style.center}>
                <Nav classNameName="ml"  navbar>
               
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                
                </Nav>
                </div> 
        </Collapse>
        </Navbar>
      </div>  */
    );
  }
}
