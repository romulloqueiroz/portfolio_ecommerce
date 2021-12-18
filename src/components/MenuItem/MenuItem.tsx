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
}

const MenuItem:React.FC<MenuItemProps> = ({ title, imageUrl, size }) => (
  <StyledMenuItem size={size}>
    <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}} />
    <Content>
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </StyledMenuItem>
)

export default MenuItem