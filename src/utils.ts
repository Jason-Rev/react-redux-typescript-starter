import assign = require('object-assign');

/**
 * returns a new object based upon source with the fields updated from spread
 */

export function spread<A, B>(a: A, b: B): A & B;
export function spread<A, B, C>(a: A, b: B, c: C): A & B & C;
export function spread<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
export function spread<T>(...t: T[]): T {
    return assign({}, ...t) as T;
}
