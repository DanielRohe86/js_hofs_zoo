const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('test 1 - typeof', () => {
    expect(typeof handlerElephants).toEqual('function');
  });

  it('test 2 - undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('test 3 - not a string ', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('test 4 - retorna chave pedida', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });

  it('test 5 - retorna valor da callback do caso count', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('test 6 - retorna valor da callback do caso names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('test 7 - retorna valor da callback do caso averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

    // it('test 8 - ', () => {
    
  // });
});
