import reducer from './emojiReducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/emojiActions';


describe('emoji reducer', () => {
  it('handles a bogus action', () => {
    const action = { type: 'NOT_GOOD' };

    const newState = reducer([], action);

    expect(newState).toEqual([]);
  });

  it('handles the drink coffee action', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 1 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 2 });
  });

  it('handles the eat snack action', () => {
    const action = eatSnack();
    const initialState = { snacks: 0 };

    const newState = reducer(initialState, action);
    
    expect(newState).toEqual({ snacks: 1 });
  });

  it('handles the take nap action', () => {
    const action = takeNap();
    const initialState = { naps: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ naps: 1 });
  });

  it('handles the study action', () => {
    const action = study();
    const initialState = { studies: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ studies: 1 });
  });
  
});
