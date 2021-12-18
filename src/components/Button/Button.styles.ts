import styled from 'styled-components'
import { color } from '../../styles'

const CustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${color.black};
  color: ${color.white};
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  :hover {
    background-color: ${color.white};
    color: ${color.black};
    border: 1px solid ${color.black};
  }
`

export {
  CustomButton
}