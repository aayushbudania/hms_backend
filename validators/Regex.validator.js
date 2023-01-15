export const emailValidator = (email) => {
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if(emailRegex.test(email)) return true;
    return false;
}

export const nameValidator = (name) => {
    if (/^[a-zA-Z]+$/.test(name)) return true;
    return false;
}

export const numberValidator = (number) => {
    if(/^\d+$/.test(number)) 
    {
        let str = number.toString()
        if(str.length === 10) return true
        else return false
    }
    return false;
}
