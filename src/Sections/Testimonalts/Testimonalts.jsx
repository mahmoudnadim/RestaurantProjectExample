import React from 'react'
import "./Testimonalts.css"
import { TestimonaltBox } from '../../Components'


export default function Testimonalts() {
  return (
    <div className="testimonalts_c flex flex-col">
      <p className="testimonaltsTitle">WHAT DO THEY SAY?</p>
      <div className="testimonaltsBoxes flex overflow-auto py-4 px-2">
        <TestimonaltBox />
        <TestimonaltBox />
        <TestimonaltBox />
      </div>
    </div>
  )
}
