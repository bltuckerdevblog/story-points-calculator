import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PointsCalculatorComponent from "./StoryPointsCaclulatorComponent";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('StoryPointsComponent Tests', () => {

    it('renders error state', () => {
        const { getByText } = render(<PointsCalculatorComponent storyPointsToCommitTo={null}/>);

        expect(getByText('Hmmm...')).toBeInTheDocument();
    });


    it('renders points correctly', () => {
        const storyPoints = 11;
        const { getByText } = render(<PointsCalculatorComponent storyPointsToCommitTo={storyPoints}/>);

        expect(getByText('You should commit to...')).toBeInTheDocument();
        expect(getByText(`${storyPoints}`)).toBeInTheDocument();
        expect(getByText('points.')).toBeInTheDocument();
    });

});

