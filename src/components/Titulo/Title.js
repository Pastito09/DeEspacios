import './styles.css';

export const Title = ({ children, altText = '' }) => {
  return (
    <div className='title-container'>
      <h1 className='title'>{children}</h1>
      <h5 className='title'>{altText}</h5>
    </div>
  );
};

export default Title;
