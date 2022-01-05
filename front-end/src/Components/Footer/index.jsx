import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    const {
      icFacebook,
      icInstagram,
      icTwitter,
      icYoutube,
      text1,
      presse,
      confidentialit,
      nousContacter,
      serviceCode,
      x19972018Netfl,
      autodescription,
      relationsInvestisse,
      informationsLga,
      centreDaide,
      recrutement,
      prfrencesDe,
      cartesCadeaux,
      conditionsDut,
      mentionsLgales,
    } = this.props;

    return (
      <div className="footer">
        <div className="flex-col-6">
          <div className="socials">
            <img className="ic-facebook" src={icFacebook} />
            <img className="ic-instagram" src={icInstagram} />
            <img className="ic-twitter" src={icTwitter} />
            <img className="ic-youtube" src={icYoutube} />
          </div>
          <div className="column-1">
            <div className="text-1 helveticaneue-normal-mountain-mist-14px">{text1}</div>
            <div className="presse helveticaneue-normal-mountain-mist-14px">{presse}</div>
            <div className="confidentialit helveticaneue-normal-mountain-mist-14px">{confidentialit}</div>
            <div className="nous-contacter helveticaneue-normal-mountain-mist-14px">{nousContacter}</div>
          </div>
          <div className="under">
            <div className="btn-code">
              <div className="overlap-group1-1">
                <div className="service-code helveticaneue-normal-mountain-mist-13px">{serviceCode}</div>
                <div className="rectangle-2-1 border-1px-mountain-mist"></div>
              </div>
            </div>
            <p className="x1997-2018-netfl helveticaneue-normal-mountain-mist-11px">{x19972018Netfl}</p>
          </div>
        </div>
        <div className="column-2">
          <div className="autodescription helveticaneue-normal-mountain-mist-14px">{autodescription}</div>
          <div className="relations-investisse helveticaneue-normal-mountain-mist-14px">{relationsInvestisse}</div>
          <div className="informations-lga helveticaneue-normal-mountain-mist-14px">{informationsLga}</div>
        </div>
        <div className="column-3">
          <div className="centre-daide helveticaneue-normal-mountain-mist-14px">{centreDaide}</div>
          <div className="recrutement helveticaneue-normal-mountain-mist-14px">{recrutement}</div>
          <div className="prfrences-de helveticaneue-normal-mountain-mist-14px">{prfrencesDe}</div>
        </div>
        <div className="column-4">
          <div className="cartes-cadeaux helveticaneue-normal-mountain-mist-14px">{cartesCadeaux}</div>
          <div className="conditions-dut helveticaneue-normal-mountain-mist-14px">{conditionsDut}</div>
          <div className="mentions-lgales helveticaneue-normal-mountain-mist-14px">{mentionsLgales}</div>
        </div>
      </div>
    );
  }
}

export default Footer;
