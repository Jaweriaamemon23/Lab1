function checkSpeed(speed) {
    const speedLimit = 70;
    const penaltyPointLimit = 10;
    
    if (speed <= speedLimit) {
        console.log('Good Safe Driving');
    } else if (speed > speedLimit && speed <= 120) {
        const penaltyPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Speed Limit Crossed by Penalty Point: ${penaltyPoints}`);
        if (penaltyPoints > penaltyPointLimit) {
            console.log('License Suspended');
        }
    } else {
        console.log('License Suspended');
    }
}

checkSpeed(60); 
checkSpeed(80);  
checkSpeed(140); 