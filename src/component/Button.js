import styled from "styled-components";
import Roboto from './fonts/Roboto.ttf'

const Button = styled.button`
height: 63.17073440551758px;
width: 230px;
background: ${props => props.white ? "#FAB62F" : "black"};
color: ${props => props.white ? "black" : "#FAB62F"};
border: 2px solid;
border-color: ${props => props.white ? "black" : "#FAB62F"}
box-sizing: border-box;
font-family: ${Roboto};
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: center;
@media (max-width: 575px) {
    border-radius: 6px;
    height: 40px;
    width: 130px;
    border-radius: 6px;
    font-size: 16px;
  }
`;
export default Button;

