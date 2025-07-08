import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: 
      linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)),
      url('Public/images/ptn.png') center/cover fixed;
  
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  background-color: #2d2d2d;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

export const WebHeading = styled.h1`
  color: #f0f0f0;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

export const PasswordBox = styled.div`
  background-color: #0b0808;
  border: 2px solid yellow;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #444;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const LengthControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input[type="range"] {
    width: 100%;
    height: 8px;
    -webkit-appearance: none;
    background: #444;
    border-radius: 5px;
    outline: none;
    
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #646cff;
      cursor: pointer;
    }
  }
`;
export const Label=styled.label`
  color: ;
`;
export const CheckboxGroup = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const GenerateButton = styled.button`
  padding: 0.8rem;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #535bf2;
  }
`;

