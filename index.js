// Code your solution in this file!
function distanceFromHqInBlocks(location){
    const centralStreet = 42;
    if(location > centralStreet)
        {return (location - centralStreet);}
    else if(centralStreet > location)
        {return (centralStreet - location);}
}

function distanceFromHqInFeet(blockValue){
    let distanceWithFeet = distanceFromHqInBlocks(blockValue) * 264;
    return distanceWithFeet;
}

function distanceTravelledInFeet(start, destination){
    if(start > destination){
        return(start - destination) * 264 ;
    }
    else if(destination > start){
        return(destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    }
    else if((distanceTravelledInFeet(start, destination) > 400) && (distanceTravelledInFeet(start, destination) <= 2000)){
        let totalPrice = (distanceTravelledInFeet(start, destination) - 400) * (0.02);
        return totalPrice;
    }
    else if((distanceTravelledInFeet(start, destination) > 2000) && (distanceTravelledInFeet(start, destination) <= 2500)){
        return 25;
    }
    else if(distanceTravelledInFeet(start, destination) > 2500){
        return('cannot travel that far');
    }
}
