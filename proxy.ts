import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COMING_SOON = process.env.COMING_SOON === 'true'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

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

  if (pathname === '/coming-soon') {
    return NextResponse.next()
  }

  if (!COMING_SOON) {
    return NextResponse.next()
  }

  return NextResponse.rewrite(new URL('/coming-soon', request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}