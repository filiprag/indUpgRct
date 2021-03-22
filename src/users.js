import React,{Component} from 'react'
import axios from 'axios'

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
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({ users: res.data})
        })
    }

    render()
     {
        return(
            <div>
                
                {/* { this.state.users.map(user => <h2>{user.id}</h2>)} */}

                <h1 className="rubrik">Konton från hotell</h1>
                <table className="centralt-table">
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
                            <tr>
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
            </table>

            </div>
        )  

     } 

}
export default users;