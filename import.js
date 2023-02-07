
import * as test from "./calculate.js"
const principal = test.principal;
const rate = test.rate;
const years = test.years;
console.log("Interest Amount : ", test.calculateRate(principal,rate,years))
console.log("Total Amount : ", test.calculateTotalAmount(principal,rate,years))

