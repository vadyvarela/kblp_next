export default function Header() {
  return (
    <header className="h-screen bg-headerimg bg-cover">
      <div className=" md:container md:mx-auto">
        <div className="flex justify-between items-center pt-12">
          <div className="para Img">
            <img src="img/logop.svg" alt="KriolBeauty"/>
          </div>
          <div className="">
            <ul className="flex items-center justify-center text-white space-x-20">
              <li> <a className="lg:text-lg md:text-sm font-bold" href="#"> Home </a> </li>
              <li> <a className="lg:text-lg md:text-sm font-bold" href="#"> Sobre </a> </li>
              <li> <a className="lg:text-lg md:text-sm font-bold" href="#"> Serviços </a> </li>
              <li className="border-2 border-yellow-500 rounded-2xl py-0.5 px-3 font-bold"> 
                <a className="lg:text-lg md:text-sm" href="#"> Recrutamento </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="h-screen flex flex-col items-start justify-center">
          <div>
            <h2 className="text-white lg:text-7xl font-light sm:text-4xl">  Levamos até si <br /> serviços de beleza <br /> e estética </h2>
          </div>
          <div className="flex mt-5">
            <img className="seta" width="50" src="img/arrowLeft.svg" />
            {/* <img class="appstore ml-2 mb-3" src="img/appstore.jpg" />
            <img class="googlestore ml-3 " src="img/googlestore.jpg" /> */}
          </div>
        </div>
      </div>
    </header>
  )
}
  