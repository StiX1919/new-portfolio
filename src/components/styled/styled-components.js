import styled from 'styled-components'
import { removeTypeDuplicates } from '@babel/types'



let FloatRoute = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 200px;
    height: 60px;

    background-color: blue;
    position: absolute;

    top: ${props => {
        return props.open ? props.index * 60 : -60
    }}px;
    right: 0;
    z-index: ${props => {
        return -1 - props.index
    }};
    transition: .5s ${props => {
        let amt = props.open ? 0 + props.index : -(props.index - props.length) - 1
        console.log(amt)
        return amt / 3
    }}s;
`



export default {
    FloatRoute
}