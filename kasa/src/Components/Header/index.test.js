import Header from './'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
    it('Should render Logo and  Menu', async () => {
        render(<Header />)
        const headerLogo = screen.getByTestId('logo')
        const headerMenu = screen.getByTestId('headerMenu')
        expect(headerLogo).toBeTruthy()
        expect(headerMenu).toBeTruthy()
    })
})
