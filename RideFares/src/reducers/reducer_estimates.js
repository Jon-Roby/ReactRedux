import { FETCH_ESTIMATES } from '../actions/index';


export default function(state = [], action) {
  console.log('Action received: ', action);


  switch (action.type) {
    case FETCH_ESTIMATES:
      // DON'T PUSH THIS PAYLOAD INTO STATE!!!
      // RETURN A NEW STATE!!!
      // So you can do this:
      // return state.concat([action.payload.prices])
      // Or this:
      // return [ action.payload.prices, ...state ];

      // FOR THIS APP, IT PROBABLY ISN'T NECESSARY TO
      // SAVE THE SEARCHES. ACTUALLY THAT IS LIKELY NOT DESIRABLE
      //return action.payload.prices;

      // Temp Uber Data - Uber isn't returning data due to SSL restriction
      let uberRequest = {
        prices: [
        {
        localized_display_name: "uberX",
        high_estimate: 29,
        minimum: 7,
        duration: 1380,
        estimate: "$22-29",
        distance: 13.88,
        display_name: "uberX",
        product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
        low_estimate: 22,
        surge_multiplier: 1,
        currency_code: "USD"
        },
        {
        localized_display_name: "uberXL",
        high_estimate: 47,
        minimum: 9,
        duration: 1380,
        estimate: "$35-47",
        distance: 13.88,
        display_name: "uberXL",
        product_id: "821415d8-3bd5-4e27-9604-194e4359a449",
        low_estimate: 35,
        surge_multiplier: 1,
        currency_code: "USD"
        },
        {
        localized_display_name: "uberSELECT",
        high_estimate: 67,
        minimum: 11,
        duration: 1380,
        estimate: "$51-67",
        distance: 13.88,
        display_name: "uberSELECT",
        product_id: "57c0ff4e-1493-4ef9-a4df-6b961525cf92",
        low_estimate: 51,
        surge_multiplier: 1,
        currency_code: "USD"
        },
        {
        localized_display_name: "UberBLACK",
        high_estimate: 65,
        minimum: 15,
        duration: 1380,
        estimate: "$65",
        distance: 13.88,
        display_name: "UberBLACK",
        product_id: "d4abaae7-f4d6-4152-91cc-77523e8165a4",
        low_estimate: 65,
        surge_multiplier: 1,
        currency_code: "USD"
        },
        {
        localized_display_name: "UberSUV",
        high_estimate: 81,
        minimum: 25,
        duration: 1380,
        estimate: "$81",
        distance: 13.88,
        display_name: "UberSUV",
        product_id: "8920cb5e-51a4-4fa4-acdf-dd86c5e18ae0",
        low_estimate: 81,
        surge_multiplier: 1,
        currency_code: "USD"
        },
        {
        localized_display_name: "ASSIST",
        high_estimate: 29,
        minimum: 7,
        duration: 1380,
        estimate: "$22-29",
        distance: 13.88,
        display_name: "ASSIST",
        product_id: "ff5ed8fe-6585-4803-be13-3ca541235de3",
        low_estimate: 22,
        surge_multiplier: 1,
        currency_code: "USD"
        },
        {
        localized_display_name: "uberWAV",
        high_estimate: 55,
        minimum: 9,
        duration: 1380,
        estimate: "$42-55",
        distance: 13.88,
        display_name: "uberWAV",
        product_id: "2832a1f5-cfc0-48bb-ab76-7ea7a62060e7",
        low_estimate: 42,
        surge_multiplier: 1,
        currency_code: "USD"
        }
        ]
        }

      var uberCons = uberRequest.prices.map((car) => {
        return {
          company: "Uber",
          type: car.display_name,
          currency: car.currency_code,
          minPrice: car.minimum,
          maxPrice: car.high_estimate
        }
      }).sort((left, right) => { return left.minPrice - right.minPrice });

      var lyftCons = action.payload.data.cost_estimates.map((car) => {
        return {
          company: "Lyft",
          type: car.display_name,
          currency: car.currency,
          minPrice: (car.estimated_cost_cents_min/100).toFixed(2),
          maxPrice: (car.estimated_cost_cents_max/100).toFixed(2)
        }
      }).sort((left, right) => { return left.minPrice - right.minPrice });

      // console.log(action.payload.data.cost_estimates);
      var result = [...uberCons, ...lyftCons].sort((left, right) => {return left.minPrice - right.minPrice});

      // console.log(action.uberRequest);
      // console.log(action.lyftRequest);
      return result;
  }
  return state;
}
