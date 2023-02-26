import "./Asosiy.css"
import { Container_Fluid } from "../../Container_Fluid"
import { Asosiy_Header } from "./Asosiy_Header"
import { Asosiy_Card } from "./Asosiy_Cards"
import { Asosiy_Chart } from "./Asosiy_Charts"
import { NavLink, Route, Routes } from "react-router-dom"
import { Zarplata_Charts } from "./Zarplata_Charts"
import { Prodata_Charts } from "./Prodaja_Charts"

export const Asosiy = () => {
    return(
        <div className="asosiy">
            <Container_Fluid>
                <Asosiy_Header/>
                <Asosiy_Card/>
                <div className="asosiy_pages">
                    <NavLink className={(params) => params.isActive? "active_charts_a": "charts_a"} to={"rashodi"} >Rashodi</NavLink>
                    <NavLink className={(params) => params.isActive? "active_charts_a": "charts_a"} to={"prodaja"}>Prodaja</NavLink>
                    <NavLink className={(params) => params.isActive? "active_charts_a": "charts_a"} to={"zarplata"}>Zarplata</NavLink>
                </div>
                <Routes>
                    <Route index element={<Asosiy_Chart/>}></Route>
                    <Route path="/rashodi" element={<Asosiy_Chart/>}/>
                    <Route path="/zarplata" element={<Zarplata_Charts/>}/>
                    <Route path="/prodaja" element={<Prodata_Charts/>}/>
                </Routes>
            </Container_Fluid>
        </div>
    )
}