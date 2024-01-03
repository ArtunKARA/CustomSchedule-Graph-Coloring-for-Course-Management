"use client"

import React from "react"

export default function modal({ isVisible, onClose, children }) {
  const closeHandler = (e) => {
    if (e.target.id === "wrapper") onClose()
  }
  if (!isVisible) return null
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={closeHandler}
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-xl place-self-end pb-2"
          onClick={() => onClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            viewBox="0 0 512 512"
          >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
          </svg>
        </button>
        <div className="bg-white p-2 rounded text-black flex flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}
