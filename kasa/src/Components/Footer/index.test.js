import Footer from './'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
    it('Should render Logo and  date', async () => {
        render(<Footer />)
        const footerLogo = screen.getByTestId('footerLogo')
        const footerText = screen.getByTestId('footerText')
        expect(footerLogo).toBeTruthy()
        expect(footerText).toBeTruthy()
    })
})
