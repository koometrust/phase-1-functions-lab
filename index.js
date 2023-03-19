function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  
  function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    let distanceInBlocks = Math.abs(endBlock - startBlock);
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
    }
    function calculatesFarePrice(start, destination) {
        let distanceInFeet = distanceTravelledInFeet(start, destination);
        let farePrice;
      
        if (distanceInFeet <= 400) {
          farePrice = 0;
        } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
          farePrice = (distanceInFeet - 400) * 0.02;
        } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
          farePrice = 25;
        } else {
          farePrice = 'cannot travel that far';
        }
      
        return farePrice;
      }
      