import { render } from '@testing-library/react';
import {AppContext} from '../context/AppProvider'
import * as React from 'react'
const dispatch = jest.fn();
export const createWrapper = (appState) =>{
    
    const wrapper = ({ children }) => (
        <AppContext.Provider value={{ appState, dispatch }}>
            {children}
        </AppContext.Provider>
    );

    return wrapper;
}

export const renderWithClient = (ui) =>{
    const { rerender, ...result } = render(
            <AppContext.Provider>{ui}</AppContext.Provider>
    )
    return {
        ...result,
        rerender: (rerenderUi) =>
            rerender(
                <AppContext.Provider>{rerenderUi}</AppContext.Provider>
            ),
    }
}