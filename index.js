function distanceFromHqInBlocks(pickup_location) {
    const hqLocation = 42;
    return Math.abs(pickup_location - hqLocation);
}

function distanceFromHqInFeet(pickup_location) {
    const feetPerBlock = 264;
    const blocks = distanceFromHqInBlocks(pickup_location);
    return blocks * feetPerBlock
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance > 2500) {
      return 'cannot travel that far';
    } else if (distance > 2000) {
      return 25; // flat fare for distance over 2000 and under 2500 feet
    } else if (distance > 400) {
      return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else {
      return 0; // first 400 feet are free
    }
  }
