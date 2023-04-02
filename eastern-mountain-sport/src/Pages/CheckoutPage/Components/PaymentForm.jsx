import React, { useState } from 'react';
import styled from 'styled-components';
import ProductSuccessAlert from './ProductSuccessAlert';

function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('1234');
  const [cardName, setCardName] = useState('Vinod Hadmode');
  const [cardExpiry, setCardExpiry] = useState('2024');
  const [cardCVC, setCardCVC] = useState('375');

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleCardExpiryChange = (event) => {
    setCardExpiry(event.target.value);
  };

  const handleCardCVCChange = (event) => {
    setCardCVC(event.target.value);
  };

  function myFunction() {
    alert("I am an alert box!");
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    myFunction()
  }
  return (
    <div>

      <Form action="">
        <h1>Payment Method</h1> <br />
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />

        <label htmlFor="cardName">Card Name</label>
        <input
          type="text"
          id="cardName"
          value={cardName}
          onChange={handleCardNameChange}
        />

        <label htmlFor="cardExpiry">Card Expiry</label>
        <input
          type="text"
          id="cardExpiry"
          value={cardExpiry}
          onChange={handleCardExpiryChange}
        />

        <label htmlFor="cardCVC">Card CVC</label>
        <input
          type="text"
          id="cardCVC"
          value={cardCVC}
          onChange={handleCardCVCChange}
        />

        <ProductSuccessAlert />
      </Form>
    </div>
  );
}

export default PaymentForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 20px;
  background-color:  #f8eeee;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
  border-radius: 10px;
  width: 50%;
  margin: 30px auto;
  border: 2px solid gray;


  input {
    border: 1px solid gray;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
  button {
    background-color: #357229;
    padding: 5px;
    width: 50%;
    display: flex;
    justify-content: center;
    margin: auto;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #8de6b5;
    }
  }
`;