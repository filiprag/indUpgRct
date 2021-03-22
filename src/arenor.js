import React,{Component} from 'react'
import axios from 'axios'
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
                <h1 className="rubrik">Fotbollsarenor från API </h1>
                <table className="centralt-table ">
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
            </table>
            </div>
        )  

     } 

}
export default Arenor;