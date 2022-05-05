const produtoNegocio = require('../produto_negocio');

beforeEach(() => {
    produtoNegocio.limpar();
});

test('listar é vazio inicialmente', () => {
    expect(produtoNegocio.listar()).toEqual([]);
});

test('Ao inserir produto com dados corretos, retorna o produto com id', () => {
    let produto = {nome: "cafe", preco: 5};
    let produtoEsperado = {id: 1, nome: "cafe", preco: 5};
    expect (produtoNegocio.inserir(produto))
        .toEqual(produtoEsperado);
});

test('Ao inserir produto sem nome, gera erro', () => {
    let produto = {preco: 5};
    expect(() => produtoNegocio.inserir(produto)).toThrow("Falta parametros de produto");
});

test('inserir um produto, a lista contém o produto com id', () => {
    let produto = {nome: "pastel", preco: 5};
    let produtoEsperado = {id: 1, nome: "pastel", preco: 5};
    produtoNegocio.inserir(produto);
    expect(produtoNegocio.listar())
        .toContainEqual(produtoEsperado);
});