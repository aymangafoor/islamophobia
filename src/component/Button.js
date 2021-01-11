import styled from "styled-components";
import Roboto from './fonts/Roboto.ttf'

const Button = styled.button`
height: 63.17073440551758px;
width: 230px;
background: ${props => props.white ? "#FAB62F" : "white"};
color: ${props => props.white ? "white" : "#FAB62F"};
border: 2px solid;
border-color: ${props => props.white ? "white" : "#FAB62F"}
box-sizing: border-box;
font-family: ${Roboto};
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: center;
`;
export default Button;

