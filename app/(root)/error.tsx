'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';




const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
            <button onClick={() => router.push('/')}>Go to Home</button>
        </div>
    );
};

export default ErrorPage;