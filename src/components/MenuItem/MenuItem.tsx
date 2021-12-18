import { useNavigate } from 'react-router-dom'
import {
  Content,
  Title,
  Subtitle,
  StyledMenuItem,
  BackgroundImage
} from './MenuItem.styles'

interface MenuItemProps {
  title: string
  imageUrl: string
  size?: string
  linkUrl: string
}

const MenuItem:React.FC<MenuItemProps> = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate()
  return (
    <StyledMenuItem 
      size={size}
      onClick={() => navigate(`./${linkUrl}`)}
    >
      <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </StyledMenuItem>
  )
}

export default MenuItem