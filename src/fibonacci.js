function fibonacci(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    let a = 0, b = 1;
    for (let i = 2; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function esPinValido(pin) {
    if (pin == undefined || pin == null) {
        return false;
    }
    
    if (pin.length < 4 || pin.length > 6) {
        return false;
    }
    
       for (let i = 0; i < pin.length; i++) {
        const char = pin[i];
        if (char < '0' || char > '9') {
            return false;
        }
    }
    
    for (let i = 1; i < pin.length; i++) {
        if (pin[i] != pin[0]) {
            return true; 
        }
    }
    return false;
}

export{
    fibonacci, 
    esPinValido
}