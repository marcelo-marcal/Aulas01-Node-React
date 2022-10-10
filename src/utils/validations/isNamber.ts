const isNamber = (value: any, name?: string) => {
  const valor = Number(value);

  if (isNaN(valor)) {
    throw new Error(`Campo ${name ? name : "obrigatório"} não é um numero!`);

  }
};

export { isNamber };