import { useRef } from 'react'
import { Grid, Container } from '@mui/material'
import JobCard from './JobCard'
import  ReactToPdf  from 'react-to-pdf'
import Header from './Header'
export default function Test() {
    const ref = useRef()
    return (
        <div>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div ref={ref}><Header /></div>
        </div>
    )
}


