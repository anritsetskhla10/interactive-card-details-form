import styled from "styled-components";
import Form from "./Form";
import Header from "./Header";
import ThankYouCard from "./ThankYouCard";
import { useState } from "react";






export default function MainCard() {

  const [cardData, setCardData] = useState(
    {
      cardholder: '',
      cardNumber: '',
      month: '',
      year: '',
      cvc: ''
    })

  const [errors , setErrors] = useState({
    cardholder: '',
      cardNumber: '',
      month: '',
      year: '',
      cvc: ''
  })

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    let errorMessage = '';

    switch (id) {
        case 'cardNumber':
            const regex = /^\d{4} \d{4} \d{4} \d{4}$/.test(value)
            errorMessage = regex ? '' : 'Wrong format, numbers only';
            break;
        case 'cardholder':
        case 'month':
        case 'year':
        case 'cvc':
            errorMessage = value.trim() !== '' ? '' : "Can’t be blank";
            break;
        default:
            break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [id]: errorMessage }));

    if (errorMessage === '' && id !== 'cardholder') {
      setCardData(prev => ({ ...prev, [id]: value }));
  } else {
      setCardData(prev => ({ ...prev, [id]: value.toUpperCase() }));
  }
}

const [sayThank, setSayThank] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault();
    
    const noErrors = Object.values(errors).every(error => error === "");
    const isFormFilled = Object.values(cardData).every(value => value.trim() !== "");

    if (noErrors && isFormFilled) {
        setSayThank(true);
    } else {
        setSayThank(false);
    }
}


  return (
    <FlexContainer>
    <Header cardData={cardData} />
    {
      sayThank ? <ThankYouCard /> : (
        <Form 
            cardData={cardData} 
            handleChange={handleChange} 
            errors={errors} 
            handleSubmit={handleSubmit} 
        />)
    }
    </FlexContainer>
  )
}


const FlexContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

  @media only screen and (min-width:1440px) {
          flex-direction: row;
            
  }

`
