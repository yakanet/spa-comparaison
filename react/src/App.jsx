import { useEffect, useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function reset() {
    setFirstName('');
    setLastName('');
  }

  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [lastName, firstName]);

  return (
    <main>
      <h1>Hi, please enter your name:</h1>
      <p>First: <input 
        onChange={ev => setFirstName(ev.target.value)} 
        value={firstName} /></p>
      <p>Last: <input 
        onChange={ev => setLastName(ev.target.value)} 
        value={lastName}/></p>
      <p>{fullName}</p>
      <p><button onClick={reset}>Reset</button></p>
    </main>
  )
}

export default App
