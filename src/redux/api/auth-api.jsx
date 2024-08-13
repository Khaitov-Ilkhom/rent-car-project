import {api} from './Index.jsx';

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (body) => ({
        url: '/auth/sign-in',
        method: 'POST',
        body
      })
    }),
    signUp: build.mutation({
      query: (body) => ({
        url: '/auth/sign-up',
        method: 'POST',
        body
      })
    }),
    verifyOtp: build.mutation({
      query: (body) => ({
        url: '/auth/otp-verify',
        method: 'POST',
        body
      })
    })
  })
})

export const {useSignInMutation, useSignUpMutation, useVerifyOtpMutation} = authApi