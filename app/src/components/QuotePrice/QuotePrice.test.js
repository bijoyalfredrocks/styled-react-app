
import { render, screen, renderHook } from '@testing-library/react';
import { QuotePrice } from './QuotePrice';
import React from "react";
import AppProvider, { AppContext, useAppData } from '../../context/AppProvider';
import { act } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';

let state = { addOns: [], togglePayment: false };
const mockUseContxt = jest.fn().mockImplementation(() => ({ state, dispatch }));
React.useContext = mockUseContxt;
const dispatch = jest.fn();

const queryClient = new QueryClient();

const getWrapper = (appState) => {
    return ({ children }) => (
        <AppContext.Provider value={{ appState, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

afterEach(() => {
    jest.clearAllMocks();
});

const renderWithClient = (ui, appState) => {
    const { rerender, ...result } = render(
        <AppContext.Provider value={{ appState, dispatch }}>{ui}</AppContext.Provider>
    )
    return {
        ...result,
        rerender: (rerenderUi) =>
            rerender(
                <AppContext.Provider value={{ appState, dispatch }}>{rerenderUi}</AppContext.Provider>
            ),
    }
}

const renderQueryProvider = () => {
    render(<QueryClientProvider client={queryClient}>
        <AppProvider />
    </QueryClientProvider>)
}

describe('QuotePrice: When no qoute is selected', () => {
    it("should return intial state and vales", async () => {
        renderQueryProvider();
        const wrapper = getWrapper(state);
        const { result } = renderHook(() => useAppData(), { wrapper });
        expect(result.current.appState.addOns.length).toBe(0);
        
    })
    it("monthly default price should be £21.64", async () => {
        const renderedResult = renderWithClient(<QuotePrice
            baseMonthlyPrice={21.64}
            baseAnnualPrice={259.68}
            paymentType={false} />, state);
        expect(renderedResult.getByTestId("total-price").textContent).toBe("£21.64");
    })

    it("annual default price should be £259.68", async () => {
       const renderedResult = renderWithClient(<QuotePrice 
        baseMonthlyPrice={21.64} 
        baseAnnualPrice={259.68} 
        paymentType={true} />, state);
      expect(renderedResult.getByTestId("total-price").textContent).toBe("£259.68");
    })

})
let appState = { addOns: [{ id: 'Accidental Damage Cover', monthlyPrice: 8.42, annualPrice: 101 }], togglePayment: false };
const mockUseContext = jest.fn().mockImplementation(() => ({ appState, dispatch }));
React.useContext = mockUseContext;
describe('QuotePrice: When new qoute is added ', () => {
    it('When new quote is added', () => {
        renderQueryProvider();
        const wrapper = getWrapper(appState);
        const { result:{current}} = renderHook(() => useAppData(), { wrapper });
        expect(current.appState.addOns.length).toBe(1);
        expect(current.appState.togglePayment).toBe(false);
        expect(current.appState.addOns[0].id).toBeDefined();
        expect(current.appState.addOns[0].monthlyPrice).toBeDefined();
        expect(current.appState.addOns[0].annualPrice).toBeDefined();
    });
    it("total price should be £30.06 when payment type is monthly ", async () => {
        const renderedResult = renderWithClient(<QuotePrice 
            baseMonthlyPrice={21.64} 
            baseAnnualPrice={259.68} 
            paymentType={false} />, appState);
        expect(renderedResult.getByTestId("total-price").textContent).toBe("£30.06")
    })

    it("total price should be 360.68 when payment type is Annual ", async () => {
        const renderedResult = renderWithClient(<QuotePrice 
            baseMonthlyPrice={21.64} 
            baseAnnualPrice={259.68} 
            paymentType={true} />, appState);
        expect(renderedResult.getByTestId("total-price").textContent).toBe("£360.68");
    })
});