const fibonacci = function(fibIndex) {
    try {
        fibIndex = parseInt(fibIndex);
    }
    catch (error){
        return "OOPS"
    }

    if(fibIndex < 0 ) return "OOPS"

    let fib = [0,1];

    for (i = 2; i <= fibIndex; i++)
    {
        fib.push(fib[i-1] + fib[i-2])
        console.log(fib)
        console.log(i)
    }

    return fib[fibIndex]

};

function parseIndex() {

}

// Do not edit below this line
module.exports = fibonacci;
