import './styles.css';

export const Title = ({ children, altText = '' }) => {
  return (
    <div className='title-container'>
      <h1 className='title'>{children}</h1>
      {altText !== '' && <h5 className=''>{altText}</h5>}
    </div>
  );
};

export default Title;
