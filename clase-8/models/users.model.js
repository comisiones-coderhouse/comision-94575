import mongoose from "mongoose";
import validator from "validator";

//Schema 
const userSchema = new mongoose.Schema({
    //_id se crea automaticamente, no hace falta definirlo (ObjectID)
    nombre : {
        type : String,
        required : true,
    },
    edad : {
        type : Number,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate : {
            validator : (valor) => {

                const esValido = validator.isEmail(valor) //true o false
                
                console.log("esValido", esValido)

                return esValido;
            },
            message : ""
        }
    },
})

//Modelo
const UserModel = mongoose.model("User", userSchema);

export default UserModel;