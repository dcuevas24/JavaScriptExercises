const results = [1, "X", 2];

let sixtyPercent = 0;
let thirtyPercent = 0;
let tenPercent = 0;
let incremet = 1;

for (let i = 1; i <= 50; i++) {
  let random = Math.floor(Math.random() * results.length);

  if (random === 0 && sixtyPercent <= 7) {
    sixtyPercent++;
    document.write(`Resultado ${incremet}: ${results[random]} <br>`);
    incremet++;
  } else if (random === 1 && thirtyPercent <= 3) {
    thirtyPercent++;
    document.write(`Resultado ${incremet}: ${results[random]} <br>`);
    incremet++;
  } else if (random === 2 && tenPercent <= 1) {
    tenPercent++;
    document.write(`Resultado ${incremet}: ${results[random]} <br>`);
    incremet++;
  }
}
