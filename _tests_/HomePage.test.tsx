import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe('Home Page - Rendering', () => {
    it('Should have Home Page text', () => {
        render(<Home/>);
        expect(screen.getByText('Home page')).toBeInTheDocument()
    })
})