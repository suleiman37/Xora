import { Element } from "react-scroll"
import { details, features } from "../assets/data/data"
import Marker from "../components/Marker"

const Features = () => {
  return (
    <Element name="feautures">
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 xl:mt-48 gap-10 p-10">

        {/* CARD 1 */}
          <div className="rounded-2xl bg-p2/20 p-10 lg:h-[500px] max-lg:-ml-9 max-lg:max-w-[350px] max-lg:mt-40">
        <img src="/images/feature-1.png" className="w-20"/>
        <p className="caption w-330 ml-4">Easy integration</p>
        <h2 className="font-poppins text-3xl font-extrabold mb-10">Work smarter not harder</h2>
        <p className="-mt-5">With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.</p>
        <button className="flex justify-center items-center bg-p2/25 px-2 py-1 rounded-2xl shadow-400 mt-3">
        <span className="ml-[10px] ">
          <Marker/>
        </span>
          <img src="/images/docs.svg" width={30}/>
          <span className="font-poppins uppercase font-bold text-p1 text-sm">Read the docs</span>
        </button>
        </div>
        
        <div className="rounded-2xl bg-p2/20 p-10 max-lg:-ml-9  max-lg:w-[350px] max-lg:mt-40">
        <img src="/images/feature-2.png" className="w-20"/>
        <p className="caption w-330 ml-4">Secure & trustworthy</p>
        <h2 className="font-poppins text-3xl font-extrabold mb-4">Sleep easy, we got your back</h2>
        <p className="font-poppins">Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox.</p>
        <button className="flex justify-center items-center bg-p2/25 px-2 rounded-[14px] py-1 shadow-400 mt-3">
        <span className="ml-[10px] ">
          <Marker/>
        </span>
          
          <img src="/images/docs.svg" width={30}/>
          <span className="font-poppins uppercase font-bold text-p1 text-sm">Read the docs</span>
        </button>

        </div>
         
        

      </section>

      {/* DETAILS */}
      <div className="max-lg:hidden lg:-mt-44 lg:w-[1200px] max-w-7xl mx-auto bg-p2/5 rounded-2xl p-10">
        <div className="flex justify-between">
        {details.map((det)=>(
          <div key={det.id}>
          <img src={det.icon} className="w-[60px] -mt-6"/>
          <h4 className="body-4">{det.title}</h4>
          </div>
          
          
        ))}

        </div>
      </div>

    </Element>
  )
}

export default Features