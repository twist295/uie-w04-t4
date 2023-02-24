import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';

const styles: { [key: string]: React.CSSProperties } = {
  container: { position: 'absolute', top: '90px', bottom: 0 }
}

function Root() {
  return (
    <div>
      <Header/>
      <div style={styles.container}><Outlet/></div>
      <Footer/>
    </div>
  )
}

export default Root
