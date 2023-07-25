function idade(num) {
  if (num >= 18) {
    return console.log(
      `Você tem ${num} anos, então pode entrar na auto escola`
    );
  }
  return console.log(
    `Você tem ${num} anos, então não pode entrar na auto escola`
  );
}

idade(14);
