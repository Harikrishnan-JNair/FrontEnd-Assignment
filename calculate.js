export function calculateRate(p,r,n) {  
  var resultRate = (p*r*n)/100;
    return resultRate;
}
export function calculateTotalAmount(p,r,n) 
{    let totalAmount = p+calculateRate(p,r,n); 
   return totalAmount;
 }
 export const principal = 1000;
 export const rate = 5;
 export const years = 5;
