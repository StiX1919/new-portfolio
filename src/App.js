import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import Header from './components/header'
import {useScroll} from './hooks/scrollTrack'

function App() {
  let [routes, setRoutes] = useState([{name: 'Home', color: 'green'}, {name:'About', color: 'yellow'}, {name:'Projects', color: 'purple'}])
  let scrollData = useScroll()
  let scrollWin = useRef()
  let scrollHeight = scrollWin.current ? scrollWin.current.clientHeight : 0
  let scrollWidth = scrollWin.current ? scrollWin.current.clientWidth : 0

  //refs
  const refs = routes.reduce((acc, routes, i) => {
    acc[i] = React.createRef();
    return acc;
  }, []);


  useEffect(() => {
    scrollHeight = scrollWin.current ? scrollWin.current.clientHeight : 0
    scrollWidth = scrollWin.current ? scrollWin.current.clientWidth : 0
  }, [])

  //functions
  const handleClick = id =>{
    console.log(refs[id].current.clientHeight, refs[id].current.offsetTop)
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  };

  //variables
  let pages = routes.map((e,i) => {
    return (
      <div ref={refs[i]} style={{height: '100vh', width: '100%', backgroundColor: e.color}}></div>
    )
  })
  return (
    <div className="App" >
      <Header scrollFunc={handleClick} routes={routes} refs={refs} scroll={scrollData.y} sizeY={scrollHeight} sizeX={scrollWidth}/>
      <div ref={scrollWin} style={{width: '100%', height: '100%', overflowY: 'auto'}}>
        {pages}
      </div>
    </div>
  );
}

export default App;
