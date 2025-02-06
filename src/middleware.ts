// import { getCookie } from 'cookies-next';
// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//     try {
//         const accessToken = getCookie('accessToken', { req });
//         if (!accessToken) {
//             return NextResponse.redirect(new URL('/login', req.url));
//         }
//     } catch (error) {
//         console.log('Error during token verification:', error);
//         return NextResponse.redirect(new URL('/login', req.url));
//     }
// }

// export const config = {
//     matcher: [ '/checkout', '/profile'],
// };

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/profile(.*)', '/checkout(.*)','/sign-in(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}