"use client";

import { AuthService } from 'app/services/authService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ErrorsAlert from "../../components/ErrorsAlert";
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Helpers } from 'app/utils/helpers';

const LoginPage: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await AuthService.login(email, password);
            console.log('Login successful:', response);
            
            // Store token in both localStorage and cookies
            localStorage.setItem('authToken', response.token);
            Cookies.set('authToken', response.token, { 
                expires: rememberMe ? 30 : 7, // 30 days if remember me is checked, 7 days otherwise
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            });
            
            setIsLoading(false);
            // Redirect to dashboard after successful login
            router.push('/app/dashboard');
        } catch (error:any) {
      
            console.log('Login failed:', error.response.data);
            if(error.response.data.errors){
              
                setErrors(error.response.data.errors);
                console.log("Errors:",errors)
            }
            else{
                const message = error.response.data.error || 'An error occurred. Please try again.';

                setErrors([{ message }]);
            }

            setIsLoading(false);
            // Handle login error (e.g., show error message)
        }
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(e); }}>
            <p className="h5 font-semibold mb-2 text-center">Sign In</p>
            <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back Jhon {errors.length} !</p>
            {errors.length > 0 && (
                <div className="mb-4 " >
                    <ErrorsAlert errors={errors} />
                </div>
            )}
            
            
        </form>
    );
};

export default LoginPage;