
"use client";

import { useEffect, useState } from 'react';
import MasterLayout from './layouts/backend/MasterLayout';
// import AuthMasterLayout from './layouts/auth/AuthMasterLayout';
// import LoadingScreen from './components/LoadingScreen';
// import Cookies from 'js-cookie';
// import { usePathname } from 'next/navigation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Start with null state to indicate loading
    // const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    // const [showLoading, setShowLoading] = useState(true);
    // const pathname = usePathname();

    // Determine if the current path is an auth page
    // const isAuthPage = pathname?.startsWith('/auth');
    // // Determine if the current path is a dashboard/app page
    // const isAppPage = pathname?.startsWith('/app');

    // useEffect(() => {
    //     // Check if user is authenticated by looking for auth token in cookies
    //     // const checkAuth = () => {
    //     //     const cookieToken = Cookies.get('authToken');
    //     //     setIsAuthenticated(!!cookieToken);
    //     // };

    //     // checkAuth();

    //     // Set up event listener for storage changes
    //     // const handleStorageChange = () => {
    //     //     checkAuth();
    //     // };
    //     // window.addEventListener('storage', handleStorageChange);

    //     // Hide loading screen after a minimum delay to prevent flashing
    //     const timer = setTimeout(() => {
    //         setShowLoading(false);
    //     }, 800);

    //     return () => {
    //         clearTimeout(timer);
    //         window.removeEventListener('storage', handleStorageChange);
    //     };
    // }, []);


    return (
        <>
        <MasterLayout>
                    {children}
                    </MasterLayout>
                    </>
    )
 
 
}