// "use client"
import Link from 'next/link';
import { ReactNode, useEffect } from 'react';


export default function AuthMasterLayout({ children }: { children: ReactNode }) {
    useEffect(() => {   
        // Initialize any client-side Scripts here
        if (typeof window !== 'undefined') {
            // Add any initialization code here
        }
    }, []);
    return (
        < >
         
     
                                        {children}
        </>
    );
}
