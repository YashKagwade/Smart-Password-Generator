import { useCallback, useState } from 'react'
import * as st from './Styling'

function Card() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumber] = useState(false)
  const [charAllowed, setChars] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <st.GlobalStyle />
      <st.MainContainer>
        <st.WebHeading>Smart Password Generator</st.WebHeading>
        
        <st.PasswordBox>
          <st.PasswordInput
            type='text'
            value={password}
            placeholder='Password'
            readOnly
          />
          
          <st.Controls>
            <st.LengthControl>
              <label>Length: {length}</label>
              <input
                type="range"
                min="4"
                max="32"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </st.LengthControl>
            
            <st.CheckboxGroup>
              <st.CheckboxLabel>
                <input
                  type="checkbox"
                  checked={numberAllowed}
                  onChange={() => setNumber(prev => !prev)}
                />
                Numbers
              </st.CheckboxLabel>
              
              <st.CheckboxLabel>
                <input
                  type="checkbox"
                  checked={charAllowed}
                  onChange={() => setChars(prev => !prev)}
                />
                Special Characters
              </st.CheckboxLabel>
            </st.CheckboxGroup>
            
            <st.GenerateButton onClick={passwordGenerator}>
              Generate Password
            </st.GenerateButton>
          </st.Controls>
        </st.PasswordBox>
      </st.MainContainer>
    </>
  )
}

export default Card