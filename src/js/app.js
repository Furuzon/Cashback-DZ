
const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special';
const REGULAR_COEFFICIENT = 0.01;
const INCREASED_COEFFICIENT = 0.05;
const SPECIAL_COEFFICIENT = 0.3;
const casbackLimit = 3000;

const purchases = [
    {
        amount: 1000,
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
];
let cashback = 0;

for(let purchase of purchases){
    if(purchase.category === REGULAR_CATEGORY){
        cashback += purchase.amount*REGULAR_COEFFICIENT;
    }else if(purchase.category === INCREASED_CATEGORY){
        cashback += purchase.amount*INCREASED_COEFFICIENT;
    }else if(purchase.category === SPECIAL_CATEGORY){
        cashback += purchase.amount*SPECIAL_COEFFICIENT;
    }
    
}
cashback = cashback > casbackLimit ? casbackLimit:cashback;

console.log(cashback)