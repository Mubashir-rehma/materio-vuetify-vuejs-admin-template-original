import { CalendarEvent } from '@/@fake-db/apps/calendar';

export type NewEvent = SetOptional<Event, 'id'>

export interface Event extends CalendarEvent {
  extendedProps: {
    calendar: string
    location: string
    description: string
    guests: string[]
  }
}
