let claimlist = ['FraudClaim']
if (claimlist.length === 0) {
    let noclaim = document.getElementById("noclaims")
    noclaim.style.visibility = 'visible'
    let claimSelector = document.getElementById('selection')
    claimSelector.style.visibility = 'hidden'
}



for (i in claimlist) {
    let x = 1
    let curClaim = document.getElementById('claim1')
    curClaim.textContent = claimlist[i]
    ++x
    console.log(i)
}


function DisplayClaim() {
    let claims = document.getElementsByName('claims')[0].value
    if (claims.value === 'claim1') {

    }
}