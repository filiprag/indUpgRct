import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card } from "react-bootstrap";

class loginHotell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      roll: "",
      status: false,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();

    let res = axios
      .post(
        "https://thingproxy.freeboard.io/fetch/http://informatik10.ei.hv.se/UserService/Login",
        this.state
      )
      .then((res) => {
        console.log(res);
        this.setState({
          status: res.data.status,
        });
        console.log(this.state.status);
        if (this.state.status == true) {
          this.setState({
            statusAfter: "Inloggniingsuppgifter verifierade",
            roll: res.data.role,
          });
          alert("Inloggniingsuppgifter verifierade");
        } else if (this.state.status == false) {
          this.setState({
            statusAfter: "Inloggning inte godkänd",
          });
          alert("Inloggning inte godkänd");
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          statusAfter: "Inloggning misslyckades",
          status: res.status,
        });
        alert("Inloggning misslyckades");
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1 className="rubrik">Logga in</h1>
        
        <Card
          bg="dark"
          text="white"
          className="mb-3"
          style={{ color: `#000`, width: "20rem" }}
        >
          <Card.Body>
            <Card.Title>Logga in på hotellet</Card.Title>
            <Form onSubmit={this.submitHandler}>
              <Form.Group>
                <Form.Text>
                  Logga in med inloggningsuppgifter för admin
                </Form.Text>

                <div>
                  <Form.Control
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.changeHandler}
                    placeholder="Skriv in ditt användarnamn"
                  />
                </div>
                <br />
                <div>
                  <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.changeHandler}
                    placeholder="Skriv in ditt lösenord"
                  />
                </div>
                <br />
                <Button type="submit" variant="success">
                  Logga in
                </Button>
                <br />

                <h3 style={{ marginTop: "5px" }}>{this.state.roll}</h3>
                <h3 style={{ marginTop: "5px" }}>{this.state.statusAfter}</h3>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default loginHotell;
