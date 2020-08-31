# Additional work

Switched to Redux to demonstrate basic redux store testing using an example reducer, and added additional behavior testing example for item.test.js.

# Candidate notes at 2 hour mark

### State

Main choice in application was what to use for state management. 

While a library such as Redux would be preferable (pure funcs mean easier to test, better seperation of concerns, better app archiecture), I decided to use
hooks for the application state in this test as it is simpler.

In a real application the state would have been implemented in a specific store, and the idea for the main structures would remain the same:

1. `items` array storing original api response, to be used for resetting any client state if required.
2. `filteredItems` storing items that match filter.
3. `selectedItems` items that have been selected. 

Moving to redux would be fairly straightforward from the existing component view. You could either just connect the higher up component and pass down data and functions from the top level compponent, or you could directly connect each lower down component. 

### Testing

Downside of using react hooks is much of the state is harder to test, in comparison to mobx class/object stores, or redux actions/reducers/middleware. Moving forward I would seperate out the store so it is testable. 

On the view layer i've included a test for the item component that demonstrates testing basic view logic.

# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!

# Quick Start
Fork the repository, clone it to your local system, then:

## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Run tests
yarn test (or npm run test)
