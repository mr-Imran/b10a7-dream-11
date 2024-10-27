import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"

const playerdata = fetch('https://s6.imrann.my.id/player.json')
.then((response) => response.json())
.then((data) => data.players)
.catch((error) => {
  console.error('Error:', error);
});
console.log(playerdata);


// DO YOUR SELF DO NOT COPY PASTE, 
// I'M NOT RESPONSIBLE FOR ANYTHING THAT HAPPENS TO YOUR WEBSITE
// CAN USE THIS API FOR PLAYER DATA - https://s6.imrann.my.id/player.json


createRoot(document.getElementById('root')).render(

 
  
    
  <StrictMode>
    <div class="bg-white min-h-screen">
    <App />
    <Analytics />
    </div>
  </StrictMode>,
)
