import { render, screen } from '@testing-library/react';
import {ExtraCoverTitle} from '../ExtraCoverTitle';


test('header should render with correct text', () => {
    const {getByTestId} = render(<ExtraCoverTitle titleTxt='Tailor your cover with our optional extra'/>);
    const titleElement = getByTestId("cover-title");
    expect(titleElement.textContent).toBe('Tailor your cover with our optional extra');
});
  


