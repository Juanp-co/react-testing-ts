interface UserProfileProps {
    displayName: string;
    userName: string;
    email: string;
    isEmailVerified: boolean;
}

export const UserProfile  = ({
    displayName,
    userName,
    email,
    isEmailVerified
}: UserProfileProps) => (
    <div>
        <div>
            <span>Display Name:{' '} 
                { displayName.length > 30 
                ? displayName.slice(0,28).concat('...')
                : displayName }
            </span>
        </div>
        <div>
            <span>Username: { userName }</span>
        </div>
        <div>
            <span>Email: { email }</span>
        </div>
        <div>
            Verified: 
            <span>
                { isEmailVerified ? 'Email Verified' : 'Email Not Verified' }
            </span>
        </div>
    </div>
)