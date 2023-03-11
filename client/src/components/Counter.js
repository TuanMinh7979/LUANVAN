import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { incre, decre, increByAmount } from "../store/counterSlice.js"
function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const inputVal = useRef()
  return (<div style={{ padding : "100px" }}>
    <span>{count}</span>
    <button onClick={() => dispatch(incre())}>Up</button>
    <button onClick={() => dispatch(decre())}>Down</button>
    <input ref={inputVal} type="number" placeholder="increase by input value" />
    <button onClick={() => {dispatch(increByAmount(Number(inputVal.current.value)||1))}} >Up</button>
  </div>)
}
export default Counter;