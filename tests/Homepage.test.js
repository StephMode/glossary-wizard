import HomePage from '../src/components/pages/HomePage'
import { render, screen } from '@testing-library/react';


describe('Unit test for HomePage', () => {
    beforeEach(()=> 
        {render(<HomePage />);
    })
    test('Has main navigation in header with ally description', () => {
        const mainNavigationARIALabel = 'main-navigation';    
        const mainNavigation = screen.getByLabelText(mainNavigationARIALabel)
        expect(mainNavigation).toBeInTheDocument();
        expect(mainNavigation).toHaveAttribute('aria-label');
        });

    test('Has page navigation in header with ally description', () => {
        const pageNavigationARIALabel = 'page-navigation';    
        const pageNavigation = screen.getByLabelText(pageNavigationARIALabel)
        expect(pageNavigation).toBeInTheDocument(); 
        expect(pageNavigation).toHaveAttribute('aria-label')
        })
    
    test('Has main that holds the main contents outline with ally description', () => {
        const main = screen.getByRole('main')
        expect(main).toBeInTheDocument();
        expect(main).not.toHaveAccessibleDescription() 
    })

    test('Has aside that serving as the main contents outline with ally description', () => {
        const aside = screen.getByRole('complementary')
        expect(aside).toBeInTheDocument();
        expect(aside).not.toHaveAccessibleDescription()
        })

})
