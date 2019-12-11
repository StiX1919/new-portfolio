import React, {useState} from 'react';
import './header.css'
import hello from './styled/styled-components'
import { tsPropertySignature } from '@babel/types';

function App(props) {
    let [hamOpen, openHam] = useState(false)

    let {FloatRoute, Title} = hello
    let mapRoutes = props.routes.map((e,i) => {
        return (
            <FloatRoute onClick={() => props.scrollFunc(i)} key={`${e.name}-${i}`} length={props.routes.length} open={hamOpen} index={i}>
                <h1>{e.name}</h1>
            </FloatRoute>
        )
    })
    let titles = props.routes.map((e) => {
        return (
            <p className='title'>{e.name}</p>
        )
    })

    return (
        <div className='Header'>
    {/*<div className='Triangle'/>*/}
            <Title length={props.routes.length} sizeY={props.sizeY} sizeX={props.sizeX} yScroll={props.scroll}>
                {titles}
            </Title>
            
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
