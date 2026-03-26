import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COMING_SOON = process.env.NEXT_PUBLIC_COMING_SOON === 'true'
const SECRET = process.env.NEXT_PUBLIC_SECRET_CODE

export default function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  const isAllowed = searchParams.get('preview') === SECRET
  const hasAccess = request.cookies.get('preview')?.value === 'true'

  // Allow static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/logo') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  console.log("PROXY RUNNING")
  
  // If friend uses secret link → set cookie
  if (isAllowed) {
    const res = NextResponse.next()
    res.cookies.set('preview', 'true')
    return res
  }

  // Allow coming soon page
  if (pathname === '/coming-soon') {
    return NextResponse.next()
  }

  // Allow full site if allowed
  if (!COMING_SOON || hasAccess) {
    return NextResponse.next()
  }

  // Otherwise rewrite + fix header/footer issue
const requestHeaders = new Headers(request.headers)
requestHeaders.set('x-pathname', '/coming-soon')

return NextResponse.rewrite(new URL('/coming-soon', request.url), {
  request: { headers: requestHeaders },
})

}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}