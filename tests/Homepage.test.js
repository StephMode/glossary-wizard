import HomePage from '../src/components/pages/HomePage'
import { render, screen } from '@testing-library/react';

// what to test
// 1. elements being rendered as per AC ✅
// 2. elements having arialabelledby properties

// subject 1. is easy, I've got the logic already, only need to think about how to make it as DRY as possible ✅
// ⛰️ major challenge: find a way to test ARIA labels in jest ✅
// 🕵️ AFAIK right now, I only now of testing for text contents of ARIA labels || test for Vorhandensein of ARIAlabbeldby
// toBeInThe && toHaveAttribute best way to go because I want to test element by element (to keep the code composable) for it being in the document || being in the document.and.haveARIAlabel

// next steps: create proper testing setup with good nesting to prevent repition ✅
//  I think I can use beforeEach to render HomePage for each test
//  ?? do I want to test 1. toBe/ARIA forEach? || 2. toBe | ARIA || 3. each on their own

// 🩰 pivot: according to my research, not all elements should have ARIA labels, so maybe let's go for 2.

// next steps: compose test suite
// all tests need render() -> global describe block "Unit Test HomePage"
// forEach testable element 1 test case with 1 or 2 assertions

// found some methods that serve the purpose of this testing suite, see below, partic. heading tests
// usefull links for further tinkering 🧪
// https://rathoreaparna678.medium.com/testing-react-components-with-roles-a-guide-to-using-react-testing-library-7785d8de1ca7
// https://testing-library.com/docs/queries/bylabeltext
// https://github.com/testing-library/jest-dom#tohaveaccessibledescription



describe('Unit test for HomePage', () => {
    beforeEach(()=> 
        {render(<HomePage />);
    })
        test('has main navigation in header', () => {
            const mainNavigation = screen.getByRole('navigation')
            expect(mainNavigation).toBeInTheDocument();
            expect(mainNavigation).toHaveAttribute('aria-labelledby');
            
        });

        test('heading test 1--?', () => {
            const heading = screen.getByRole('heading')
            expect(heading).toBeInTheDocument(); 
            
        })
        // wahrscheinlich muss man das genauer identifizieren
        // bei 2 headings funktioniert dieser "selector" besser als Role
        test('heading test 2--ARIA', () => {
            const heading2 = screen.getByLabelText('he')
            // expect(heading).toBeInTheDocument(); 
            expect(heading2).not.toHaveAccessibleDescription('he')
        })



 
        test('test case para', () => {
            expect(screen.getByRole('paragraph')).toBeInTheDocument();
            // expect(screen.getByRole('paragraph')).toBeEmptyDOMElement(); this was to test 
            // if https://github.com/testing-library/jest-dom#tohaveaccessibledescription work at all
            // it does work
        });

        test('test case 3.', () => {
            expect(screen.getByRole('list')).toBeInTheDocument();
            expect(screen.getByRole('list')).toHaveAttribute('aria-labelledby');
        });

})

/* test('main nav ARIA', () => {
    const mainNavigationARIALabelText = screen.getByRole('navigation')
    expect(mainNavigationARIALabelText).toBe('top-nav'); 
}) */



    // const heading = screen.getByRole('heading');
    // expect(heading).toBeInTheDocument()
    // expect(heading).toHaveAttribute('aria-labelledby');
    
    // render(<HomePage/>);
    // const heading = screen.getByLabelText('heading');
    // expect(heading).toBeInTheDocument();
    // expect(heading).toBeInTheDocument();
    // const label = screen.getByLabelText('heading');
    // expect(label).toBe('heading')
