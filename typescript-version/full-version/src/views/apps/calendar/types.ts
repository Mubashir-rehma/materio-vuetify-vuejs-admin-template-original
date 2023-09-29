import type { Except } from 'type-fest'
import type { CalendarEvent } from '@db-types/apps/calendar/type'

export interface Event extends CalendarEvent {
  extendedProps: {
    calendar?: string
    location: string
    description: string
    guests: string[]
  }
}

export type NewEvent = Except<Event, 'id'>
