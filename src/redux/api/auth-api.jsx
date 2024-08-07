import {api} from './Index.jsx';

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    singIn: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body
      })
    }),
    singUp: build.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body
      })
    }),
    verifyOtp: build.mutation({
      query: (body) => ({
        url: '/auth/verify-otp',
        method: 'POST',
        body
      })
    })
  })
})

export const {useSingInMutation, useSingUpMutation, useVerifyOtpMutation} = authApi