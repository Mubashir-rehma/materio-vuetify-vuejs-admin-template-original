import { HttpResponse, http } from 'msw'
import type { UserOut } from '@/plugins/fake-api/handlers/auth/types'
import { db } from '@db/auth/db'

export const handlerAuth = [

  http.post(('/api/auth/login'), async ({ request }) => {
    const { email, password } = await request.json() as { email: string; password: string }

    let errors: Record<string, string[]> = {
      email: ['Something went wrong'],
    }

    const user = db.users.find(u => u.email === email && u.password === password)

    if (user) {
      try {
        const accessToken = db.userTokens[user.id]

        // We are duplicating user here
        const userData = { ...user }

        const userOutData = Object.fromEntries(
          Object.entries(userData)
            .filter(
              ([key, _]) => !(key === 'password' || key === 'abilityRules'),
            ),
        ) as UserOut['userData']

        const response: UserOut = {
          userAbilityRules: userData.abilityRules,
          accessToken,
          userData: userOutData,
        }

        return HttpResponse.json(response,
          { status: 201 })
      }
      catch (e: unknown) {
        errors = { email: [e as string] }
      }
    }
    else {
      errors = { email: ['Invalid email or password'] }
    }

    return HttpResponse.json({ errors }, { status: 400 })
  }),
]
