import Image from 'next/image'

export default function Servicos() {
  return (
    <section className=" md:container md:mx-auto bg-white">
      <div>
        <div>
          <img
            className="w-full"
            src="/img/servicosImgHead.svg"
            alt="KriolBeauty"
            width="100%"
            //sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
          />
          <h2 className="text-mygreen lg:text-5xl sm:text-3xl text-center lg:px-20 sm:px-4"> Os nossos serviços com os melhores 
            profissionais sempre disponíveis </h2>
        </div>

        <div>
        <div class="grid grid-cols-2 gap-4 text-center lg:px-44 sm:px-4">
          <div className="flex flex-col items-center justify-center py-14 px-4">
            <div className="border-2 border-yellow-500 rounded-3xl h-20 w-20 relative">
              <Image
                className=" rounded-3xl" 
                src="/img/nails.jpg" 
                alt="Unhas"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                
              />
            </div>
            <h3 className="my-4 text-gray-800 lg:text-3xl sm:text-2xl font-bold"> Unhas </h3>
            <p className="text-mygreen lg:text-lg md:text-md sm:text-sm px-20"> Manicure, pedicure, verniz gel, gel, acrílico, fibra de vidro e dipping. </p>
          </div>
          <div className="flex flex-col items-center justify-center py-14 px-4">
            <div className="border-2 border-yellow-500 rounded-3xl h-20 w-20 relative">
              <Image
                className=" rounded-3xl" 
                src="/img/make.jpg" 
                alt="Unhas"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                
              />
            </div>
            <h3 className="my-4 text-gray-800 lg:text-3xl sm:text-2xl font-bold"> Sobrancelhas </h3>
            <p className="text-mygreen lg:text-lg md:text-md sm:text-sm  px-20"> Design, henna/lifting, Extensão clássica, Volume russo e Mega volume russo. </p>
          </div>
          <div className="flex flex-col items-center justify-center py-14 px-4">
            <div className="border-2 border-yellow-500 rounded-3xl h-20 w-20 relative">
              <Image
                className=" rounded-3xl" 
                src="/img/hair.jpg" 
                alt="Unhas"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                
              />
            </div>
            <h3 className="my-4 text-gray-800 lg:text-3xl sm:text-2xl font-bold"> Cabelo </h3>
            <p className="text-mygreen lg:text-lg md:text-md sm:text-sm px-20"> Manicure, pedicure, verniz gel, gel, acrílico, fibra de vidro e dipping. </p>
          </div>
          <div className="flex flex-col items-center justify-center py-14 px-4">
            <div className="border-2 border-yellow-500 rounded-3xl h-20 w-20 relative">
              <Image
                className=" rounded-3xl" 
                src="/img/make2.jpg" 
                alt="Unhas"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
              />
            </div>
            <h3 className="my-4 text-gray-800 lg:text-3xl sm:text-2xl font-bold"> Maquiagem </h3>
            <p className="text-mygreen lg:text-lg md:text-md sm:text-sm px-20">Make up natural, de festa, sessão fotográfica e de noiva </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
    