import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Card} from 'react-bootstrap';

const api = axios.create({
    baseURL:'https://thingproxy.freeboard.io/fetch/http://informatik10.ei.hv.se/UserService/Login'
})

class login extends Component
{
    state={
        status:"",
        roll:"",
    }
 
    constructor(){
        super();
        
    }
    
    logIn = async () => {
        let res = await api.post('/', { 
            username: "TestTest", 
            password: "TestTest123!"})
        console.log(res);

        this.setState({
            status:res.data.status,
            roll:res.data.role,
        }
        )
    }
    

    render()
     {
        return(
            <div>  
        <h1 className="rubrik">Logga in</h1>

        <Card bg="info" text="white" className="mb-3"style={{color:`#000`, width: '20rem' }}>
          
           <Card.Body>
           <Button variant="light" onClick={this.logIn}>Logga dig in</Button>
                <h3>{this.state.status}</h3>
                <h3>{this.state.roll}</h3>

                <Form onSubmit={this.logIn}>
                    <Form.Group onSubmitCapture= {this.logIn}>
                        <Form.Text >
                            Logga in för att fortsätta
                        </Form.Text>
                        <Form.Control type="text" name="userName" placeholder="Skriv in ditt användarnamn"/>
                        <br></br>
                        <Form.Control type="text" name="password" placeholder="Skriv in ditt lösenord"/>
                    </Form.Group>
                    <Button type="submit" variant="light">Logga in</Button>
                </Form>
                    <br></br>
                    <h3>{this.state.status}</h3>
                    <h3>{this.state.roll}</h3>
               
           </Card.Body>
        </Card>
            </div>
        )  
     } 

}
export default login;