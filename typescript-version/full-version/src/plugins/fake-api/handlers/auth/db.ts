import type { User } from '@/plugins/fake-api/handlers/auth/type'

import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'

interface DB {
  userTokens: string[]
  users: User[]
  accessTokenSecret: string
  refreshTokenSecret: string
}
export const db: DB = {
  // TODO: Use jsonwebtoken pkg
  // ℹ️ Created from https://jwt.io/ using HS256 algorithm
  // ℹ️ We didn't created it programmatically because jsonwebtoken package have issues with esm support. View Issues: https://github.com/auth0/node-jsonwebtoken/issues/655
  userTokens: [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJleHAiOjE5MTU0NDAwMDB9.S_1mZf42koVtUqOLK2c8jXiR-3BAHSMvt1IhO-bMCRk',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJleHAiOjE5MTU0NDAwMDB9.AEm_Db6oNcUZabvSAxMUbk97gpBzdcFlD30ILSzea2A',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6M30.PGOfMaZA_T9W05vMj5FYXG5d47soSPJD1WuxeUfw4L4',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NH0.d_9aq2tpeA9-qpqO0X4AmW6gU2UpWkXwc04UJYFWiZE',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NX0.ocO77FbjOSU1-JQ_BilEZq2G_M8bCiB10KYqtfkv1ss',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nn0.YgQILRqZy8oefhTZgJJfiEzLmhxQT_Bd2510OvrrwB8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6N30.KH9RmOWIYv_HONxajg7xBIJXHEUvSdcBygFtS2if8Jk',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OH0.shrp-oMHkVAkiMkv_aIvSx3k6Jk-X7TrH5UeufChz_g',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OX0.9JD1MR3ZkwHzhl4mOHH6lGG8hOVNZqDNH6UkFzjCqSE',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTB9.txWLuN4QT5PqTtgHmlOiNerIu5Do51PpYOiZutkyXYg',
  ],

  accessTokenSecret: '2341a02c45f68cef3f43aabfaa541d27c96498892d1d56ee907201d921629a81239b0cd54d42047101b3af794c88e8d61222dada2cefed3cf7a993a01db7f353',
  refreshTokenSecret: 'e6a6f1de00152a294a0cfebf1705b732677e97a6b0d2a858babfa881c5a9ea1b18d86406ba94c7ff45535044e925b2154fcd1a9adbb92cd8fbbe82db124488e9',

  users: [
    {
      id: 1,
      fullName: 'John Doe',
      username: 'johndoe',
      password: 'admin',

      avatar: avatar1,
      email: 'admin@demo.com',
      role: 'admin',
      abilityRules: [
        {
          action: 'manage',
          subject: 'all',
        },
      ],
    },
    {
      id: 2,
      fullName: 'Jane Doe',
      username: 'janedoe',
      password: 'client',

      avatar: avatar2,
      email: 'client@demo.com',
      role: 'client',
      abilityRules: [
        {
          action: 'read',
          subject: 'AclDemo',
        },
      ],
    },
  ],
}
