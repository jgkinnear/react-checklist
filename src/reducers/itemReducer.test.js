import {items} from './itemsReducer'
import {ADD_ITEM} from '../constants/ChecklistActionsTypes'

let initialState;

describe('items reducer: ', () => {

    beforeEach(() => {
        initialState = items(undefined, {})
    })

    it('returns items initial state as empty array', () => {
        
        expect(initialState).toBeInstanceOf(Array)
        expect(initialState).toHaveLength(0)
    })
    
    it('ADD_ITEM: returns array length incremented by one', () => {
        let action = {
            type: ADD_ITEM,
            description: "new item" 
        }
        let newState = items(initialState, action)
        expect(newState).toHaveLength(1)
    })
})
