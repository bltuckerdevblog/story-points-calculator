



class PointsCalculator{

    calculate(startDate, endDate, normalVelocity, vacationDays, teamSize){
        const oneDay = 24*60*60*1000;
        const totalDays = Math.round(Math.abs((startDate.getTime() - endDate.getTime())/(oneDay)));
        const pointsPerPersonPerDay = normalVelocity / (teamSize * totalDays);
        const estimatedTeamVelocity = normalVelocity - (pointsPerPersonPerDay * vacationDays);


        return estimatedTeamVelocity
    }

}



export default PointsCalculator