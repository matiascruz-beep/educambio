import React from 'react'

export default function Form ({sect1, sect2, sect3, sect4, sect5, sect6}) {
    return (<form action="#"method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8  gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" className="block text-sm font-semibold leading-6 text-white">{sect1}</label>
            <div className="mt-2.5">
              <input type="text" name="nombre" id="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <label for="last-name" className="block text-sm font-semibold leading-6 text-white ">{sect2}</label>
            <div className="mt-2.5">
              <input type="text" name="profesion" id="profession" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          
            <div>
              <label for="first-name" className="block text-sm font-semibold leading-6 text-white">{sect3}</label>
              <div className="mt-2.5">
                <input type="tel" name="celular" id="cellphone" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
          
          
            <div>
              <label for="last-name" className="block text-sm font-semibold leading-6 text-white ">{sect4}</label>
              <div className="mt-2.5">
                <input type="text" name="provincia" id="province" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
        
              <div>
                <label for="first-name" className="block text-sm font-semibold leading-6 text-white">{sect5}</label>
                <div className="mt-2.5">
                  <input type="tel" name="documento" id="identity" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              
              <div>
                <label for="last-name" className="block text-sm font-semibold leading-6 text-white ">{sect6}</label>
                <div className="mt-2.5">
                  <input type="text" name="localidad" id="state" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
         
              <div className="mt-10 ml-48">
                <button type="submit" className=" rounded-full w-40 bg-[#0063C7] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarme</button>
              </div>

            </div>
      </form>
  
</div>

    )
}