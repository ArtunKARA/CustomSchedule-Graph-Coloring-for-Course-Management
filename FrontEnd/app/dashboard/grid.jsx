import React from "react"

export default function grid() {
  let divs = []
  for (let i = 0; i < 40; i++) {
    divs.push(i)
  }
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
          Saatler \ Günler
        </div>
        <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
          09:00-10:00
        </div>
        <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
          10:00-11:00
        </div>
        <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
          11:00-12:00
        </div>
        <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
          12:00-13:00
        </div>
        <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
          13:00-14:00
        </div>
        <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
          14:00-15:00
        </div>
        <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
          15:00-16:00
        </div>
        <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
          16:00-17:00
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
            Pazartesi
          </div>
          <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
            Salı
          </div>
          <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
            Çarşamba
          </div>
          <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
            Perşembe
          </div>
          <div className="w-56 h-16 flex items-center justify-center bg-white text-black border-[1px] border-black">
            Cuma
          </div>
        </div>
        <div className="grid grid-cols-5 grid-flow-row">
          {divs.map((div) => (
            <div
              className="w-30 h-16 bg-white flex items-end justify-end text-black border-[1px] border-black"
              key={div}
            >
              {div}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
