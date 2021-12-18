import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

const StyledLink = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Option = styled(Link)`
  padding: 10px 15px;
`

export {
  StyledHeader,
  StyledLink,
  Options,
  Option
}