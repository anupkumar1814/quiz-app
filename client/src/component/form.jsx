import React, { useState } from 'react';
import styled from 'styled-components';
import { SetSelectedGame_ } from '../service/api';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  border: 1px solid;
  width: 30%;
  margin:auto;
  margin-top: 50px;
  height: 350px;
  background-color: white; /* Corrected background color */
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  margin-bottom: 5px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 2px;
  font-weight: bold; /* Make the label bold */
  color: #000; /* Set the color to dark black */
`;
const Input = styled.input`
  width: 200px;
  padding: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 200px;
  padding: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: -32px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 102px;
    height: 40px;
    border-radius: 7px;
    background-color: rgb(30 214 8);
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

function Form() {
  const [username, setUsername] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showErrorUsername, setShowErrorUsername] = useState(false);
  const [showErrorSports, setShowErrorSports] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!selectedGame) {
      setShowErrorSports(true);
      setTimeout(() => {
        setShowErrorSports(false);
      }, 2000);
    }
    if (!username) {
      setShowErrorUsername(true);
      setTimeout(() => {
        setShowErrorUsername(false);
      }, 2000);
    }

    if (selectedGame && username) {
      setSubmitted(true);
      const data = {
        username: username,
        selectedGame: selectedGame
      };
      await SetSelectedGame_(data); // Call the function to submit form data
      setTimeout(() => {
        setSubmitted(false);
        setSelectedGame('');
        setUsername('');
      }, 3000);
    }
  };

  const gameOptions = [
    { value: 'Cricket', label: 'Cricket' },
    { value: 'Football', label: 'Football' },
    { value: 'Basketball', label: 'Basketball' },
    { value: 'Soccer', label: 'Soccer' }
  ];

  return (
    <Container>
      <Title>Favorite Game Quiz</Title>
      <StyledForm onSubmit={handleSubmit}>
        <div style={{    marginBottom: 20}}>
          <Label htmlFor="username">Username:</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          {showErrorUsername && <ErrorMessage>Please enter your username.</ErrorMessage>}
        </div>
        <div style={{    marginBottom: 40}}>
          <Label htmlFor="gameSelect">Which is your favorite game?</Label>
          <Select
            id="gameSelect"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            <option value="">Select a game...</option>
            {gameOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {showErrorSports && <ErrorMessage>Please select your favorite sports.</ErrorMessage>}
        </div>
        <Button type="submit">Submit</Button>
      </StyledForm>
      {submitted && selectedGame && (
        <p>Hey {username}, your favorite game is {selectedGame}.</p>
      )}
    </Container>
  );
}

export default Form;
