import {Schema, model} from "mongoose"

const alumnos_esquemas = new Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        estado: {
            type:String
        }
    }
)

export const alumnos = new model('tabla de registro de CURP', alumnos_esquemas)