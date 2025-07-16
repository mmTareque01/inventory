const Card = ({ children, cardClass }) => {
  return (
    <div className={`border border-transparent rounded-md shadow-md overflow-hidden ${cardClass}`}>
      {children}
    </div>
  );
};

export default Card;