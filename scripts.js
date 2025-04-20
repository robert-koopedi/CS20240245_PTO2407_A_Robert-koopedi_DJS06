// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

names.forEach((name) => console.log(name));
  provinces.forEach((province) => console.log(province));

  //Log each name with their matching province
  names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
  });

const uppercasedProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercasedProvinces);

const nameLengths = names.map(name => name.length);
console.log(nameLengths);

const sortedProvinces = [...provinces].sort(); // Using spread to avoid mutating the original
console.log(sortedProvinces);

const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(`Remaining provinces: ${filteredProvinces.length}`);

const hasS = names.map(name => name.toLowerCase().includes('s'));
console.log(hasS); // [true, true, false, true, true, false]

const nameProvinceMap = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(nameProvinceMap);

console.log(products.forEach(product => console.log(product.product)));
console.log(products.filter(product => product.product.length <= 5));

console.log(
  products
    .filter(product => product.price && !isNaN(product.price))
    .map(product => Number(product.price))
    .reduce((total, price) => total + price, 0)
);

console.log(
  products.reduce((acc, product) => acc + product.product, '')
);

console.log(
  (() => {
    const prices = products
      .filter(product => product.price && !isNaN(product.price))
      .map(product => Number(product.price));
    return `Highest: ${Math.max(...prices)}. Lowest: ${Math.min(...prices)}.`;
  })()
);

console.log(
  Object.entries(products).reduce((acc, [_, product]) => {
    acc.push({ name: product.product, cost: product.price });
    return acc;
  }, [])
);
