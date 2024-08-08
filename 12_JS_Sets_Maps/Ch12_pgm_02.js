const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// Convert arrays to sets
const setA = new Set(a);
const setB = new Set(b);

// Find the union of sets
const union = new Set([...setA, ...setB]);
console.log('Union of a and b:', Array.from(union));

// Find the intersection of sets
const intersection = new Set([...setA].filter(item => setB.has(item)));
console.log('Intersection of a and b:', Array.from(intersection));

// Find the difference of setA with setB
const difference = new Set([...setA].filter(item => !setB.has(item)));
console.log('Difference of a with b:', Array.from(difference));
