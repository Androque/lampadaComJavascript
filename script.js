const foto = document.getElementById("imagem")

let contador = 0
let quebrada = false

foto.addEventListener("click", function() {
    if (quebrada == false) {
        contador ++
        foto.src = "/img/lampadaAcesa.png"
    }
   
    if (contador % 2 == 0 && quebrada == false) {
        foto.src = "/img/lampadaApagada.png"
    }
}) 

const btn = document.getElementById("botao")
btn.addEventListener("click", () => {
    foto.src = "/img/lampadaQuebrada.png"
    quebrada = true
})

const btn2 = document.getElementById("botao2")
btn2.addEventListener("click", () => {
    foto.src = "/img/lampadaApagada.png"
    quebrada = false
})


