import { useState, useRef } from 'react'
import { toPng } from 'html-to-image'
import './App.css'
import Header from './component/Header.jsx'
import TableBody from './component/TableBody.jsx'

function App() {
  const appRef = useRef(null);

  const saveAppAsImage = () => {
    if (appRef.current === null) {
      return;
    }

    toPng(appRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = Date.now();
        link.click();
      })
      .catch((err) => {
        console.error('Something went wrong!', err);
      });
  };

  return (
    <>
      <div ref={appRef} style={{backgroundColor: 'white'}}>
        <Header/>
        <TableBody/>
      </div>
      <div className='image'>
        <button onClick={saveAppAsImage}>take pic</button>
      </div>

    </>
  )
}

export default App
