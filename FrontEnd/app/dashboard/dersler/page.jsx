"use client"
import React from "react"
import Modal from "@/app/components/modal"
import { useState } from "react"

export default function page() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Ders Oluştur</h3>
          <form action="">
            <textarea
              placeholder="json datası olacak burada"
              className="w-full my-5 border-2 border-gray-300 rounded h-64"
              type="text"
            />
            <button
              className="place-self-start bg-blue-500 text-white px-4 py-2 rounded"
              type="submit"
            >
              Oluştur
            </button>
          </form>
        </div>
      </Modal>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-8 py-6">
                Ders Adı
              </th>
              <th scope="col" className="px-8 py-6">
                Sınıf
              </th>
              <th scope="col" className="px-8 py-6">
                Dersi Veren Öğretmen
              </th>
              <th scope="col" className="px-8 py-6">
                Öğrenci Sayısı
              </th>
              <th scope="col" className="px-8 py-6">
                <button onClick={() => setShowModal(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white  even:bg-gray-50  border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Bilişim Sistemleri Mühendisliğine Giriş
              </th>
              <td className="px-6 py-4">1041</td>
              <td className="px-6 py-4">Serdar Solak</td>
              <td className="px-6 py-4">120</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="font-medium text-blue-600  hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 512 512"
                  >
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="odd:bg-white  even:bg-gray-50  border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Bilişim Sistemleri Mühendisliğine Giriş
              </th>
              <td className="px-6 py-4">1041</td>
              <td className="px-6 py-4">Serdar Solak</td>
              <td className="px-6 py-4">120</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="font-medium text-blue-600  hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 512 512"
                  >
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="odd:bg-white  even:bg-gray-50  border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Bilişim Sistemleri Mühendisliğine Giriş
              </th>
              <td className="px-6 py-4">1041</td>
              <td className="px-6 py-4">Serdar Solak</td>
              <td className="px-6 py-4">120</td>
              <td className="px-6 py-4">
                <button
                  href="#"
                  className="font-medium text-blue-600  hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 512 512"
                  >
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="odd:bg-white  even:bg-gray-50  border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Bilişim Sistemleri Mühendisliğine Giriş
              </th>
              <td className="px-6 py-4">1041</td>
              <td className="px-6 py-4">Serdar Solak</td>
              <td className="px-6 py-4">120</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="font-medium text-blue-600  hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 512 512"
                  >
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
