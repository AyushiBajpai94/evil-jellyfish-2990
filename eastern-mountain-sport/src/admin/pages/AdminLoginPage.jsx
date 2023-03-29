import { Button, Container, Input } from '@chakra-ui/react'
import React from 'react'

export default function AdminLoginPage() {
  return (
    <Container>
        <form>
        <Input type={'email'} isRequired={true}/>
        <Input type={'password'} isRequired={true}/>
        <Button type='submit'>Login</Button>
        </form>
    </Container>
  )
}
