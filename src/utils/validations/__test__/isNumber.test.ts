import { isNumber } from "../isNumber";

describe("Teste da função isNumber", () => {
  it("Deve retornar undefined quanto o valor informado for um número", () => {
    const valor = 1;

    expect(isNumber(valor)).toBeUndefined();
  });

  it("Deve retornar erro caso o valor informado não seja um número", () => {
    const valor = "teste";

    expect(() => isNumber(valor)).toThrowError(
      "Campo informado não é um número"
    );
  });

  it("Deve retornar erro com o nome do campo personalizado", () => {
    const valor = "teste";
    const nomeCampo = "Nome";

    expect(() => isNumber(valor, nomeCampo)).toThrowError(
      `Campo ${nomeCampo} não é um número`
    );
  });
});