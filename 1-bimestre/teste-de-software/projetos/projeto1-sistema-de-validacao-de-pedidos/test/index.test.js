const validarPedido = require("../index")


test(" Pedido válido deve retornar true", () => {
    let pedido = {

        cliente: "Carlos",
        total: 150,
        itens: ["Produto A"],
    }

    expect(validarPedido(pedido)).toBeTruthy()

})



test("Pedido com total 0 deve retornar false", () => {
    let pedido = {

        total: 150,
        itens: ["Produto A"],
    }

    expect(validarPedido(pedido)).toBeFalsy()

})


test("Pedido sem cliente deve retornar false", () => {
    let pedido = {

        cliente: "Carlos",
        total: 150,
        itens: [],
    }

    expect(validarPedido(pedido)).toBeFalsy()

})


test("Pedido sem itens deve retornar false", () => {
    let pedido = {

        cliente: "Carlos",
        total: 0,
        itens: ["Produto A"],
    }

    expect(validarPedido(pedido)).toBeFalsy()

})



