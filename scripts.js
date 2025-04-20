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


