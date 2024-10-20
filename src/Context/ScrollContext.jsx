import { createContext, useRef } from "react";

export let ScrollContext = createContext(null)

export let ScrollProvider = ({children})=>{
let AsiaS = useRef()
let ScrollAsia = ()=>{
    AsiaS.current.scrollIntoView({behavior: "smooth"})
}

let AfricaS = useRef()
let ScrollAfrica = ()=>{
    AfricaS.current.scrollIntoView({behavior: "smooth"})
}

let AmericasS = useRef()
let ScrollAmericas = ()=>{
    AmericasS.current.scrollIntoView({behavior: "smooth"})
}

let EuropeS = useRef()
let ScrollEurope = ()=>{
    EuropeS.current.scrollIntoView({behavior: "smooth"})
}

let OceaniaS = useRef()
let ScrollOceania = ()=>{
    OceaniaS.current.scrollIntoView({behavior: "smooth"})
}

let AntarcticS = useRef()
let ScrollAntarctic = ()=>{
    AntarcticS.current.scrollIntoView({behavior: "smooth"})
}

return(
    <ScrollContext.Provider value={{
        AsiaS,
        ScrollAsia,
        AfricaS,
        ScrollAfrica,
        AmericasS,
        ScrollAmericas,
        EuropeS,
        ScrollEurope,
        OceaniaS,
        ScrollOceania,
        AntarcticS,
        ScrollAntarctic

    }}>
        {children}
    </ScrollContext.Provider>
)

}