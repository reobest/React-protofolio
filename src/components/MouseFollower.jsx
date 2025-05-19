
const MouseFollower = ({ x, y }) => {
  return (
    <div
      className="fixed z-[999] w-[10px] h-[10px] bg-white rounded-full pointer-events-none transition-all duration-300 ease-out"
      style={{
        top: `${y - 2.5}px`,
        left: `${x - 2.5}px`,
      }}
    />
  );
};

export default MouseFollower;

