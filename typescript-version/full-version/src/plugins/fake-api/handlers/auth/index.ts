import { rest } from 'msw'
import { db } from '@/plugins/fake-api/handlers/auth/db'
import type { UserOut } from '@/plugins/fake-api/handlers/auth/type'
import { buildURL } from '@/plugins/fake-api/utils/buildURL'

export const handlerAuth = [

  rest.post(buildURL('auth/login'), async (req, res, ctx) => {
    const { email, password } = await req.body as { email: string; password: string }

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

        return res(
          ctx.status(200),
          ctx.json(response),
        )
      }
      catch (e: unknown) {
        errors = { email: [e as string] }
      }
    }
    else {
      errors = { email: ['Invalid email or password'] }
    }

    return res(
      ctx.status(400),
      ctx.json({ errors }),
    )
  }),
]