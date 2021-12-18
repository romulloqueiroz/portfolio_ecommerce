import {
  Homepage,
  DirectoryMenu,
  MenuItem,
  Content,
  Title,
  Subtitle
} from './Home.styles'


const Home = () => {
  return (
    <Homepage>
      <DirectoryMenu>

        <MenuItem>
          <Content>
            <Title>HATS</Title>
            <Subtitle>SHOP NOW</Subtitle>
          </Content>
        </MenuItem>

        <MenuItem>
          <Content>
            <Title>JACKETS</Title>
            <Subtitle>SHOP NOW</Subtitle>
          </Content>
        </MenuItem>

        <MenuItem>
          <Content>
            <Title>SNEAKERS</Title>
            <Subtitle>SHOP NOW</Subtitle>
          </Content>
        </MenuItem>

        <MenuItem>
          <Content>
            <Title>WOMENS</Title>
            <Subtitle>SHOP NOW</Subtitle>
          </Content>
        </MenuItem>

        <MenuItem>
          <Content>
            <Title>MENS</Title>
            <Subtitle>SHOP NOW</Subtitle>
          </Content>
        </MenuItem>

      </DirectoryMenu>
    </Homepage>
  )
}

export default Home
