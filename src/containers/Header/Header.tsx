import { ReactComponent as Logo } from '../../assets/crown.svg'
import {
  StyledHeader,
  StyledLink,
  Options
} from './Header.styles'

const Header = () => (
  <StyledHeader>
    <StyledLink to='/'>
      <Logo />
    </StyledLink>
    <Options>
      <StyledLink to='/shop'>
        SHOP
      </StyledLink>
      <StyledLink to='/contact'>
        CONTACT
      </StyledLink>
    </Options>
  </StyledHeader>
)

export default Header