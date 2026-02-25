const calcularQuadrado = require("../index.js")

test("o quadrado e 5 deve ser 25" , ()=>{
    expect(calcularQuadrado(5,5)).toBe(25)
})