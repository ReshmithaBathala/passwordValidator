// Style your elements here
import styled from 'styled-components'

export const PasswordContainer = styled.div`
  background-color: #383a4e;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  background-color: #475569;
  height: 300px;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'Roboto';
`
export const Paragraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #f8fafc;
  font-family: 'Roboto';
`
export const InputBox = styled.input`
  height: 40px;
  outline: none;
  border: 0px solid transparent;
  border-radius: 4px;
  width: 80%;
`
export const ErrorText = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #ef4444;
  font-family: 'Roboto';
`
