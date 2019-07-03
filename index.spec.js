const encodeUrl = require('./encode-url')

describe('encodeUrl', () => {
    const data = [
        {
            input: '/ws/@connections/aq2fAdABrPEAc2Q=',
            encoded: '/ws/%40connections/aq2fAdABrPEAc2Q%3D'
        },
        {
            input: '/ws/@=',
            encoded: '/ws/%40%3D'
        }
    ]

    it(`should return string with encoded @ and = characters`, () => {
        data.map(({ input, encoded }) => {
            const url = encodeUrl(input)
            expect(url).toBe(encoded)
        })
    })

})