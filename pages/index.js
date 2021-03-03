import Header from "./components/header"
import Servicos from "./components/servicos"
import Footer from "./components/Footer"
import Image from 'next/image'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Header/>
      <section className="h-screen bg-myorange ">
        <div className="md:container md:mx-auto sm:pt-16 lg:pt-24">
          <div className="">
            <Image
              src="/img/logos.png"
              alt="KriolBeauty"
              width={200}
              height={200}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="mt-4 col-span-2">
              <h2> 
                <span className="lg:text-7xl sm:text-5xl text-mygreen"> 
                  *Benvindo a 
                </span> <br/> 
                <span className="lg:text-9xl sm:text-6xl text-myorange pl-12"> Kriolbeauty </span> 
              </h2>
              <p className="text-mygreen mb-4 lg:text-2xl sm:text-1xl lg:pr-28 sm:pr-8 lg:mt-10 sm:mt-6"> 
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel ipsam perferendis atque reprehenderit libero ullam quidem 
                delectus velit quaerat sed, assumenda, rem animi porro, 
                nemo et dignissimos consectetur. Mollitia, eius." </p>
              <span className="text-md font-bold text-gray-600 block"> Vadnir Vieira </span>
              <span className="text-md font-bold text-gray-600">CEO</span>
            </div>
            <div className="-mt-20">
              <Image
                className="rounded-3xl"
                layout="responsive"
                src="/img/manicure.jpg"
                alt="KriolBeauty Serviços"
                width={150}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
      <Servicos/>
      <Footer/>
    </div>
    
  )
}
