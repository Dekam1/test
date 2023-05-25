import { data } from "../data/data"

const TYPES = [];

function addTypes() {
    const current = data.data;
    current.forEach(el => {
        if(TYPES.includes(el.type)) {
            delete TYPES[el]
        } else {
            TYPES.push(el.type)
        }
    })
    return TYPES;
}

addTypes()

export { TYPES }