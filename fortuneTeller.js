/**
 * PROMPT:
 * The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
 */

// Create (initialize) variables
    // numChildren (for number of children), partnerName (for partner's name), geoLocation (for geo location), jobTitle (for job title) 
// Assign values to variables
    // numChildren will be int, partnerName is a string, geoLocation is a string, jobTitle is a string
// Print out variable values
    // Use temp literal to print output

function fortuneTeller (numKids, partner, geoLoc, title){
    
  
    return `You will be a ${title} in ${geoLoc}, and married to ${partner} with ${numKids} kids.`
}

console.log(fortuneTeller(2, "Jane", "Salt Lake City", "Software Engineer"));