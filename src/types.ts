export type Rule = ((options: validationRuleParams) => string) | string

export type TInput =  {
    label: string
    type:string
    cols?: number
    rules?:Array<Rule>
    hint?:string
    disabled?:boolean
    hidden?:boolean
    icon?: string
    initial?:any,
}
export type formInputValidationError =  {
    msg : string,
}

export type validationRuleParams =  {
    value : any,
    message? : string,
    min?:number,
    max?:number
}





