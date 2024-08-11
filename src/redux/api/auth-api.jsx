import {api} from './Index.jsx';

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (body) => ({
        url: '/auth/signin',
        method: 'POST',
        body
      })
    }),
    signUp: build.mutation({
      query: (body) => ({
        url: '/auth/signup',
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