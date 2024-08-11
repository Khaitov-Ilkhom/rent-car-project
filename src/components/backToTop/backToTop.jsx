import {useEffect} from 'react'

const BackToTop = ({URL}) => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [URL]);
}
export default BackToTop