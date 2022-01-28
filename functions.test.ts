const {shuffleArray} = require('./utils')

let tempArr = [
{
    id: 0,
    name: 'Gino Robot', 
    imgAddress: 'https://robohash.org/hammer',
    health: 100, 
    attacks: [
        {
            id: 0, 
            damage: 10000
        }, 
        {
            id: 1, 
            damage: 20000
        }
    ]
}
    ]

describe('shuffleArray should', () => {
    let arraytemp = shuffleArray(tempArr)
    test("shuffleArray is an array", () => {
        expect(typeof arraytemp[0]).toEqual('object')
    }),
    test("test if Gino is there", () => {
        expect(arraytemp[0].name).toContain("Gino")
    })
})