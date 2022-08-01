const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('test 1 - typeof', () => {
    expect(typeof getOpeningHours).toEqual('function');
  });

  it('test 2 - testa retorno do zoo fechado', () => {
    expect(getOpeningHours('Tuesday', '12:00-AM')).toEqual('The zoo is closed');
  });

  it('test 3 - testa retorno do zoo fechado', () => {
    expect(getOpeningHours('Tuesday', '8:00-AM')).toEqual('The zoo is open');
  });

  it('test 4 - case sensitive', () => {
    expect(getOpeningHours('Monday', '12:12-am')).toEqual(getOpeningHours('Monday', '12:12-AM'));
  });

  it('test 5 - testa função sem parâmetro', () => {
    expect(getOpeningHours())
      .toEqual({
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      });
  });

  it('test 6 - erro na hora', () => {
    expect(getOpeningHours('Monday', '13:12-am')).toThrow('The hour must be between 0 and 12');
  });

  it('test 7 - erro nos minutos', () => {
    expect(getOpeningHours('Monday', '12:61-am')).toThrow('The minutes must be between 0 and 59');
  });

  it('test 8 - erro no dia da semana', () => {
    expect(getOpeningHours('NoDay', '12:12-am')).toThrow('The NoDay should represent a number');
  });

  it('test 9 - erro na sigla', () => {
    expect(getOpeningHours('Monday', '12:12-mm')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
