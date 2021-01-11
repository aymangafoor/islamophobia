import styled from "styled-components";
import Roboto from './fonts/Roboto.ttf'
const Toggle = styled.button`
height: 40px;
width: 123px;
border: 2px solid;
background-color: ${props => props.clicked ? "#FAB62F" : "white"};
color: ${props => props.clicked ? "white" : "#FAB62F"};
border-color: #FAB62F;
outline: none;
font-family: ${Roboto};
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 14px;
letter-spacing: 0.05em;
text-align: center;
`;
export default Toggle;