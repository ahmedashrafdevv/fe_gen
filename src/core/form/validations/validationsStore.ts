import { validationRuleParams } from "@/types"
export interface validationRules {
    required(options: validationRuleParams): string,
    num(options: validationRuleParams): string,
    email(options: validationRuleParams): string,
}

class Validator implements validationRules {
    private static instance: Validator;
    public static getInstance(): Validator {
        if (!Validator.instance) {
            Validator.instance = new Validator();
        }

        return Validator.instance;
    }
    required = (options: validationRuleParams): string =>{
        const msg = options.message ? options.message : 'required validation error'
        return options.value ? '' : msg
    }
    email = (options: validationRuleParams): string =>{
        console.log(options.value)
        if (!options.value) {
            return ''
        }
        const msg = options.message ? options.message : 'email validation error'
        /* eslint-disable */
        return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(options.value)) ? '': msg
    }
    num = (options: validationRuleParams): string => {
        if (!options.value) {
            return ''
        }
        const msg = options.message ? options.message : 'number validation error'
        const notNumber = typeof options.value == 'number'
        const lessThanMin = options.min && options.value.lengt < options.min
        const biggerThanMax = options.max && options.value.lengt > options.max
        if (notNumber || lessThanMin || biggerThanMax) {
            return msg
        }
        if (typeof options.value == 'number') return msg
        return ''
    }

}

export default Validator