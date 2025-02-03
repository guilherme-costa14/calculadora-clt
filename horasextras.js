function fnHorasExtras(salario, horastrabalhadas, cargahoraria) {
    let horasextras = 0
    if(horastrabalhadas > cargahoraria){
        horasextras = (horastrabalhadas - cargahoraria) * salario
    }

    return horasextras
}

module.exports = fnHorasExtras;