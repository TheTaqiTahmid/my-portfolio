import taqimugshot from '../../src/assets/PhotoRoom_20201011_002118.jpg'

const Photo = () => {
  return (
    <div className="py-3">
      <img
        className="relative mx-auto rounded-full w-80 h-80 object-cover"
        src={taqimugshot}
        alt="mugshot"
      />
    </div>
  )
}
export default Photo
