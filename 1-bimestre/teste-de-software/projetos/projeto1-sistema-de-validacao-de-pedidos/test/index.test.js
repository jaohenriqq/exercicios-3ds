const validarPedido = require("../index")


test("validar pedido", () => {
    let pedido = {

        cliente: "Carlos",
        total: 150,
        itens: ["Produto A"],
    }

    expect(validarPedido(pedido)).toBeTruthy()

})



test("Cliente Obrigatorio", () => {
    let pedido = {

        total: 150,
        itens: ["Produto A"],
    }

    expect(validarPedido(pedido)).toBeFalsy()

})


test(" pedido", () => {
    let pedido = {

        cliente: "Carlos",
        total: 150,
        itens: [],
    }

    expect(validarPedido(pedido)).toBeFalsy()

})


test("total", () => {
    let pedido = {

        cliente: "Carlos",
        total: 0,
        itens: ["Produto A"],
    }

    expect(validarPedido(pedido)).toBeFalsy()

})



