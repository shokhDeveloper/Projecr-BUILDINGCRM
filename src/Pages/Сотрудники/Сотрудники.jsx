import "./Sotrudnik.css"
import { Container_Fluid } from "../../Container_Fluid"
import { Header } from "./Header"
import { Sotrudnik_Titles } from "./Sotrudnik_Titles"
import { Sotrudniki_cards } from "./Cotrudniki_cards"

export const Sotrudkiko = () => {
    return(
        <div style={{width: "100%"}} className="sotrudniko">
            
            <Container_Fluid>
              <Header/>
                <main>
                    <Sotrudnik_Titles/>
                    <Sotrudniki_cards/>
                </main>
            </Container_Fluid>
        </div>
    )
}