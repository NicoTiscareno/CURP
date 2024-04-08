import { alumnos } from "../modules/user.model.js"

export const test = ()=>{
    console.log('llamando la funcion desde el controlador')
}

alumnos.create(
    {
        name: "Nicolas",
        apepat: "Tiscareño",
        apemat: "Gloria",
        estado: "Aguascalientes"
    } 


)