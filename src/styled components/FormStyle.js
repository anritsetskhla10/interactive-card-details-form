import styled from "styled-components";




const FormStyle = styled.form`
    padding: 0 24px 45px;
    display: flex;
    flex-direction: column;

    .inputContainer{
        display: flex;
        flex-direction: column;
        gap: 9px;
        margin-bottom: 20px;
    }

    label{
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 2px;
        color: #21092f;
    }

    #cardholder , #cardNumber{
        width: 327px;
        padding: 11px 0 11px 16px;
        border-radius: 8px;
        background-color: #fff;
        font-size: 18px;
        font-weight: 500;
        color: #21092f;
    }

    #cardholder{
        border: ${(props) => !props.$error.cardholder ?  "solid 1px #dfdee0" : "solid 1px #ff5050"};
    }

    #cardNumber{
        border: ${(props) => !props.$error.cardNumber ?  "solid 1px #dfdee0" : "solid 1px #ff5050"};
    }

    .dateContainer{
        display: flex;
        flex-direction: row;
        gap: 11px;
        margin-bottom: 28px;
    }

    .common{
        display: flex;
        flex-direction: column;
        gap: 9px;
    }

    #month, #year, #cvc{
        width: 72px;
        font-size: 18px;
        font-weight: 500;
        color: #21092f;
        padding: 11px 0 11px 16px;
        border-radius: 8px;
        background-color: #fff;
    }

    #month{
        border: ${(props) => !props.$error.month ?  "solid 1px #dfdee0" : "solid 1px #ff5050"};
    }

    #year{
        border: ${(props) => !props.$error.year ?  "solid 1px #dfdee0" : "solid 1px #ff5050"};
    }

    #cvc{
        width: 164px;
        border: ${(props) => !props.$error.cvc ?  "solid 1px #dfdee0" : "solid 1px #ff5050"};
    }
    

    .dateInput{
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    }

    .error{
        font-size: 12px;
        font-weight: 500;
        color: #ff5050;
    }
    


    @media only screen and (min-width:1440px) {
        
    padding: 0 ;

    .inputContainer{
        margin-bottom: 26px;
    }


    #cardholder , #cardNumber{
        width: 381px;
    }

    .dateContainer{
        gap: 20px;
        margin-bottom: 40px;
    }


    #month, #year{
        width: 80px;
    }

    #cvc{
        width: 191px;
    }

    .dateInput{
        gap: 10px;
    }

    #cardholder:active,
    #CardNumber:active, 
    #month:active,
    #year:active,
    #cvc:active{
        border: 1px solid linear-gradient(112deg, #6348fe -27%, #610595 5%) ;
       
    }


    }


`



export { FormStyle }