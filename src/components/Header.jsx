import { HeaderStyle } from "../styled components/HeaderStyle";

import CardBack from '/images/bg-card-back.png';
import CardFront from '/images/bg-card-front.png';
import CardLogo from '/images/card-logo.svg'



export default function Header({cardData}) {


  return (
    
    <HeaderStyle>
    
        <div className="back">
            <img className="BackImg" src={CardBack} alt="card back image" />
            <span className="CardCode">{cardData.cvc ? cardData.cvc : "000"}</span>
        </div>
        <div className="front">
            <img className="frontImg" src={CardFront} alt="card front image" />
            <img className="logo" src={CardLogo} alt="card logo" />

            <p className="CardNumber">{cardData.cardNumber ? cardData.cardNumber : "0000 0000 0000 0000"}</p>
            <span className="CardName">{cardData.cardholder ? cardData.cardholder :"JANE APPLESEED"}</span>
            <span className="CardDate">{cardData.month ? cardData.month : "00"}/{cardData.year ? cardData.year :'00'}</span>
        </div>
  
    </HeaderStyle>
    
  )
}
