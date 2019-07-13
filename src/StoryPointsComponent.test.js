import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoryPointsComponent from "./StoryPointsComponent";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('StoryPointsComponent Tests', () => {

    it('renders error state', () => {
        const { getByText } = render(<StoryPointsComponent storyPointsToCommitTo={null}/>);

        expect(getByText('Hmmm...')).toBeInTheDocument();
    });


    it('renders points correctly', () => {
        const storyPoints = 11;
        const { getByText } = render(<StoryPointsComponent storyPointsToCommitTo={storyPoints}/>);

        expect(getByText('You should commit to...')).toBeInTheDocument();
        expect(getByText(`${storyPoints}`)).toBeInTheDocument();
        expect(getByText('points.')).toBeInTheDocument();
    });
    
});

