import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import { login, logout } from "./utils";
import { Container, Row, } from "react-bootstrap";
import MintingTool from "./Components/MintingTool";
import InfoBubble from "./Components/InfoBubble";
import "bootstrap/dist/css/bootstrap.min.css";


import getConfig from "./config";
const { networkId } = getConfig("development");

export default function App() {
  const [userHasNFT, setuserHasNFT] = useState(false);


  useEffect(() => {
    const receivedNFT = async () => {
      if (window.accountId !== "") {
        setuserHasNFT(
          await window.contract.nft_token({
            token_id: `${window.accountId}-kiss`
          })
        );
      }
    };
    receivedNFT();
  }, []);
  return (
    <React.Fragment>
      <div style={{ minHeight: '100vh',  background: '#efff006b'}}>
        <div className="d-flex align-items-center justify-content-between px-3">
        <a  
          style={{ cursor: 'pointer', fontWeight: 'bold'}}
          className={ window.walletConnection.isSignedIn() ? 'text-danger': "text-info"}
          onClick={window.walletConnection.isSignedIn() ? logout : login}
        >
          {window.walletConnection.isSignedIn() ? "Logout" : "Login"}
        </a>
        <span className="text-info">{window.accountId}</span>
      </div>
      <Container >
        {" "}
        {window.walletConnection.isSignedIn() ? 
        <Row>
          <MintingTool userNFTStatus={userHasNFT} />
        </Row>
        : 
        <Row>
          <InfoBubble />
        </Row>
        }
      </Container>
      </div>
      
    </React.Fragment>
);
}