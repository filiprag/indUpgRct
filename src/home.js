import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck, Dropdown, DropdownButton } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="rubrik_home_div">
        <h1 className="rubrik_home">Välkommen</h1>
      </div>
      <CardDeck className="CardDeck-Home">
        <Card className="Home-main-card">
          <Card.Img src="/Covid1.jpg" alt="Covid" className="Home-Card-img" />
          <Card.Body>
            <Card.Title>COVID19</Card.Title>
            <Card.Text>
              Här kan du se uppdaterad information om COVID sprindnigen
            </Card.Text>
            <DropdownButton
              variant="dark"
              id="dropdown-basic-button"
              title="Covid-Info"
            >
              <Dropdown.Item href="/covid">Gobalt</Dropdown.Item>
              <Dropdown.Item href="/covidCountry">Per land</Dropdown.Item>
            </DropdownButton>
          </Card.Body>
        </Card>
        <Card className="Home-main-card">
          <Card.Img src="hotel1.jpg" alt="Hotell" className="Home-Card-img" />
          <Card.Body>
            <Card.Title>Hotel SeaSharp</Card.Title>
            <Card.Text>Använd dig av funktioner från hotellet</Card.Text>
            <DropdownButton
              variant="dark"
              id="dropdown-basic-button"
              title="Hotel-Funktioner"
            >
              <Dropdown.Item href="/Users">Admin konton</Dropdown.Item>
              <Dropdown.Item href="/loginHotell">Logga in</Dropdown.Item>
            </DropdownButton>
          </Card.Body>
        </Card>
        <Card className="Home-main-card">
          <Card.Img
            src="fortnite1.jpg"
            alt="Fortnite"
            className="Home-Card-img"
          />
          <Card.Body>
            <Card.Title>Fortnite butiken</Card.Title>
            <Card.Text>Spana in vad du kan spendera dina Vbuks på</Card.Text>
            <DropdownButton
              variant="dark"
              id="dropdown-basic-button"
              title="Till shopen"
            >
              <Dropdown.Item href="/fortniteStore">Visa rutnät</Dropdown.Item>
              <Dropdown.Item href="/fortniteStoreList">
                Visa i lista
              </Dropdown.Item>
            </DropdownButton>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Home;
