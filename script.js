function calcular(){
    // Var da gorjeta e valor
    var total = document.getElementById('contavalor')
    var gorjeta = document.getElementById('contagorjeta')
    var gor = Number(gorjeta.value)
    var tot = Number(total.value)
    // Var do VALOR FINAL
    var total = document.getElementById('totalfinal')
    gor = tot * (gor/100)
    var final = gor + tot
    total.innerHTML = `${final.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}`


}