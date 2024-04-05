const randomList = [
	9,
	14,
	7,
	139,
	17,
];

console.log(randomList);
console.log((randomList[0] + randomList[1] + randomList[2] + randomList[3] + randomList[4])/5);



const randomList2 = [
{
	name: "Nino",
	age: 19,
},


{
	name: "Mariam",
	age: 24,
},

{
	name: "Giorgi",
	age: 25,
},

{
	name: "Ana",
	age: 27,
},

{
	name: "Nika",
	age: 21,
},
];

console.log(randomList2);


const randomList3 = {
	firstName: "Gvantsa",
	lastName: "Kintsurashvili",
	address: ["Tbilisi", "vazisubani"],
	age: 25,
	phoneNumbers: ["514983398", "2323232"],
};

console.log(randomList3);


const text="My name is " + randomList3.firstName + ", My age is " + randomList3.age + ", My address is " + randomList3.address[0];
console.log(text);