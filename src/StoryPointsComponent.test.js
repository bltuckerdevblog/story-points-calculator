import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoryPointsComponent from "./StoryPointsComponent";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('StoryPointsComponent Tests', () => {

    it('renders error state', () => {
        const wrapper = render(<StoryPointsComponent/>)

    });


});

