import React from "react";

const InfoBubble = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Wellcome to NEAR</h1>
      <img style={{height: '500px'}} src="https://bafybeigdvbnpnfwbnlwdnm5u4vuoneci3asmgdiw6y6anndcafvv65oebi.ipfs.nftstorage.link/" />
      <p>Hello, I'm NFT Bear and mint me!</p>
    </div>
  );
};

InfoBubble.propTypes = {};

export default InfoBubble;
