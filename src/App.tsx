import React, { useState } from "react";
import "./App.css";
import { Button, Typography, Paper, Stack, TextField } from "@mui/material";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [binaryResult, setBinaryResult] = useState<string>("");

  const decimalToBinary = (input: number): string => {
    if (input === 0 || input === 1) {
      return String(input);
    } else {
      return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
  };

  const checkUserInput = () => {
    if (!inputValue || isNaN(parseInt(inputValue))) {
      alert("Please provide a decimal number");
      return;
    }
    setBinaryResult(decimalToBinary(parseInt(inputValue)));
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" fontSize={50}>
          Decimal to Binary Converter
        </Typography>
      </header>
      <Stack direction={"column"} justifyContent="center" alignItems="center">
        <Stack
          spacing={2}
          m={2}
          direction={"row"}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2" fontSize={"medium"}>
            Enter a decimal number:
          </Typography>
          <TextField
            label="Decimal"
            variant="outlined"
            value={inputValue}
            type="number"
            name="decimal number input"
            id="number-input"
            className="number-input"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button variant="contained" id="convert-btn" onClick={checkUserInput}>
            Convert
          </Button>
        </Stack>
        <Paper
          elevation={3}
          className="binary-output"
          sx={{
            m: 2,
            p: 2,
            width: 100,
            fontFamily: "share tech mono",
            fontSize: "1.5rem",
          }}
        >
          <p id="result">{binaryResult}</p>
        </Paper>
      </Stack>
    </div>
  );
}

export default App;
