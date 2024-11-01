import {Flex, Spin, Typography} from 'antd';
import {Suspense} from "react";

const {Title} = Typography
const Loading = () => {
  return (
      <div className="w-full h-screen flex justify-center items-center">
        <Flex align="center" gap="middle">
          <Spin tip="Loading..." size="large" />
        </Flex>
      </div>
  )
}

const SuspenseElement = ({children}) => {
  return (
      <Suspense fallback={<Loading/>}>
        {children}
      </Suspense>
  )
}

const ContentTitle = ({children, ...props}) => {
  return <Title level={3} {...props}>{children}</Title>
}

export const Container = ({children}) => {
  return (
      <div className='main-container'>
        {children}
      </div>
  )
}


export {Loading, SuspenseElement, ContentTitle}