import { NextRequest, NextResponse } from 'next/server'
import {
  EventRequest,
  UserData,
  CustomData,
  ServerEvent,
} from 'facebook-nodejs-business-sdk'

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID!
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN!
const TEST_CODE = process.env.META_TEST_EVENT_CODE

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { eventName, eventId, userData, customData, fbc, fbp } = body

    const user = new UserData()
  .setClientIpAddress(req.headers.get('x-forwarded-for') || '')
  .setClientUserAgent(req.headers.get('user-agent') || '')

  if (fbc) user.setFbc(fbc)
  if (fbp) user.setFbp(fbp)

    if (userData?.phone) user.setPhone(userData.phone)
    if (userData?.email) user.setEmail(userData.email)

    const custom = new CustomData()
    if (customData?.value) custom.setValue(customData.value)
    if (customData?.currency) custom.setCurrency(customData.currency)

    const event = new ServerEvent()
      .setEventName(eventName)
      .setEventTime(Math.floor(Date.now() / 1000))
      .setEventId(eventId)
      .setEventSourceUrl(body.url)
      .setActionSource('website')
      .setUserData(user)
      .setCustomData(custom)

    const request = new EventRequest(ACCESS_TOKEN, PIXEL_ID)
      .setEvents([event])

    if (TEST_CODE) request.setTestEventCode(TEST_CODE)

    await request.execute()

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('CAPI error:', err)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}