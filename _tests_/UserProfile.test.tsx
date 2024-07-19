import { UserProfile } from "@/components/UserProfile"
import { render, screen } from "@testing-library/react";


describe('UserProfile - Rendering', () => {

    it('should have text Email Verified when isEmailVerified', () => {
        render(
            <UserProfile
                displayName="Coddy The Developer"
                userName="coddydev"
                email="coddydev@gmail.com"
                isEmailVerified={true}
            />
        );
        expect(screen.getByText('Email Verified')).toBeInTheDocument();
    })

    it('should have text Email Verified when isEmailVerified is false', () => {
        render(
            <UserProfile
                displayName="Coddy The Developer"
                userName="coddydev"
                email="coddydev@gmail.com"
                isEmailVerified={false}
            />
        );
        expect(screen.queryByText('Email Verified')).not.toBeInTheDocument();
        expect(screen.getByText('Email Not Verified')).toBeInTheDocument();
    })

    it('should have display name end with three dots when length is greater than 30 characters', () => {
        render(
            <UserProfile
                displayName="Coddy The Developer Coddy The Developer Coddy The Developer Coddy The Developer Coddy The Developer"
                userName="coddydev"
                email="coddydev@gmail.com"
                isEmailVerified={false}
            />
        );
        const displayNameSpanElement = screen.getByText(/Display Name: /);
        expect(displayNameSpanElement).toHaveTextContent(/.*\.\.\./)
    })

    it('should not have three dots at end of display name when less than 30 characters', () => {
        render(
            <UserProfile
                displayName="Coddy "
                userName="coddydev"
                email="coddydev@gmail.com"
                isEmailVerified={false}
            />
        );
        const displayNameSpanElement = screen.getByText(/Display Name: /);
        expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./)
    })

})