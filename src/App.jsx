import React from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <img className='pngImg' src="./public/images/pngLogo.png" alt="savik.uz" />
      <h2 className='fio'>Sarvar Yo'ldashov</h2>
      <p className='work'>Software Engineer</p>
      <ul>
        <li>
          <a href="https://t.me/savikdev" target='_blank'>
            <i class="fa-brands fa-telegram"></i>  
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/savikdev" target='_blank'>
            <i class="fa-brands fa-instagram"></i>  
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@SavikDev" target='_blank'>
            <i class="fa-brands fa-youtube"></i>  
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/SavikDev" target='_blank'>
            <i class="fa-brands fa-twitter"></i>  
          </a>
        </li>
      </ul>
      <p className='text'>Tez orada saytga yangi dizayn va funksiyanol bo'limlar qo'shiladi...</p>
    </div>
  )
}

export default App
