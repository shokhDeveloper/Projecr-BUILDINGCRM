import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import "./Sotrudnik.css"
export const Sotrudnik_Titles = () => {
    const [block, setBlock] = useState(!true)
    const handleUp = () => {
        setBlock(false)
    }
    useEffect(() => {
        if(block === true){
            window.addEventListener("mouseup", handleUp)
        }else{
            window.removeEventListener("mouseup", handleUp)
        }
    }, [block])
    return(
        <>
        <div className="sotrudnik_titles">
            <h3>Сотрудники</h3>
            <div className="sotrudnik_btns">
                <button>Фильтр</button>
                <button onClick={() => setBlock(!block)}>Role </button>
                <button>Добавить сотрудника +</button>
            </div>
        </div>
        <div style={{display: block !== true? "none": "flex"}} className="sotrudniki_bar">
            <div className="sutrudniki_bar_uchburchak"></div>
            <ul className="sutrudniki_bar_cards">
                <li><NavLink to={"/Prodajnik"}>Prodajnik</NavLink></li>
                <li><NavLink to={"/Skladchik"}>Skladchik</NavLink></li>
                <li><NavLink to={"/Menedjer"}>Menedjer</NavLink></li>
            </ul>
        </div>
        </>
        
    )
}