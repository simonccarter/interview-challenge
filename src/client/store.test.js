import { setFilter } from './store'

// Example test
describe('Example store tests', () => {
    it('reducer test', () => {
        // arrange
        const state = {
            items: [{ id: 1, name: 'beef' }, { id: 2, name: 'pasta 1' }, { id: 3, name: 'past 2' }],
            filtredItems: []
        }
        const payload = 'pasta'

        // act
        const newState = setFilter(state, { payload })

        // assert        
        expect(newState.filter).toEqual(payload)
        expect(newState.filteredItems).not.toEqual(state.filteredItems)
        expect(newState.filteredItems.length).toBe(1)
        expect(newState.filteredItems[0].name).toEqual(state.items[1].name)
    })
})
