export interface CalendarEvent {
  id: number
  url: string
  title: string
  start: Date | string
  end: Date | string
  allDay: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extendedProps: Record<string, any>
}
