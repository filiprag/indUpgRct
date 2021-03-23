import React,{Component} from 'react'
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Table} from 'react-bootstrap';

class Arenor extends Component
{
    state={
        arenorlista:[]
    }
    componentDidMount()
    {
        axios.get('http://localhost:5000/api/Arenas').then(res=>
        {
            console.log(res.data)  
            this.setState({
                arenorlista:res.data
            })
        })
    }
    render()
     {
        return(
            <div>
                <h1 style={{color: "#363535"}}className="rubrik">Fotbollsarenor</h1>
                <Card bg="dark" text="white" border="light" className="mb-3"style={{color:`#000`, width: '52rem' }}>
           <Card.Body>
                
           <Table hover variant="dark">
                    <thead>
                        <tr>
                            <th>Nr</th>
                            <th>Namn</th>
                            <th>Stad</th>
                            <th>Landskod</th>
                            <th>Kapacitet</th>
                        </tr>
                    </thead>
                    <tbody>
                {this.state.arenorlista.map(arena=>{
                    return(
                        
                            <tr>
                             <td>{arena.id}</td>
                             <td>{arena.arenaNamn}</td>
                             <td>{arena.stad}</td>
                             <td>{arena.landsKod}</td>
                             <td>{arena.kapacitet}</td>
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
export default Arenor;