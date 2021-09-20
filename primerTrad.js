function recolectarDatos(nombre, planeta, edad, estatura, determinarActividad){
    let padawan={
        nombre:nombre,
        planeta:planeta,
        edad:edad,
        estatura:estatura
    }
    console.log(`El Padawan llamado ${padawan.nombre}, del planeta ${padawan.planeta}`)
    determinarActividad(edad)
}

recolectarDatos("Juan","Marte",15, 1.60, function(edad){
    if (edad>=15){
        console.log("debe aprender a usar sable de luz")
    }else{
        console.log("debe aprender a usar la fuerza")
    }
})