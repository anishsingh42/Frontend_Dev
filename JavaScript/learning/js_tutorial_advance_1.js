//array methods
const companies = [
  { name: "company one", role: "finance", start: "1900", end: "1950" },
  { name: "company two", role: "retail", start: "1960", end: "2000" },
  { name: "company three", role: "auto", start: "1970", end: "2002" },
  { name: "company four", role: "tech", start: "1980", end: "2010" },
  { name: "company five", role: "finance", start: "1990", end: "2014" },
  { name: "company six", role: "tech", start: "1950", end: "2005" },
  { name: "company seven", role: "retail", start: "1960", end: "1997" },
  { name: "company eight", role: "auto", start: "1970", end: "1998" },
  { name: "company nine", role: "retail", start: "1990", end: "2020" },
];
const ageList = [33, 2, 22, 13, 44, 53, 21, 56, 12, 11, 90, 78];

//traversing techniques

//foreach

// for(let i=0;i<companies.length;i++)
// {
//     console.log(companies[i]);
// }

console.log("For Each");
companies.forEach(function (company) {
  console.log(company);
});
//filter

// const eligibleForDrink=[];
// for(let j=0;j<ageList.length;j++)
// {
//     if(ageList[j] >= 25)
//     {
//         eligibleForDrink.push(ageList[j]);
//     }
// }

// const eligibleForDrink = ageList.filter(age => age>=25)
console.log("FILTER");
const eligibleForDrink = ageList.filter(function (age) {
  if (age >= 25) {
    return true;
  }
});
console.log(eligibleForDrink);

const retailSellers = companies.filter(
  (companyRole) => companyRole.role === "retail"
);
console.log(retailSellers);

//map
const companyDetails = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);
// const x = companies.map(c => `${c.name} [${c.start}]`);
console.log(companyDetails);
// console.log(x);
//sort

const sortStartDates = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) return 1;
  else return -1;
});
// const sortStartDates = companies.sort((c1, c2) =>
//   c1.start >= c2.start ? 1 : -1
// );
console.log(sortStartDates);

//reduce

const totalDiffYrs=companies.reduce(function(total,company){
    return total+(company.end - company.start);
},0)

console.log(totalDiffYrs);