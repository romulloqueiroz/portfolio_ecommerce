
import { CustomButton } from './Button.styles'

interface ButtonProps {
  type?: 'submit' | 'button'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <CustomButton {...props}>
    {children}
  </CustomButton>
)

export default Button