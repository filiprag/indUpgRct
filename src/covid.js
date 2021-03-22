import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';

class Covid extends Component
{
    state={
        cases:"",
        deaths:"",
        recovered:""
    }
    componentDidMount(){
        axios.get(`https://coronavirus-19-api.herokuapp.com/all`).then(res=>{
            this.setState({
                cases:res.data.cases,
                deaths:res.data.deaths,
                recovered:res.data.recovered,  
            }
            )
        })
    }

    render()
     {
        return(
            <div>
                 <h1 className="rubrik">Covid iformation globalt</h1>
        <Card bg="dark" text="white" className="mb-3"style={{color:`#000`, width: '20rem' }}>
           
           <Card.Body>
               <Card.Title>
                   Covid statestik från idag
               </Card.Title>
               
               <p>Fall: {this.state.cases}</p> 
                <p>Döda: {this.state.deaths}</p> 
                <p>Tillfrisknade: {this.state.recovered}</p> 
             
            
           </Card.Body>
        </Card>
               
                <table className="centralt-table">
                    <thead>
                        <tr>
                            <th>Fall</th>
                            <th>Döda</th>
                            <th>Tillfrisknade</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                             <td>{this.state.cases}</td>
                             <td>{this.state.deaths}</td>
                             <td>{this.state.deaths}</td>
                            </tr>
            </tbody>
            </table>

            
            </div>
        )  
     } 
}
export default Covid;

