export function Tech({img, alt}) {
  return (
    <div className="tech-container">
      <div className="tech">
          <img src={`techs/${img}`} alt={alt} />
      </div>
      <p>{alt}</p>
    </div>
    
  );
}
export default Tech;
