import { ClimbingBoxLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
      }}
    >
      <ClimbingBoxLoader 
        color="purple" // Loader color updated to purple
        size={15} 
        speedMultiplier={1} 
      />
      <br />
      <h1 
        className="fs-3 fw-bolder fst-italic" 
        style={{ color: 'gold' }} // Text color updated to gold
      >
        Welcome To VisiFlux
      </h1>
    </div>
  );
};

export default Loading;
