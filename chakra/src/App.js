import logo from './logo.svg';
import './App.css';
import { Button, Container, Input } from '@chakra-ui/react'
import { color } from 'framer-motion';


function App() {
  return (
    <div className="App">
      <Container bg={"black"} padding={"20px"}>
        <h1 style={{fontWeight:"700",marginTop:"40px",fontSize:"40px",color:"white"}}>Sign in </h1>
      <Input placeholder='user name' mt={"30px"} padding={"30px"}/> 
      <Input placeholder='Email'mt={"30px"} padding={"30px"}/>
      <Input placeholder='Password' mt={"30px"} padding={"30px"}/>
      <h3 style={{textAlign:"center",marginTop:"20px",color:"white"}}>Already have an account ?</h3>
      <Button mt={"40px"} padding={"30px"} bg={"transparent"} border={"1px solid white"} color={"white"}>Sign up</Button>
      </Container>
      
    </div>
  );
}

export default App;
