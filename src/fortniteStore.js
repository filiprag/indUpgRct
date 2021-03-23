import React,{Component} from 'react'
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Button, Table} from 'react-bootstrap';

const api = axios.create({
    baseURL:'https://thingproxy.freeboard.io/fetch/http://api.fortnitetracker.com/v1/store',
    headers: {
        'TRN-Api-Key': "6fb87b36-3730-40d9-8355-b0a3d91adb16"
    }
})

class fortniteStore extends Component
{
    state = {
        storeInfo: []
    }
    
    constructor(){
        super();
        this.getStoreInfo();
        }
    
    getStoreInfo = async () =>{
        let data = await api.get('/').then(({ data }) => data);
        this.setState({ storeInfo: data})
    }
    
    render()
{
        return(
            <div>
                { this.state.storeInfo.map(storeItem => <h2 >{storeItem.id}</h2>)}
                {/* <h1 className="rubrik">I butiken atm</h1>
                <Card className="mb-3"style={{color:`#000`, width: '20rem' }}>
           <Card.Body>
           {this.state.storeInfo.map(storeItem=>{
                    return(
                        <h1>{storeItem.name}</h1>
                    <p>Fall idag:  {tstoreItem.rarity}</p>
                    )
                })}      
           </Card.Body>
        </Card> */}
         <h1 style={{color: "#363535"}}className="rubrik">I butiken idag</h1>
        <Card bg="dark" text="white" border="light" className="mb-3"style={{color:`#000`, width: '52rem' }}>
           <Card.Body>
           <Card.Title>
                   Uppdaterads dagligen vid 00:00 UTC
               </Card.Title>
               
                <Table hover variant="dark">
                    <thead>
                        <tr>
                        <th>Bild</th>
                            <th>Namn</th>
                            <th>Sälsynthet</th>
                            <th>Kategori</th> 
                            <th>vBucks</th>
                            <th>Manifest</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.storeInfo.map(storeItem=>{
                    return(
                            <tr>
                            <td><img className="photo"src={storeItem.imageUrl}
                             alt="new" /></td>
                             <td>{storeItem.name}</td>
                             <td>{storeItem.rarity}</td>
                             <td>{storeItem.storeCategory}</td>
                             <td>{storeItem.vBucks}</td>
                             <td>{storeItem.manifestId}</td>
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
export default fortniteStore;