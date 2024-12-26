import { useEffect } from "react"
import "../styles/styleDownCount.css"

export const ComponentDownCount = () => {
    console.log("v2")
    const now = new Date();
    const may5th = new Date(now.getFullYear()+1, 0, 1); // Los meses en JavaScript empiezan en 0, por lo que mayo es 4
    const millisecondsUntilMay4th = may5th.getTime() - now.getTime() + 7200000;

    const countToDate = new Date().setHours(new Date().getHours()) + millisecondsUntilMay4th

    useEffect(() => {
      const interval = setInterval(() => {
        const currentDate = new Date()
        const timeBetweenDates = Math.ceil((countToDate - currentDate.getTime()) / 1000)

        if (countToDate+100 < currentDate.getTime()) {
          clearInterval(interval)
          return 
        }

        flipAllCards(timeBetweenDates)
      
      }, 250)
      return () => clearInterval(interval)
    }, [])
    
    function flipAllCards(time: number) {

        const seconds = time % 60
        const minutes = Math.floor(time / 60) % 60
        const hours = Math.floor(time / 3600) % 24 
        const days = Math.floor(time / 86400)
      
        flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10))
        flip(document.querySelector("[data-days-ones]"), days % 10)
        flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
        flip(document.querySelector("[data-hours-ones]"), hours % 10)
        flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
        flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
        flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
        flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
      }
    
    function flip(flipCard: Element | null, newNumber: number) {
      if (!flipCard) return
      const topHalf = flipCard.querySelector(".top")
      const startNumber = parseInt(topHalf?.textContent || '0')
      if (newNumber === startNumber) return
      const bottomHalf = flipCard.querySelector(".bottom")
      const topFlip = document.createElement("div")
      topFlip.classList.add("top-flip")
      const bottomFlip = document.createElement("div")
      bottomFlip.classList.add("bottom-flip")
      topFlip.textContent = startNumber.toString()
      bottomFlip.textContent = newNumber.toString()
    
      topFlip.addEventListener("animationstart", () => {
        if (topHalf) topHalf.textContent = newNumber.toString()
      })
      topFlip.addEventListener("animationend", () => {
        topFlip.remove()
      })
      bottomFlip.addEventListener("animationend", () => {
        if (bottomHalf) bottomHalf.textContent = newNumber.toString()
        bottomFlip.remove()
      })
      flipCard.append(topFlip, bottomFlip)
    }

  return (
    <div className='container2'>

    <div className="container-segment">
      <div className="segment-title">Dias</div>
      <div className="segment">
        <div className="flip-card" data-days-tens>
          <div className="top">0</div>
          <div className="bottom">0</div>
        </div>
        <div className="flip-card" data-days-ones>
          <div className="top">0</div>
          <div className="bottom">0</div>
        </div>
      </div>
    </div>

    <div className="container-segment">
      <div className="segment-title">Horas</div>
      <div className="segment">
        <div className="flip-card" data-hours-tens>
          <div className="top">0</div>
          <div className="bottom">0</div>
        </div>
        <div className="flip-card" data-hours-ones>
          <div className="top">0</div>
          <div className="bottom">0</div>
        </div>
      </div>
    </div>

    <div className="container-segment">
      <div className="segment-title">Minutos</div>
      <div className="segment">
        <div className="flip-card" data-minutes-tens>
          <div className="top">0</div>
          <div className="bottom">0</div>
        </div>
        <div className="flip-card" data-minutes-ones>
          <div className="top">0</div>
          <div className="bottom">0</div>
        </div>
      </div>
    </div>

    <div className="container-segment">
      <div className="segment-title">Segundos</div>
      <div className="segment">
        <div className="flip-card" data-seconds-tens>
          <div className="top">0</div>
          <div className="bottom">0</div>
        </div>
        <div className="flip-card" data-seconds-ones>
          <div className="top">0</div>
          <div className="bottom">0</div>
        </div>
      </div>
    </div>

    </div>
  )
}