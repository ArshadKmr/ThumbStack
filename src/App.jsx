import './App.css'
import Footer from './components/Footer/Footer'
import Group from './components/Group/Group'
import Group2 from './components/Group/Group2'
import Group3 from './components/Group/Group3'
import Group4 from './components/Group/Group4'
import InteractiveDots from './components/InteractiveDots/InteractiveDots'
import Intro from './components/Intro/Intro'
import NavBar from './components/NavBar/NavBar'
import StickyNavBar from './components/NavBar/StickyNavBar'
import TopNotificationBar from './components/NavBar/TopNotificationBar'
import Products from './components/Products/Products'
import Subscribe from './components/Subscribe/Subscribe'
import Trainers from './components/Testimonials/Trainers'

function App() {

  return (
    <>
      <TopNotificationBar />
      <StickyNavBar />
      <NavBar />
      <Intro />
      <Products />
      <Group />
      <InteractiveDots />
      <Trainers />
      <Group2 />
      <Group3 />
      <Group4 />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
