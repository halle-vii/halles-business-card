import { useState, useRef } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const audioRef = useRef(null)

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // restart sound
      audioRef.current.play()
    }
  }

  return (
    <>
      <img
        src="/images/pooh-winnie-the-pooh.gif"
        width="50px"
        id="pooh"
        alt="Pooh"
      />
      <main className="parent">
        <header>
          <img
            src="/images/mifoi.png"
            width="50px"
            onMouseEnter={playSound}
            alt="Logo"
          />
          <audio
            ref={audioRef}
            src="/zapsplat_multimedia_button_click_fast_wooden_organic_004_78838.mp3"
          />
          <span>hey! it's halle ◡̈</span>
        </header>

        <section className="main">
          <div className="info">
            <h1>Alyssa Villegas</h1>
            <p>
              Halle is a Front End Developer with strong skills in Java, HTML,
              CSS, React, and a creative background in art and design.
              Experienced with illustrative tools to bring elegant, functional,
              and visually striking interfaces to life.
            </p>
          </div>

          <div className="image-group">
            <img src="/images/P7100439.jpg" width="50px" alt="Halle" />
            <span>Frontend Dev, Cheese Connoisseur</span>
          </div>
        </section>

        <a
          href="mailto:hallevillegas28@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="comic-button email" onMouseEnter={playSound}>
            <img src="/images/envelope.png" width="40px" alt="Email" />
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/alyssa-vii/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="comic-button linkedin" onMouseEnter={playSound}>
            <img src="/images/linkedin.png" width="40px" alt="LinkedIn" />
          </button>
        </a>

        <a
          href="https://www.instagram.com/halle.vii/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="comic-button instagram" onMouseEnter={playSound}>
            <img src="/images/heart.png" width="40px" alt="Instagram" />
          </button>
        </a>
      </main>
    </>
  )
}

export default App
