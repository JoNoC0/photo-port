// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component renders', () => {
  it('renders', () => {
    render(<Nav />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
>>>>>>> feature/react-tests
=======
    
>>>>>>> feature/contact
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
<<<<<<< HEAD
<<<<<<< HEAD
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})
=======
=======
>>>>>>> feature/contact
  const { getByLabelText } = render(<Nav />);

  expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})  
<<<<<<< HEAD
>>>>>>> feature/react-tests
=======
>>>>>>> feature/contact

describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });

})