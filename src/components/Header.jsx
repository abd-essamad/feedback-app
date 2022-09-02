function Header({text, bgColor}) {
    const headerStyle = {
        color: '#FF5555',
        backgroundColor: bgColor
    }
  return (
   
    <header style={headerStyle} >
       <div className="container">
         <h3>{text}</h3>
       </div>
    </header>
  )
}
Header.defaultProps = {
    text : 'feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    
}
export default Header
