function getMoneySpent(keyboards, drives, b) {

    let totalSpent = -1;
    for(let i = 0; i <= keyboards.length; i++) {
        for(let j = 0; j <= drives.length; j++) {
            let sum = keyboards[i] + drives[j];
          if(sum <= b && sum > totalSpent){
                totalSpent = sum;
            }
        }
    }
    return totalSpent;
}
