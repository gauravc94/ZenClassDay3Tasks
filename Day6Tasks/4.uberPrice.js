// A class to calculate the uber price

class uberPrice {
// The constructor takes numbers representing the base fare, the per KM rate,
// the per minute rate and the surge rate multiplier respectively.
// The class property surgeRate is set to 1 as default.  
    constructor(baseFare, perKMRate, perMinuteRate, surgeRate = 1) {

        this.baseFare = baseFare;
        this.perKMRate = perKMRate;
        this.perMinuteRate = perMinuteRate;
        this.surgeRate = surgeRate;
    }

// The method calculatePrice() returns the final price of a trip.
// Takes the distance travelled and the time taken for the trip as the inputs.
// Distance is in Kilometres and Time taken for the trip is in minutes
    calculatePrice(distance, time) {
        
        const fare = this.baseFare + (this.perKMRate * distance) + (this.perMinuteRate * time);

        // Surge Pricing is applied at the end
        return (fare * this.surgeRate);
    }
}

// An object trip1 with Base fare of 50 INR, per KM rate of 10 INR, per Minute rate of 1 INR
const trip1 = new uberPrice(50, 10, 1);

// An object trip2 with the same values as trip1 but has surgeRate of 1.5
const trip2 = new uberPrice(50, 10, 1, 1.5);

// We calculate the final Price for a Uber trip of 10 KM's that lasted for 20 Minutes
console.log(trip1.calculatePrice(10, 20));

// trip2 for the same distance and duration experienced a surge in pricing
console.log(trip2.calculatePrice(10, 20));
