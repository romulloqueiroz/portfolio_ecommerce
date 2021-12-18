import styled from 'styled-components'
import { color } from '../../styles'

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: ${color.white};
  opacity: 0.7;
  position: absolute;
`

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: ${color.gray};
`

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`

const StyledMenuItem = styled.div<{ size?: string }>`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Content} {
      opacity: 0.9;
    }

    ${Title} {
      font-weight: bold;
    }

    ${Subtitle} {
      font-weight: lighter;
    }
  }

  ${({ size }) => size === 'large' && `
    height: 380px;
  `}; 

  :first-child {
    margin-right: 7.5px;
  }

  :last-child {
    margin-left: 7.5px;
  }
`

export {
  StyledMenuItem,
  BackgroundImage,
  Content,
  Title,
  Subtitle,
}