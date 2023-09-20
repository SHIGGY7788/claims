let claimList = ['Fraud Claim']
if (claimList.length === 0) {
    let noclaim = document.getElementById("noclaims")
    noclaim.style.visibility = 'visible'
    let claimSelector = document.getElementById('selection')
    claimSelector.style.visibility = 'hidden'
    let claimTable = document.getElementById('claimContent')
    claimTable.style.visibility = 'hidden'
}


if (claimList.length < 0) {
    let claimTable = document.getElementById('claimContent')
    claimTable.style.visibility = 'hidden'
    DisplayClaim()
}


for (i in claimList) {
    let x = 1
    let curClaim = document.getElementById('claim1')
    curClaim.textContent = claimList[i]
    ++x
    console.log(i)
}

let claimBusiness = document.getElementById('claimBusiness')
let claimDate = document.getElementById('claimDate')
let claimAmount = document.getElementById('claimAmount')
let claimStatus = document.getElementById('claimStatus')
let claimTable = document.getElementById('claimContent')
claimTable.style.visibility = 'hidden'
function DisplayClaim() {
    console.log('element change')
    let x = document.getElementById('claims').value;
    console.log(x)
    if (x === 'default') {
        claimTable.style.visibility = 'hidden'
        let heading = document.getElementById('noclaims')
        heading.innerText = 'No Claim Selected'
        heading.style.visibility = 'visible'
    }
    if (x === 'claim1') {
        let claimTable = document.getElementById('claimContent')
        claimTable.style.visibility = 'visible'
        claimBusiness.innerText = 'Amazon'
        claimDate.innerText = '8/10/23'
        claimAmount.innerText = '$152.78'
        claimStatus.innerText = 'Closed'
    }

}