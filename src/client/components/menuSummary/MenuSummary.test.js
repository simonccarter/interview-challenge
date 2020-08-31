import { countItemsMatchingDietaryRequirement } from './MenuSummary'

describe('MenuSummary', () => {
    it('return correct count', () => {
        const items = [
            { dietaries: ['ve', 'xe'] },
            { dietaries: ['xe', 'if'] },
            { dietaries: ['gg', 'hh'] },
            { dietaries: ['yy', 'xe'] },

        ]
        const count = countItemsMatchingDietaryRequirement(items)('xe')
        expect(count).toBe(3)
    })
})

