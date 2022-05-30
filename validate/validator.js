// Validation code
const validator = require('validator');

const validate = {
    validateString(string) {
        return string !== '' || 'Please enter a valid response!';
    },
    validateSalary(number) {
        if (validator.isDecimal(number)) return true;
        return 'Please enter a valid Salary!';
    },
    isSame (string1, string2) {
        if (string1 === string2) return true;
    }
};

// Export for External
module.exports = validate;