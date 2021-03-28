import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class editArena extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      arenaNamn: "",
      stad: "",
      landsKod: "",
      kapacitet: "",
      statusText: "",
      status: "",
      statusAfter: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();

    let res = axios
      .put("http://localhost:5000/api/Arenas/" + this.state.id, this.state)
      .then((res) => {
        console.log(res);
        if ((this.state.status = 204)) {
          this.setState({
            statusAfter: "Registrering lyckades",
            status: res.status,
          });
          alert("Registrering av arena lyckades");
        } else if ((this.state.status = !204)) {
          this.setState({
            statusAfter: "Uppdatera misslyckades",
            status: res.status,
          });
          alert("Uppdatera arena misslyckades");
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          statusAfter: "Misslyckades uppdatera",
          status: res.status,
        });
        alert("Misslyckades uppdatera");
      });
  };

  render() {
    const { id, arenaNamn, stad, landsKod, kapacitet } = this.state;
    return (
      <div>
        <h1 className="rubrik">Ändra föjande arena</h1>

        <Card
          bg="dark"
          text="white"
          className="mb-3"
          style={{ color: `#000`, width: "20rem" }}
        >
          <Card.Body>
            <Card.Title>Arena ändrare</Card.Title>
            <Form onSubmit={this.submitHandler}>
              <Form.Group>
                <Form.Text>Ändra fält för aktiv arena</Form.Text>
                <div>
                  <Form.Control
                    type="text"
                    name="id"
                    value={id}
                    onChange={this.changeHandler}
                    placeholder="Arena Id"
                  />
                </div>
                <br />

                <div>
                  <Form.Control
                    type="text"
                    name="arenaNamn"
                    value={arenaNamn}
                    onChange={this.changeHandler}
                    placeholder="Arena namn"
                  />
                </div>
                <br />
                <div>
                  <Form.Control
                    type="text"
                    name="stad"
                    value={stad}
                    onChange={this.changeHandler}
                    placeholder="Stad"
                  />
                </div>
                <br />
                <div>
                  <Form.Control
                    type="text"
                    name="landsKod"
                    value={landsKod}
                    onChange={this.changeHandler}
                    placeholder="Landskod"
                  />
                </div>
                <br />
                <div>
                  <Form.Control
                    type="text"
                    name="kapacitet"
                    value={kapacitet}
                    onChange={this.changeHandler}
                    placeholder="Kapacitet"
                  />
                </div>
                <br />
                <Button type="submit" variant="success">
                  Spara arena
                </Button>
                <Button style={{ marginLeft: "10px" }} variant="danger">
                  <Link className="text-link" to="/arenor">
                    Tillbaka
                  </Link>
                </Button>
                <br />
                <h3 style={{ marginTop: "3px" }}>{this.state.statusAfter}</h3>
                <br />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default editArena;
