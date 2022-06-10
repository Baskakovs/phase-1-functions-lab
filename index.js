// Code your solution in this file!
const hQLocation = 42;
function distanceFromHqInBlocks(pickUpLocation) {
    return(Math.abs(pickUpLocation - hQLocation))
  }

  function distanceFromHqInFeet(pickUpLocation) {
    return(distanceFromHqInBlocks(pickUpLocation)*264);
  }

  function distanceTravelledInFeet(start, destination) {
    return(Math.abs(start-destination)*264)
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination)
    switch (true){
        case(distanceInFeet<400):
        return(0)
        case(distanceInFeet> 400 && distanceInFeet<2000):
        return(((distanceInFeet-400) * 2)/100)
        break;
        case(distanceInFeet > 2000 && distanceInFeet < 2500):
        return(25)
        break;
        case(distanceInFeet > 2500):
        return("cannot travel that far")
        break;
    }
}