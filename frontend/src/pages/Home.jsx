import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/> 
      {/* <OurPolicy/> */}
      {/* <NewsLetterBox/> */}
    </div>
  )
}

export default Home
