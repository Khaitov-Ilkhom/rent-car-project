import bg from "../../images/HTML-404-Error-Page.gif"

const NotFound = () => {
  return (
      <div style={{'--image-url': `url(${bg})`}}
           className="!w-screen !h-screen bg-[image:var(--image-url)] bg-center bg-no-repeat bg-black">
      </div>
  )
}
export default NotFound