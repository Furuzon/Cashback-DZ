
const REGULAR_CATEGORY = 0.01;
const INCREASED_CATEGORY = 0.05;
const SPECIAL_CATEGORY = 0.3;

const purchases = [
    {
        amount: 10000,
        category: REGULAR_CATEGORY
    },
    {
        amount: 10000,
        category: INCREASED_CATEGORY,  
    },
    {
        amount: 1000,
        category: REGULAR_CATEGORY,
    },
    {
        amount: 1000,
        category: SPECIAL_CATEGORY,
    },
    {
        amount: 28,
        category: SPECIAL_CATEGORY,
    },
];
let cashback = 0;

for(let purchase of purchases){
    cashback += purchase.amount*purchase.category;
}
cashback = cashback > 3000 ? 3000:cashback;

console.log(cashback);