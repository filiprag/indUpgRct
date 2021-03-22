import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Card} from 'react-bootstrap';

class covidCountry extends Component
{
    state={
        country:'',
        cases:'',
        todayCases:'',
        deaths:'',
        todayDeaths:'',
        recovered:'',
        active:'',
        critical:'',
        casesPerOneMillion:'',
        deathsPerOneMillion:'',
        totalTests:'',
        testsPerOneMillion:'',
    }
    getCovidCountry=(e)=>{
        e.preventDefault();
        
        const country = e.target.elements.country.value
        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`).then(res=>{
            this.setState({
                country:res.data.country,
                cases:res.data.cases,
                todayCases:res.data.todayCases,  
                deaths:res.data.deaths,
                todayDeaths:res.data.todayDeaths,
                recovered:res.data.recovered,  
                active:res.data.active,
                critical:res.data.critical,
                casesPerOneMillion:res.data.casesPerOneMillion,  
                deathsPerOneMillion:res.data.deathsPerOneMillion,
                totalTests:res.data.totalTests,
                testsPerOneMillion:res.data.testsPerOneMillion,  
            }
            )
        })
    }

    render()
     {
        return(
            <div>
                <h1 className="rubrik">COVID per land</h1>
                <Card bg="dark" text="white" className="mb-3"style={{color:`#29A3E`, width: '30rem' }}>
                    <Card.Body>
               <Card.Title>
               Skriv in ett land för att få COVID19 informaton för aktuellt land
               </Card.Title>
               <Form onSubmit={this.getCovidCountry}>
                    <Form.Group>
                        {/* <Form.Text className="text-muted">
                            Skriv in ett land för att få COVID19 informaton för aktuellt land
                        </Form.Text> */}
                        <Form.Control type="text" name="country" placeholder="Skriv in ditt land"/>
                    </Form.Group>
                    <Button type="submit" variant="info">Få information</Button>
                </Form>
                    <br></br>
                    <p>Valt land: {this.state.country}</p>
                    <p>Totala fall: {this.state.cases}</p>
                    <p>Fall idag:  {this.state.todayCases}</p>
                    <p>Totalt döda:  {this.state.deaths}</p>
                    <p>Döda idag:  {this.state.todayDeaths}</p>
                    <p>Tillfrisknade:  {this.state.recovered}</p>
                    <p>Aktiva: {this.state.active}</p>
                    <p>Kritiska:  {this.state.critical}</p>
                    <p>Fall per miljon:  {this.state.casesPerOneMillion}</p>
                    <p>Döda per miljon:  {this.state.deathsPerOneMillion}</p>
                    <p>Totalt testade:  {this.state.totalTests}</p>
                    <p>Testade per miljon:  {this.state.testsPerOneMillion}</p>
            
                       
           </Card.Body>
        </Card>
               
                   
            </div>
        )  
     } 

}
export default covidCountry;