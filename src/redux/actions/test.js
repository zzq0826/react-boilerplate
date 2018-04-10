/*
 * action types
 */

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const ADD = "ADD";

/*
 * action creators
 */

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: RESET}
}

export function add(num) {
    return {type: ADD,num}
}