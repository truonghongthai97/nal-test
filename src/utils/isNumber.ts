export const isNumber = (v: any): boolean => Object.prototype.toString.call(v) === '[object Number]'

export default isNumber;
