const CRTEffect = ({ children }) => {
    return (
      <div className="containerOverlay">
        <div className="overlay">
          {children}
        </div>
      </div>
    );
  };
  
  export default CRTEffect;