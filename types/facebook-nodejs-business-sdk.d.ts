declare module 'facebook-nodejs-business-sdk' {
  export class EventRequest {
    constructor(accessToken: string, pixelId: string)
    setEvents(events: ServerEvent[]): this
    setTestEventCode(code: string): this
    execute(): Promise<any>
  }

  export class ServerEvent {
    setEventName(name: string): this
    setEventTime(time: number): this
    setEventId(id: string): this
    setEventSourceUrl(url: string): this
    setActionSource(source: string): this
    setUserData(userData: UserData): this
    setCustomData(customData: CustomData): this
  }

  export class UserData {
    setFbc: any;
    setFbp(fbp: any) {
      throw new Error('Method not implemented.');
    }
    setClientIpAddress(ip: string): this
    setClientUserAgent(ua: string): this
    setPhone(phone: string): this
    setEmail(email: string): this
  }

  export class CustomData {
    setValue(value: number): this
    setCurrency(currency: string): this
  }
}