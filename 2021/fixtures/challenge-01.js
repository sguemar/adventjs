// Red sheep
// Valid
export const candy = { name: 'Candy', color: 'rojo' }
export const fannie = { name: 'Fannie', color: 'rojo' }
export const noa = { name: 'Noa', color: 'rojo' }
// Invalid
export const amelia = { name: 'Amelia', color: 'rojo' }
export const dolly = { name: 'Dolly', color: 'rojo' }

// No red sheep
const buffy = { name: 'Buffy', color: 'azul' }
export const euge = { name: 'Euge', color: 'azul' }
export const charmin = { name: 'Charmin', color: 'amarillo' }
export const cinderella = { name: 'Cinderella', color: 'verde' }

export const allInvalidSheepList = [amelia, buffy, charmin, cinderella, dolly, euge]
export const allValidSheepList = [candy, fannie, noa]
export const allSheep = [...allInvalidSheepList, ...allValidSheepList]
