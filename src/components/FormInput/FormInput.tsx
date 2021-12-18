import {
  Group,
  StyledFormInput,
  FormInputLabel
} from './FormInput.styles'

interface FormInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  value: string
  type: string
  required?: boolean
}

const FormInput: React.FC<FormInputProps> = ({ onChange, label, value, ...props }) => (
  <Group>
    <StyledFormInput onChange={onChange} {...props} />
    {
      label && (
        <FormInputLabel shrink={value.length > 0}>
          {label}
        </FormInputLabel>
      )
    }
  </Group>
)

export default FormInput