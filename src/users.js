import React,{Component} from 'react'
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Table} from 'react-bootstrap';

const api = axios.create({
    baseURL:'https://thingproxy.freeboard.io/fetch/http://informatik10.ei.hv.se/UserService/Users'
})

class users extends Component
{
    state = {
        users: []
    }
    constructor(){
        super();
        this.getUsers();
    }

    getUsers = async () =>{
        let data = await api.get('/').then(({ data }) => data);
        this.setState({ users: data})
    }

    render()
     {
        return(
            <div>
                
                {/* { this.state.users.map(user => <h2>{user.id}</h2>)} */}

                <h1 className="rubrik">Aktiva adminkonton från hotell</h1>
                <Card bg="dark" text="white" border="light" className="mb-3"style={{color:`#000`, width: '65rem' }}>
           <Card.Body>
           <Table  hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Namn</th>
                            <th>Användarnamn</th>
                            <th>Adress</th>
                            <th>Stad</th>
                            <th>Postnummer</th>
                            <th>Telefonnummer</th>
                            <th>Roll</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(user=>{
                    return(
                            // <tr key="user.id">
                             <tr >
                             <td>{user.id}</td>
                             <td>{user.name}</td>
                             <td>{user.userName}</td>
                             <td>{user.streetNo}</td>
                             <td>{user.city}</td>
                             <td>{user.zipCode}</td>
                             <td>{user.phoneNumber}</td>
                             <td>{user.roles}</td>
                            </tr>
                    )
                })}
            </tbody>
            </Table>
            </Card.Body>
        </Card>

            </div>
        )  

     } 

}
export default users;