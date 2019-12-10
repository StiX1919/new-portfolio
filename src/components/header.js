import React, {useState} from 'react';
import './header.css'
import hello from './styled/styled-components'

function App() {
    let [hamOpen, openHam] = useState(false)
    let [routes, setRoutes] = useState(['Home', 'About', 'Projects'])

    let {FloatRoute} = hello
    let mapRoutes = routes.map((e,i) => {
        return (
            <FloatRoute key={`${e}-${i}`} length={routes.length} open={hamOpen} index={i}>
                <h1>{e}</h1>
            </FloatRoute>
        )
    })
    console.log(FloatRoute)
    return (
        <div className='Header'>
            <div className='Triangle'/>
            <p className='title'>Spencer Smith</p>
            <div onClick={() => openHam(!hamOpen)} className='Hamburger'>
                <span className={hamOpen ? 'bun-open-top' :'bun'}/>
                <span className={hamOpen ? 'meat-open' :'meat'}/>
                <span className={hamOpen ? 'bun-open-bottom' :'bun'}/>
            </div>

            {mapRoutes}
        </div>
    
    );
}

export default App;
