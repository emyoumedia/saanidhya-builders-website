'use client'

import { AppProgressBar } from 'next-nprogress-bar'
import { Suspense } from 'react'

export default function ProgressBar() {
  return (
    <Suspense fallback={null}>
      <AppProgressBar
        height="2px"
        color="#FF6A1A"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Suspense>
  )
}