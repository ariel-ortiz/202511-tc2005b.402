export const handler = async (event, context) => {
  const params = event.queryStringParameters ?? { n: "0" };
  const n = parseInt(params.n, 10) || 0;
  return {
    statusCode: 200,
    body: JSON.stringify({
      n,
      values: Fibonacci(n)
    })
  };
};

function Fibonacci(n) {
  if (n == 0) {
    return [];
  }
  if (n == 1) {
    return [0];
  }
  const resultado = [0, 1];
  n -= 2;
  while (n > 0) {
    const a = resultado[resultado.length - 1];
    const b = resultado[resultado.length - 2];
    resultado.push(a + b);
    n--;
  }
  return resultado
}

// Probando la función:
// console.log(Fibonacci(5));
