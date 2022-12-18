function formatmoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$' + value
}

function formatSplit(value){
    if (value == 1) return value + ' pearson'
    else return value + ' people'
}


function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value


    let tipValue = bill * (tipPercent/100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    let tipPer = tipValue / split

    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = formatmoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatmoney(billTotal)
    document.getElementById('billEach').innerHTML = formatmoney(billEach)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('tipPerPearson').innerHTML = formatmoney(tipPer)

}