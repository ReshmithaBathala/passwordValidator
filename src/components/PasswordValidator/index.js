import {useState} from 'react'
import {
  PasswordContainer,
  CardContainer,
  Heading,
  Paragraph,
  InputBox,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  console.log(password)
  return (
    <PasswordContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputBox type="password" onChange={onChangePassword} />
        {password.length < 8 ? (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        ) : (
          ''
        )}
      </CardContainer>
    </PasswordContainer>
  )
}

export default PasswordValidator
