let recolectarDatos=(nombre, planeta, edad, estatura, determinarActividad)=>{
    let padawan={
        nombre:nombre,
        planeta:planeta,
        edad:edad,
        estatura:estatura
    }
    determinarActividad(padawan.nombre, padawan.edad, padawan.planeta)
}

recolectarDatos("Juan","Marte", 15, 1.60, let = (nombre, edad, planeta)=>{
    (edad>=15) ? console.log(`El Padawan llamado ${nombre}, del planeta ${planeta} debe aprender a usar sable de luz`) : console.log(`El Padawan llamado ${nombre}, del planeta ${planeta} debe aprender a usar la fuerza`)})