import Image from 'next/image'

export default function Porque() {
  return (
    <section className="bg-gradient-to-r from-greenBold to-greenLight">
      <div>
        <div>
        <div className="grid grid-cols-3 gap-4 lg:px-44 sm:px-4">

          <div className="flex flex-row justify-center py-14 px-4">
            <div className="h-20 w-20 relative">
              <Image
                className="" 
                src="/img/hour.svg" 
                alt="Horario kriolbeauty"
                width="100"
                height="100"
              />
            </div>
            <div>
              <h3 className="my-4 text-mywhite lg:text-3xl sm:text-2xl font-bold px-5 uppercase"> Horário </h3>
              <p className="text-mywhite lg:text-lg md:text-md sm:text-sm px-5"> Manicure, pedicure, verniz gel, gel, acrílico, fibra de vidro. </p>
            </div>
          </div>

          <div className="flex flex-row justify-center py-14 px-4">
            <div className="h-20 w-20 relative">
              <Image
                className="" 
                src="/img/smile.svg" 
                alt="Horario kriolbeauty"
                width="100"
                height="100"
              />
            </div>
            <div>
              <h3 className="my-4 text-mywhite lg:text-3xl sm:text-2xl font-bold px-5 uppercase"> Voce escolhe </h3>
              <p className="text-mywhite lg:text-lg md:text-md sm:text-sm px-5"> Manicure, pedicure, verniz gel, gel, acrílico, fibra de vidro. </p>
            </div>
          </div>

          <div className="flex flex-row justify-center py-14 px-4">
            <div className="h-20 w-20 relative">
              <Image
                className="" 
                src="/img/smile.svg" 
                alt="Horario kriolbeauty"
                width="100"
                height="100"
              />
            </div>
            <div>
              <h3 className="my-4 text-mywhite lg:text-3xl sm:text-2xl font-bold px-5 uppercase"> Onde quiser </h3>
              <p className="text-mywhite lg:text-lg md:text-md sm:text-sm px-5"> Manicure, pedicure, verniz gel, gel, acrílico, fibra de vidro. </p>
            </div>
          </div>

          <div className="flex flex-row justify-center py-14 px-4">
            <div className="h-20 w-20 relative">
              <Image
                className="" 
                src="/img/heart.svg" 
                alt="kriolbeauty"
                width="100"
                height="100"
              />
            </div>
            <div>
              <h3 className="my-4 text-mywhite lg:text-3xl sm:text-2xl font-bold px-5 uppercase"> Excelencia </h3>
              <p className="text-mywhite lg:text-lg md:text-md sm:text-sm px-5"> Manicure, pedicure, verniz gel, gel, acrílico, fibra de vidro. </p>
            </div>
          </div>

          <div className="flex flex-row justify-center py-14 px-4">
            <div className="h-20 w-20 relative">
             
            </div>
          </div>

          <div className="flex flex-row justify-center py-14 px-4">
            <div className="h-20 w-20 relative">
              <Image
                className="" 
                src="/img/smile.svg" 
                alt="kriolbeauty"
                width="100"
                height="100"
              />
            </div>
            <div>
              <h3 className="my-4 text-mywhite lg:text-3xl sm:text-2xl font-bold px-5 uppercase"> Pagamento </h3>
              <p className="text-mywhite lg:text-lg md:text-md sm:text-sm px-5"> Manicure, pedicure, verniz gel, gel, acrílico, fibra de vidro. </p>
            </div>
          </div>

        </div>
        <img
            className="w-full"
            src="/img/servicosImgFooter.svg"
            alt="KriolBeauty"
            width="100%"
            //sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
          />
        </div>
      </div>
    </section>
  )
}
    