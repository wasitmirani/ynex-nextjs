import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Check for token in cookies
    const cookieToken = request.cookies.get('authToken')?.value
    // Check for token in Authorization header (which will be set from localStorage)
    const authHeader = request.headers.get('Authorization')
    const headerToken = authHeader?.replace('Bearer ', '')
    
    const token = cookieToken || headerToken
    const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
    const isAppPage = request.nextUrl.pathname.startsWith('/app')

    // Redirect root app route to login if not authenticated
    // if (!token && (request.nextUrl.pathname === '/app' || request.nextUrl.pathname === '/')) {
    //     return NextResponse.redirect(new URL('/auth/login', request.url))
    // }

    // If user is not authenticated and trying to access app pages
    // if (!token && isAppPage) {
    //     return NextResponse.redirect(new URL('/auth/login', request.url))
    // }

    // If user is authenticated and trying to access auth pages
    // if (token && isAuthPage) {
        // return NextResponse.redirect(new URL('/app/dashboard', request.url))
    // }

    return NextResponse.next()
}

export const config = {
    matcher: ['/','/app/:path*', '/auth/:path*']
} 