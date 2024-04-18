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
      dueDate: '',
      labels: ['UX'],
      members: [{ img: avatar1, name: 'John Doe' }, { img: avatar2, name: 'Jane Smith' }],
      comments: 'FAQ page design is ready and needs to be implemented.',
      attachments: 2,
      commentsCount: 1,
      image: '',
    },
    {
      id: 2,
      title: 'Review JavaScript code',
      dueDate: '',
      labels: ['Code Review'],
      members: [{ img: avatar3, name: 'Robert Johnson' }, { img: avatar1, name: 'John Doe' }, { img: avatar2, name: 'Jane Smith' }],
      comments: 'JavaScript code needs to be reviewed and refactored.',
      attachments: 2,
      commentsCount: 4,
      image: '',
    },
    {
      id: 3,
      title: 'Review completed Apps',
      dueDate: '',
      labels: ['Dashboard'],
      members: [{ img: avatar1, name: 'John Doe' }, { img: avatar2, name: 'Jane Smith' }],
      comments: 'Apps design is ready and needs to be implemented.',
      image: '',
      attachments: 5,
      commentsCount: 10,
    },
    {
      id: 4,
      title: 'Find new images for pages',
      dueDate: '',
      labels: ['Image'],
      members: [{ img: avatar1, name: 'John Doe' }, { img: avatar2, name: 'Jane Smith' }],
      comments: 'New images need to be found for the new pages.',
      image: img5,
      attachments: 5,
      commentsCount: 4,
    },
    {
      id: 5,
      title: 'Forms & tables section',
      dueDate: '',
      labels: ['Bug'],
      members: [{ img: avatar1, name: 'John Doe' }, { img: avatar2, name: 'Jane Smith' }],
      comments: 'Forms and tables need to be updated.',
      attachments: 7,
      commentsCount: 2,
      image: '',
    },
    {
      id: 6,
      title: 'Completed charts & maps',
      dueDate: '',
      labels: ['Bug'],
      members: [{ img: avatar1, name: 'John Doe' }, { img: avatar2, name: 'Jane Smith' }],
      comments: 'Charts and maps need to be updated.',
      attachments: 1,
      commentsCount: 10,
      image: '',
    },
  ],
}
