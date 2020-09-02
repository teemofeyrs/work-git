
export const required = value => (value  ? undefined : 'Field is Required')

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength100 = maxLength(100)
export const maxLength8 = maxLength(8)
