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
        return 2 - props.index
    }};
    transition: .5s ${props => {
        let amt = props.open ? 0 + props.index : -(props.index - props.length) - 1
        return amt / 3
    }}s;
`

let Title = styled.div`
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px;
    overflow-x: hidden;
    height: 150px;
    width: ${props => {
        return 100 * props.length
    }}vw;

    transform: rotate(-${props => {
        console.log(props.sizeX)
        return 7
    }}deg);
    position: absolute;
    top: ${props => {
        let size = props.sizeY / props.length
        let top = (props.yScroll / size)
        return  -20 + (top * 12)
    }}vh;
    z-index: 15;
    left: -${props => {
        let size = props.sizeY / props.length
        let leftMove = (props.yScroll / size) * 100
        return leftMove + 2
    }}vw
`



export default {
    FloatRoute,
    Title
}