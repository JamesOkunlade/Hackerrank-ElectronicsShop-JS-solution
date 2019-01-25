# Hackerrank-ElectronicsShop-JS-solution

### Function description

Complete the getMoneySpent function in the editor below. It should return the maximum total price for the two items within Monica's budget, or -1 if she cannot afford both items. 

getMoneySpent has the following parameter(s): 

* keyboards: an array of integers representing keyboard prices 

* drives: an array of integers representing drive prices 

* b: the units of currency in Monica's budget 

### Solution
```
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
```

### Explanation

