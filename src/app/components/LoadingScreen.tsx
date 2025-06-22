import React from 'react';

const LoadingScreen: React.FC = () => {
    console.log('LoadingScreen');
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-opacity duration-300">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Loading...</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Please wait while we prepare your dashboard</p>
            </div>
        </div>
    );
};

export default LoadingScreen; 