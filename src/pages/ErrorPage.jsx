import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {Button} from '../styles/Button';


const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>404</h2>
        <h3>Error</h3>
        <p>This page dosn't exist</p>
<NavLink to='/'>

<Button>Go to Home</Button>
</NavLink>


      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
.container{
 text-align:center;
 padding:150px 0;
 h2{
  color:red;
  font-size:45px;
  padding:5px 0;
 }
h3{
  color:red;
  font-size:32px;
  padding:5px 0;
  
}
p{
  padding:5px 0 15px 0;
  color:red;
  font-size:25px;
}
}
`;

export default ErrorPage
