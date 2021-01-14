// Example 2
console.log('Beginning of file')
setTimeout(
    () => {
        console.log('1. Hello, I will be timing out for 4.0 seconds')
    }, 4000
)
setTimeout(
    () => {
        console.log('2. Hello, I will be timing out for 5.0 seconds')
    }, 5000
)
setTimeout(
    () => {
        console.log('3. Hello, I will be timing out for 3.0 seconds')
    }, 3000
)
setTimeout(
    () => {
        console.log('4. Hello, I will be timing out for 2.0 seconds')
    },2000
)
setTimeout(
    () => {
        console.log('5. Hello, I will be timing out for 5.0 seconds 2')
    }, 5000
)
console.log('End of file')
