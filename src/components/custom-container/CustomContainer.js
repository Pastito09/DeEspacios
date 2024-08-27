export const CustomContainer = ({ colBreakPoint = '', children }) => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div
          className={`section-text col col-md-${colBreakPoint} py-4`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomContainer;
