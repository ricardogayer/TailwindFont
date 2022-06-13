import React from 'react'

export const HeroesApp = () => {

  const handlerCanceler = () => {
    console.log('canceled')
  }

  const handlerConfirm = () => {
    console.log('confirmed')
 }


  return (
    <div className="m-4">
        <h1 className="text-transparent font-bold text-4xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 w-fit bg-clip-text"> Heroes App </h1>
        <h2 className="text-gray-500 text-md mt-1"> O site para amantes dos heróis de gibis</h2>
        <p className="text-gray-900 text-sm mt-4 mb-4 font-extralight italic"> Aqui você encontra as melhores histórias de gibi. Vonte a ser criança conosco. Assine agora e não perca a oportunidade! </p>
        <button className="w-32 border border-fuchsia-500 py-2 rounded-md text-fuchsia-500 hover:bg-fuchsia-50" onClick={handlerCanceler}> Cancelar </button>
        <button className="w-32 bg-indigo-500 py-2 text-white rounded-md mt-2 hover:bg-indigo-700 ml-4 border border-indigo-500" onClick={handlerConfirm}> Enviar </button>
    </div>
  )
}
