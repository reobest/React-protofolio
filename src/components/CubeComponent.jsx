import Cubespinner from './Cubespinner'
const CubeComponent = () => {
    return (
        <div className='relative w-full h-[400px] bg-black flex justify-center items-center border-b border-white/5'>
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/15 rounded-full blur-3xl z-0"></div>
            <Cubespinner />
        </div>
    )
}

export default CubeComponent