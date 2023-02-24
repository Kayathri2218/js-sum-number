let n = 762;
let r = 0;
while (n > 0) {
    let num = n % 10;
    n = (n - num) / 10;
    r += num;
}
console.log(r);
document.write(r);