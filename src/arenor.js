import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Card, Table, Button } from "react-bootstrap";

const api = axios.create({
  baseURL: "http://localhost:5000/api/Arenas/",
});
class Arenor extends Component {
  state = {
    arenorlista: [],
    status: "",
    statusAfter: "",
  };

  constructor() {
    super();
    this.getArenor();
  }

  getArenor = async () => {
    let data = await api.get("/").then(({ data }) => data);
    this.setState({ arenorlista: data });
  };

  createArena = async () => {  /* Hårdkodad lägg till arena, Ej aktiv längre */
    let res = await api.post("/", {
      id: 0,
      arenaNamn: "Gamla Ullevi",
      stad: "Göteborg",
      landsKod: "SWE",
      kapacitet: 18416,
    });
    console.log(res);
    this.getArenor();
  };

  deleteArena = async (id) => {
    if (window.confirm("Är du säker du vill radera?")) {
      let data = await api
        .delete("/" + id)
        .then((data) => {
          console.log(data);
          if ((this.state.status = 204)) {
            this.setState({
              statusAfter: "Radering lyckades",
              status: data.status,
            });
            alert("Arena raderad");
          } else if ((this.state.status = !204)) {
            this.setState({
              statusAfter: "Misslyckades radera",
              status: data.status,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            statusAfter: "Misslyckades radera",
            status: data.status,
          });
        });
      console.log(data);
      this.getArenor();
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "#363535" }} className="rubrik">
          Fotbollsarenor
        </h1>
        {/* <Button variant="dark" onClick={this.createArena}>  
        // Hårdkodad lägg till ny arena 
          Lägg till en ny arena (HK)
        </Button> */}
        <Button style={{ marginLeft: "10px" }} variant="dark">
          <Link className="text-link" to="/addArena">
            Lägg till en ny arena{" "}
          </Link>
        </Button>
        <Button style={{ marginLeft: "10px" }} variant="dark">
          <Link className="text-link" to="/editArena/1">
            Ändra en befintlig arena
          </Link>
        </Button>
        <Card
          bg="dark"
          text="white"
          border="light"
          className="mb-3"
          style={{ color: `#000`, width: "52rem" }}
        >
          <Card.Body>
            <Table hover variant="dark">
              <thead>
                <tr>
                  <th>Nr</th>
                  <th>Namn</th>
                  <th>Stad</th>
                  <th>Landskod</th>
                  <th>Kapacitet</th>
                  <th>Ta bort</th>
                  <th>Uppdatera</th>
                </tr>
              </thead>
              <tbody>
                {this.state.arenorlista.map((arena) => {
                  return (
                    <tr>
                      <td>{arena.id}</td>
                      <td>{arena.arenaNamn}</td>
                      <td>{arena.stad}</td>
                      <td>{arena.landsKod}</td>
                      <td>{arena.kapacitet}</td>
                      <td>
                        <Button
                          style={{ border: "none" }}
                          variant="outline-secondary"
                          onClick={() => this.deleteArena(arena.id)}
                        >
                          <img src="trash-fill.svg" alt="Bootstrap" />{" "}
                        </Button>
                      </td>
                      <td>
                        <Button
                          style={{ border: "none" }}
                          variant="outline-secondary"
                        >
                          <Link
                            className="text-link"
                            to={"/editArena/{this.arena.id}"}
                          >
                            <img src="pen-fill.svg" alt="Bootstrap" />{" "}
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
          <h3 style={{ marginTop: "3px" }}>{this.state.statusAfter}</h3>
        </Card>
      </div>
    );
  }
}
export default Arenor;
