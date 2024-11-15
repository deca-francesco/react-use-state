import { useState } from 'react'
import './App.css'

import languages from './db/languages'


function App() {
  const [active, setActive] = useState(null)

  function handleClick(e) {

    const newActive = Number(e.target.getAttribute("data-index"))
    console.log(newActive);

    setActive(newActive)
  }

  // if (active == null) {
  //   const cardSectionEl = document.querySelector(".cardSection")
  //   cardSectionEl.innerHTML = `<h3>Nessun linguaggio selezionato</h3>`

  // }

  return (
    <>
      <div className="container">
        <h1>Learn Web development</h1>

        <section className='buttonsSection'>
          <ul>
            {languages.map((language, index) => (
              <li >
                <button onClick={handleClick} data-index={index}
                  className={active === index ? "button active" : "button not_active"}>{language.title}</button>
              </li>
            ))}
          </ul>
        </section>

        <section className={active == null ? 'card default' : "card hidden"}>
          <h3>Nessun linguaggio selezionato</h3>
        </section>

        <section className='cardSection'>
          {languages.map((language, index) => (
            <div className={active === index ? "card active" : "card hidden"} id='cardId'>
              <h3>{language.title}</h3>
              <p>{language.description}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default App
