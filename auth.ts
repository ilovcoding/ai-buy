import NextAuth, { type DefaultSession } from 'next-auth'
import GitHub from 'next-auth/providers/github'

declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's id. */
      id: string
    } & DefaultSession['user']
  }
}

// export const {
//   handlers: { GET, POST },
//   auth,
//   CSRF_experimental // will be removed in future
// } = NextAuth({
//   providers: [GitHub],
//   callbacks: {
//     jwt({ token, profile }) {
//       if (profile) {
//         token.id = profile.id
//         token.image = profile.avatar_url || profile.picture
//       }
//       return token
//     },
//     authorized({ auth }) {
//       return !!auth?.user // this ensures there is a logged in user for -every- request
//     }
//   },
//   pages: {
//     signIn: '/sign-in' // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
//   }
// })

const auth = (): any => {
  return {
    GET: (params: any)=> {
      console.log("GET params", params)
      
    },
    POST: (params: any)=>{
      console.log("POST params", params)
    },
    user: {
      id: 'id_test',
      name: 'name',
      email: 'email',
      image: ''
    },  
  }
}

const GET = (params: any)=> {
  console.log("GET params", params)
  return new Response(JSON.stringify({data: ''}))

}

const POST = (params: any)=>{
  console.log("POST params", params)
  return new Response(JSON.stringify({data: ''}))

}

export { auth, GET, POST }
