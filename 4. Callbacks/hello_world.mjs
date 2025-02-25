const adios = () => {
  console.log('Good bye, Cruel World!');
}

function foo() {
  console.log('Something, something.');
}

function main() {
  setTimeout(adios, 1000);
  console.log('Hello, World!');
  setTimeout(foo, 500);
  setTimeout(
    () => { console.log('Bla, bla, bla'); }, // Callback
    100
  );
}

main();
