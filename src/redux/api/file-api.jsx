import {api} from "./Index.jsx";

const deleteFile = api.injectEndpoints({
  endpoints: (build) => ({
    deleteUploadFile: build.mutation({
      query: ({name}) => ({
        url: `/upload/delete/${name}`,
        method: 'DELETE'
      })
    })
  })
})

export const {useDeleteUploadFileMutation} = deleteFile
