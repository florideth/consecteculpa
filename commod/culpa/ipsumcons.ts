interface Address {
  suite: string;
}

function createAddress(suiteNumber: string): Address {
  return {
    suite: suiteNumber,
  };
}

// Usage
const address = createAddress("Suite 879");
console.log(address);
