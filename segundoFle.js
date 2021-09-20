let robar=(pin, despegar)=>{
    if (pin>0 && pin<10){
        console.log("Este es uno de los planos de una de las 10 estrellas de la muerte")
        despegar(true)
    }else{
        console.log("Este es un plano falso")
        despegar(false)
    }
}

robar(11, let = (valor)=>{
    valor ? console.log("Despegando") : console.log("No despega")
})