import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Button} from 'react-bootstrap';

function Home() {
    return (
      <div>
       <h1>Startsidan - Välkommen</h1>
       <Card className="mb-3"style={{color:`#000`, width: '20rem' }}>
           <Card.Img src="https://picsum.photos/200/100" />
           <Card.Body>
               <Card.Title>
                   Fin bild detta
               </Card.Title>
               <Card.Text>
                   Bilden är från en otroligt begåvad fotograf
               </Card.Text>
               <Button variant="info">Läs mera</Button>
            
           </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default Home;