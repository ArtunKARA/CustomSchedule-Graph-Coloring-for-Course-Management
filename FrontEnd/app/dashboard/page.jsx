import React from "react"
import Grid from "./grid"

export default function page() {
  return (
    <div className="flex flex-col">
      <Grid />
      <div className="flex justify-evenly pt-6">
        <button className="bg-blue-600 px-4 py-2 rounded-xl">
          Ders Programı Oluştur
        </button>
        <button className="bg-red-600 px-4 py-2 rounded-xl">Sonraki</button>
      </div>
    </div>
  )
}
