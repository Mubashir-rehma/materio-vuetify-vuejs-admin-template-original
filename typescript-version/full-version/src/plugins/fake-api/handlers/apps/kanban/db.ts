import type { KanbanData } from '@db/apps/kanban/types'
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import img5 from '@images/pages/5.jpg'

export const database: KanbanData = {
  boards: [
    {
      id: 1,
      title: 'In Progress',
      itemsIds: [1, 2, 3],
    },
    {
      id: 2,
      title: 'In Review',
      itemsIds: [4, 5],
    },
    {
      id: 3,
      title: 'Done',
      itemsIds: [6],
    },
  ],
  items: [
    {
      id: 1,
      title: 'Research FAQ page UX',
      dueDate: '2021-09-30',
      labels: ['UX'],
      members: [avatar1, avatar2],
      comments: 'No Comment',
      attachments: 2,
      commentsCount: 1,
      image: '',
    },
    {
      id: 2,
      title: 'Review JavaScript code',
      dueDate: '10 April, 2024',
      labels: ['Code Review'],
      members: [avatar3, avatar1, avatar2],
      comments: 'No Comment',
      attachments: 0,
      commentsCount: 0,
      image: '',
    },
    {
      id: 3,
      title: 'Review completed Apps',
      dueDate: '2021-09-30',
      labels: ['Dashboard'],
      members: [avatar1, avatar2],
      comments: 'No Comment',
      image: '',
      attachments: 0,
      commentsCount: 0,
    },
    {
      id: 4,
      title: 'Find new images for pages',
      dueDate: '2021-09-30',
      labels: ['Image'],
      members: [avatar1, avatar2],
      comments: 'No Comment',
      image: img5,
      attachments: 5,
      commentsCount: 4,
    },
    {
      id: 5,
      title: 'Forms & tables section',
      dueDate: '2021-09-30',
      labels: ['Bug'],
      members: [avatar1, avatar2],
      comments: 'No Comment',
      attachments: 7,
      commentsCount: 2,
      image: '',
    },
    {
      id: 6,
      title: 'Completed charts & maps',
      dueDate: '2021-09-30',
      labels: ['Bug'],
      members: [avatar1, avatar2],
      comments: 'No Comment',
      attachments: 1,
      commentsCount: 10,
      image: '',
    },
  ],
}
