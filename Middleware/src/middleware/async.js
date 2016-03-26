export default function({ dispatch }) {
  return next => action => {
    // If action doesn't have payload
    // or the payload does not have a .then
    // property. We don't care about it.
    // Send it on.
    console.log(action.payload)
    if (!action.payload || !action.payload.then) {
      next(action);
    }

    console.log('We do have a promise', action);

    // Ensure the action's promise resolves
    action.payload
      .then(function(response) {
        // create a new action with the old type, but
        // replace the promise with the response data
        const newAction = { ...action, payload: response }
        dispatch(newAction);

        // OKAY THIS IS IMPORTANT:
        // WE WANT MIDDLEWARE TO BE INTERCHANGEABLE
        // WE DON'T WANT TO WORRY ABOUT ORDER
        // BECAUSE OF THAT WE DON'T USE NEXT, WE USE DISPATCH
        // WHICH WILL START IT RIGHT AT BEGINNING OF MIDDLEWARE

      });
  }
}
