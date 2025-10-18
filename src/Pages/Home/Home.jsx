import React, { useContext } from 'react'
import "./Home.css"
import { MainHero,MainBoxes,OurPhoto,Testimonalts} from '../../Sections'
import { AllContext } from '../../Components/AllContext/AllContext'
import { Nav } from '../../Components'

export default function Home() {
    const {cart,setCart} = useContext(AllContext)
    return (
        <>  
            <MainHero />
            <MainBoxes />
            <OurPhoto />
            <Testimonalts />
        </>
    )
}
