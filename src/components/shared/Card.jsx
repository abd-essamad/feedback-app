

function Card({children, reverse}) {
  return (
    <div className={`feedback__item ${reverse && 'reverse'}`}>
      {children}
    </div>
  )
}
Card.defaultProps = {
    reverse : true
}
export default Card
