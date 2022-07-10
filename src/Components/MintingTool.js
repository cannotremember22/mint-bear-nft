import React from "react";
import { Button, Alert } from "react-bootstrap";
const BN = require("bn.js");

const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-kiss`,
        metadata: {
          title: "Kiss You",
          description: "Kiss You",
          media:
            "https://bafybeigdvbnpnfwbnlwdnm5u4vuoneci3asmgdiw6y6anndcafvv65oebi.ipfs.nftstorage.link/",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("1000000000000000000000000")
    );
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h1>Wellcome to NEAR</h1>
        <img style={{height: '500px'}} src="https://bafybeigdvbnpnfwbnlwdnm5u4vuoneci3asmgdiw6y6anndcafvv65oebi.ipfs.nftstorage.link/" />
        <Button
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={mintNFT}
            className={props.userNFTStatus || window.accountId === "" ? 'btn-secondary' : 'btn-warning'}
            style={{ width: "200px", marginTop: '20px' }}
          >
            Mint Me
          </Button>
          {props.userNFTStatus ? (
            <Alert style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
              You successfully mint me, Check {" "}
                <a href={"https://wallet.testnet.near.org/?tab=collectibles"} target="_blank">
                  your wallet
                </a>
              </p>
            </Alert>
          ) : null}
      </div>
    </div>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
