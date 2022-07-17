import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';


const NavLink = props => (
  <Link to={props.to}>{props.text}</Link>
)

const Ul = styled.ul`
  list-style: none;
  display: none; 
  flex-flow: row nowrap;
  li {
    padding: 1rem .5rem;
  }
  @media (max-width: 64em) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #222f3e;
    position: fixed;
    z-index: 19;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 18rem;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a{
      color: #fff;
    }
  }
`;



const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><NavLink to='/' text='Articles' /></li>
      <li><NavLink to='/about' text='About' /></li>
      <li><NavLink to='/' text='Contact Us' /></li>
      <li><NavLink to='/' text='Sign In' /></li>
      <li><NavLink to='/' text='Sign Up' /></li>
    </Ul>
  )
}

export default RightNav