import { useState } from 'react'
import {
  StyledSignIn
} from './SignIn.styles'
import { FormInput, Button } from '../../components'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <StyledSignIn>
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type='email' 
          value={email} 
          label='Email'
          onChange={e => setEmail(e.target.value)}
          required 
        />
        <FormInput 
          type='password' 
          value={password} 
          label='Password'
          onChange={e => setPassword(e.target.value)}
          required 
        />
        <Button type='submit'>Sign In</Button>
      </form>
    </StyledSignIn>
  )
}

export default SignIn