import { useState } from 'react'
import './App.css'

import languages from './db/languages'


function App() {
  const [active, setActive] = useState(0)

  function handleClick(e) {

  }


  return (
    <>
      <div className="container">
        <h1>Learn Web development</h1>
        <section>
          <ul>
            {languages.map(language => <li key={language.id}>{language.title}</li>)}
          </ul>
          <div className="card">
            <h3>{languages[0].title}</h3>
            <p>{languages[0].description}</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
