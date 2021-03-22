import React,{Component} from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL:'https://coronavirus-19-api.herokuapp.com/all'
})

class users extends Component
{
    state={
        cases:"",
        deaths:"",
        recovered:""
    }
    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data)
           
            this.setState({
                cases:res.data.cases,
                deaths:res.data.deaths,
                recovered:res.data.recovered,  
            }
            )
        })
    }


    /*
    state={
        userLista:[]
    }
    componentDidMount()
    {
        axios.get('informatik10.ei.hv.se/UserService/Users').then(res=>
        {
            console.log(res.data)  
            this.setState({
                userLista:res.data
            })
        })
    }
    */


    render()
     {
        return(
            <div>
                <h1 className="rubrik">Konton från hotell</h1>
               
                <h3>{this.state.cases}</h3>
                <h3>{this.state.deaths}</h3>
                <h3>{this.state.deaths}</h3>


            </div>
        )  

     } 

}
export default users;