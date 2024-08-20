import bg from "../../images/404-error-page.gif"

const NotFound = () => {
  return (
      <div style={{'--image-url': `url(${bg})`}}
           className="!w-screen !h-screen bg-[image:var(--image-url)] bg-center bg-no-repeat bg-white">
      </div>
  )
}
export default NotFound