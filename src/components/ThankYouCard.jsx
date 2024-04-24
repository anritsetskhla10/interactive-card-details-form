import styled from "styled-components";
import { StyledButton } from "../styled components/StyledButton";
import Complete from '/images/icon-complete.svg'


export default function ThankYouCard() {

  return (
    <>
    <ThankYouContainer>
    <img src={Complete} alt="complete icon" className="completeImg" />
    <h1>THANK YOU!</h1>
    <p>We’ve added your card details</p>
    <StyledButton>Continue</StyledButton>
    </ThankYouContainer>
    
    </>

  )
}



const ThankYouContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 82px;

    .completeImg{
        width: 80px;
        height: 80px;
        margin-bottom: 35px;

    }

    h1{
        font-size: 28px;
        font-weight: 500;
        letter-spacing: 3.42px;
        color: #21092f;
        margin-bottom: 16px;
    }

    p{
        font-size: 18px;
        font-weight: 500;
        color: #8f8694;
        margin-bottom: 48px;
    }


    @media only screen and (min-width:1440px){
        padding: 0;
    }


`
