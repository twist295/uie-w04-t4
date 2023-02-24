const styles: { [key: string]: React.CSSProperties } = {
  bar: {
    backgroundColor: '#7C2855', position: 'absolute', bottom: 0, left: 0, right: 0 
  },
  text: { color: 'white', textAlign: 'center' }
}

function Footer() {
  return (
    <div style={styles.bar}>
      <h3 style={styles.text}>User Interaction Engineering - Section W01 - Team 4</h3>
      <h5 style={styles.text}>Alvin Abia | Elise Letnaunchyn | Teme Woldesenbet</h5>
    </div>
  )
}

export default Footer
