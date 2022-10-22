import { render, screen } from '@testing-library/react';
import {Header} from '../Header';

test('header should render with correct text', () => {
    const {getByTestId} = render(<Header titleText='HOME INSURANCE'/>);
    const titleElement = getByTestId("header-title");
    expect(titleElement.textContent).toBe('HOME INSURANCE');
});
  


