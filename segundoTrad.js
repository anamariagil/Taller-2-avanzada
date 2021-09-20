function robar(pin, despegar){
    if (pin>0 && pin<10){
        console.log("Este es uno de los planos de una de las 10 estrellas de la muerte")
        despegar(true)
    }else{
        console.log("Este es un plano falso")
        despegar(false)
    }
}

robar(11, function(valor){
    if (valor){
        console.log("Despegando")
    }else{
        console.log("No despega")
    }
})