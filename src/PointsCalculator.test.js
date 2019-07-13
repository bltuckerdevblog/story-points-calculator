import PointsCalculator from "./PointsCalculator";

describe('PointsCalculator Tests', () => {

    it('Scenario 1', () => {
        const oneDay = 24*60*60*1000;

        const objectUnderTest = new PointsCalculator();

        const vacationDays = 0;
        const teamSize = 1;
        const normalVelocity = 1;
        const today = new Date();
        const yesterday = new Date(today.getTime() - oneDay)

        const result = objectUnderTest.calculate(yesterday, today, normalVelocity, vacationDays, teamSize)

        expect(result).toEqual(1)

    });

    it('Calculates Scenario 2 correctly', () => {
        const oneDay = 24*60*60*1000;

        const objectUnderTest = new PointsCalculator();

        const vacationDays = 0;
        const teamSize = 2;
        const normalVelocity = 20;
        const today = new Date();
        const yesterday = new Date(today.getTime() - oneDay * 10)

        const result = objectUnderTest.calculate(yesterday, today, normalVelocity, vacationDays, teamSize)

        expect(result).toEqual(20)

    });

});