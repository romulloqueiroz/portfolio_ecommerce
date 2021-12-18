import styled, { css } from 'styled-components'
import { color } from '../../styles'

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${color.black};
`

const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

const FormInputLabel = styled.label<{ shrink: boolean }>`
  color: ${color.gray};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabel};
`

const StyledFormInput = styled.input`
  background: none;
  background-color: white;
  color: ${color.gray};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${color.gray};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel};
  }
`

export {
  Group,
  StyledFormInput,
  FormInputLabel
}