const category = []
category['regular'] = 0.01
category['increased'] = 0.05
category['special'] = 0.3

let purchase = {
    summPurchase : 0,
    category: 'regular'
}
let result = document.getElementById('cashback')
let alert = document.getElementById('alert')

function compute(){
    purchase.summPurchase = Number(document.getElementById('summa').value)
    purchase.category = document.getElementById('category').value
    if (purchase.summPurchase && purchase.category){
        var cashback = purchase.summPurchase*category[purchase.category]
        cashback = cashback > 3000 ? 3000:cashback
        result.innerHTML = cashback
    } else{
        alert.innerHTML = "Сначало заполните поле сумма покупки"
        setTimeout(()=>{
            alert.innerHTML = ''
        }, 5000)
    }
}