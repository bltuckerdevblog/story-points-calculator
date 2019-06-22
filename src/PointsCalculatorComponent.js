import React, {Component} from 'react'
import StoryPointsComponent from "./StoryPointsComponent";

//days in sprint
//days being taken off
//average story points completed per sprint

class PointsCalculatorComponent extends Component {

    state = {
        startDate: "",
        endDate: "",
        nonWorkingDays: 0,
        usualVelocity: 100,
        storyPointsToCommitTo: null
    };

    onStartDateUpdate = (e) => {
        console.log("updating start date");
        const startDate = e.target.value;
        console.log("value: ", e.target.value);

        this.setState(() => ({
            startDate: startDate
        }), () => {
            this.calculate()
        });
    };

    onEndDateUpdate = (e) => {
        console.log("updating end date");
        const endDate = e.target.value;
        console.log("value: ", e.target.value);

        this.setState(() => ({
            endDate: endDate
        }), () => {
            this.calculate()
        });


    };

    onNonWorkingDaysUpdate = (e) => {
        const nonWorkingDays = e.target.value;

        this.setState(() => ({
            nonWorkingDays: nonWorkingDays
        }),() => {
            this.calculate()
        });

    };

    onUsualVelocityUpdate = (e) => {
        const usualVelocity = e.target.value;

        this.setState(() => ({
            usualVelocity: usualVelocity
        }), () => {
            this.calculate()
        });
    };

    calculate() {
        console.log(this.state)
        if (this.state.startDate === "" || this.state.endDate === "") {
            return;
        }

        //TODO: ignore Sundays and Saturdays
        const days = new Date(this.state.endDate).getDay() - new Date(this.state.startDate).getDay();
        const storyPointsPerDay = this.state.usualVelocity / days;
        const storyPointsToCommitTo = this.state.usualVelocity - (storyPointsPerDay * this.state.nonWorkingDays)


        this.setState(() => ({
            storyPointsToCommitTo: storyPointsToCommitTo
        }))
    };

    render() {
/*
startDate: null,
        endDate: null,
        nonWorkingDays: 0,
        usualVelocity: 100,
        storyPointsToCommitTo: null
 */
        const {startDate, endDate, nonWorkingDays, usualVelocity, storyPointsToCommitTo} = this.state;


        return (
            <div>
                <form>
                    <h3 className="center">When does the sprint start?</h3>
                    <br/>
                    <input value={startDate} onChange={this.onStartDateUpdate} type="date"/>
                    <br/><br/>

                    <h3 className="center">When does the sprint end?</h3>
                    <br/>
                    <input value={endDate} onChange={this.onEndDateUpdate} type="date"/>
                    <br/><br/>

                    <h3 className="center">How many points does the team usually commit to?</h3>
                    <br/>
                    <input value={usualVelocity} onChange={this.onUsualVelocityUpdate} type="number"/>
                    <br/><br/>

                    <h3 className="center">How many non-working days (total) will be in the sprint?</h3>
                    <br/>
                    <input value={nonWorkingDays} onChange={this.onNonWorkingDaysUpdate} type="number"/>
                    <br/><br/>

                    <StoryPointsComponent storyPointsToCommitTo={storyPointsToCommitTo}/>
                </form>
            </div>
        )
    }
}

export default PointsCalculatorComponent