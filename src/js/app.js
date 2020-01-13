
const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special';

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
        amount: 10000,
        category: SPECIAL_CATEGORY,
    },
];
let cashback = 0;

for(let purchase of purchases){
    if(purchase.category === 'regular'){
        cashback += purchase.amount*0.01;
    }else if(purchase.category === 'increased'){
        cashback += purchase.amount*0.05;
    }else if(purchase.category === 'special'){
        cashback += purchase.amount*0.3;
    }
    
}
cashback = cashback > 3000 ? 3000:cashback;

console.log(cashback)