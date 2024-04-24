import React from 'react';
import { FormStyle } from '../styled components/FormStyle';
import { StyledButton } from '../styled components/StyledButton';
import InputMask from 'react-input-mask';

export default function Form({cardData, handleChange, errors, handleSubmit}) {

    
    
    return (
        <FormStyle  onSubmit={handleSubmit} $error={errors} >
            <div className='inputContainer'>
                <label htmlFor="cardholder">Cardholder Name</label>
                <input id='cardholder' type="text" placeholder='e.g. Jane Appleseed' onChange={handleChange} maxLength={25} />
                { errors.cardholder &&
                <span className="error">{errors.cardholder}</span>}
            </div>
            <div className='inputContainer'>
                <label htmlFor="cardNumber">Card Number</label>
                <InputMask id='cardNumber' type="text" placeholder='e.g. 1234 5678 9123 0000'  
                onChange={handleChange} value={cardData.cardNumber} mask="9999 9999 9999 9999" maskChar={null}></InputMask>
                {errors.cardNumber &&
                <span className="error">{errors.cardNumber}</span>}
            </div>

            <div className='dateContainer'>
                <div className='common'>
                    <label htmlFor="month">Exp. Date (MM/YY)</label>
                    <div className='dateInput'>
                        <input id='month' type="text" placeholder='MM'  onChange={handleChange}  maxLength={2}  />
                        <input id='year' type="text" placeholder='YY' onChange={handleChange} maxLength={2} />
                    </div>
                    { (errors.month || errors.year) &&
                        <span className="error">{errors.month || errors.year}</span>
                    }
                </div>
                <div className='common'>
                    <label htmlFor="cvc">CVC</label>
                    <input id='cvc' type="text" placeholder='e.g. 123' onChange={handleChange} 
                    minLength={3} maxLength={3} />
                    {errors.cvc &&
                    <span className="error">{errors.cvc}</span>}
                </div>
            </div>

            <StyledButton type='submit'>Confirm</StyledButton>
        </FormStyle>
    );
}