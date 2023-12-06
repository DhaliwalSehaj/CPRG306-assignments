"use client";
import { useUserAuth } from "./_utils/auth-context";




export default function Page() {
    const { user, githubSignIn, firebaseSignout } = useUserAuth();

    
    const handleAuthentication = async () => {
        if (user) {
            await githubSignIn();
            await firebaseSignout();
        }
    };

    
    handleAuthentication();

    return (
        <main>
            <header>
                <p>
                    Welcome, {user ? `${user.displayName} (${user.email})` : 'Guest'}
                </p>
                <h1>Protected Page</h1>
            </header>
        </main>
    );
}
