const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
let time = 100;
for(let i = 0; i < 2; i++) {
  for (let pos of spin) {
    time += 200;
    setTimeout(() => {
      process.stdout.write(pos);
    }, time)
  }
}
setTimeout(() => {
  process.stdout.write('\r|   ');
  console.log();
}, 1900)