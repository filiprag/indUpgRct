import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Table, CardDeck, Row, Col } from "react-bootstrap";

const api = axios.create({
  baseURL:
    "https://thingproxy.freeboard.io/fetch/http://api.fortnitetracker.com/v1/store",
  headers: {
    "TRN-Api-Key": "6fb87b36-3730-40d9-8355-b0a3d91adb16", /* API key skickas med för att få lov att hämta datan */
  },
});

class fortniteStore extends Component {
  state = {
    storeInfo: [],
  };

  constructor() {
    super();
    this.getStoreInfo();
  }

  getStoreInfo = async () => {
    let data = await api.get("/").then(({ data }) => data);
    this.setState({ storeInfo: data });
  };

  render() {
    return (
      <div>
        <h1 className="rubrik">I butiken idag</h1>
        <Row>
          {this.state.storeInfo.map((storeItem) => {
            return (
              <Col sm={3} md={3} lg={3} /* style={{border:"1px solid lime, användes vid utveckling av carden"}} */>
                <Card
                  bg="dark"
                  text="white"
                  className="FortniteShop-main-card my-2"
                >
                  <Card.Header>
                    <h4>{storeItem.name}</h4>
                  </Card.Header>
                  <Card.Img
                    className="CardDeck-Home"
                    src={storeItem.imageUrl}
                    alt="new"
                    className="Home-Card-img"
                  />

                  <Card.Body>
                    <h4>Rarity: {storeItem.rarity}</h4>
                    <h4>Category: {storeItem.storeCategory}</h4>
                    <h4>vBucks: {storeItem.vBucks}</h4>
                  </Card.Body>
                  <Card.Footer>
                    <h4>ManifestId: {storeItem.manifestId}</h4>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default fortniteStore;
