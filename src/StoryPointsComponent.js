import React, {Component} from 'react'

//displays how many story points your team should to commit to

class StoryPointsComponent extends Component {

    render() {
        const storyPointsToCommitTo = this.props.storyPointsToCommitTo;
        if (storyPointsToCommitTo == null) {
            return (
                <div id="no-story-points">
                    <h2>Hmmm...</h2>
                </div>
            )
        }

        return (
            <div>
                <h2>You should commit to...</h2>
                <br/>
                <div id="story-points">{storyPointsToCommitTo}</div> points.
            </div>
        )
    }
}

export default StoryPointsComponent