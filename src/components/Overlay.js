const CRTEffect = ({ children }) => {
    return (
      <div className="container">
        <div className="overlay">
          {children}
        </div>
      </div>
    );
  };
  
  export default CRTEffect;