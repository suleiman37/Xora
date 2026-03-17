import Donwlaod from "./section/Donlaod"
import Faq from "./section/Faq"
import Feautures from "./section/Feutures"
import Header from "./section/header"
import Hero from "./section/hero"
import Pricing from "./section/Pricing"
import Testimonial from "./section/Testimonial"

const App=()=>{
  return(
    <main className="overflow-hidden">
      <Header/>
      <Hero/>
      <Feautures/>
      <Pricing className="mt-20"/>
      <Faq/>
      <Testimonial/>
      <Donwlaod/>
    </main>
  )
}
export default App