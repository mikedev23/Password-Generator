import React, { useState } from 'react'
import './App.css'

const characters = [
  'A',
  'B',
  'C',
  ...'Z',
  'a',
  'b',
  'c',
  ...'z',
  '0',
  '1',
  '2',
  ...'9',
  '~',
  '`',
  '!',
  '@',
  '#',
  ...'/'
]

function getRandomCharacter () {
  const randomChar = Math.floor(Math.random() * characters.length)
  return characters[randomChar]
}

function App () {
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [showPasswordLabels, setShowPasswordLabels] = useState(true)

  function generateRandomPasswords () {
    let randomPassword1 = ''
    let randomPassword2 = ''

    for (let i = 0; i < 12; i++) {
      randomPassword1 += getRandomCharacter()
      randomPassword2 += getRandomCharacter()
    }

    setPassword1(randomPassword1)
    setPassword2(randomPassword2)

    setShowPasswordLabels(false)
  }

  return (
    <div id='root'>
      <div className='container'>
        <header id='header-title'>
          Generate a
          <br />
          <span style={{ color: 'rgb(255, 116, 66)' }}>random password</span>
        </header>
        <p id='subtext'>Never use an insecure password again.</p>
        <div className='btn-container'>
          <button className='btn-text' onClick={generateRandomPasswords}>
            Generate Passwords
          </button>
        </div>
        <div className='border'></div>
        <section className='password-container'>
          <div className='password-box'>
            {showPasswordLabels && <h3>Password #1</h3>}
            <button className='btn-text-one'>{password1}</button>
          </div>
          <div className='password-box'>
            {showPasswordLabels && <h3>Password #2</h3>}
            <button className='btn-text-two'>{password2}</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
