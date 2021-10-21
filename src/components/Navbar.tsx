import React from 'react'
import { useRouter } from 'next/router'
import { Routes } from '../constants/routes'

const Navbar = () => {
  const router = useRouter()
  const goToPage = (route: string): void => {
    router.push(route)
  }

  return (
    <nav className="bg-niceGray">
      <div className="max-w-7xl mx-auto px-2 pt-10">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div
              className="flex-shrink-0 flex items-center"
              onClick={() => goToPage(Routes.home)}
            >
              <img
                className="hidden lg:block h-8 w-auto cursor-pointer"
                src="/img/logo-1.svg"
                alt="Workflow"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center px-2 ml-6 justify-end">
            <div className="lg:ml-5 lg:flex lg:space-x-7">
              <a
                onClick={() => goToPage(Routes.about)}
                className="border-blue-500 text-gray-900 items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => goToPage(Routes.changelog)}
                className="border-blue-500 text-gray-900 items-center px-1 pt-1 text-sm font-medium cursor-pointer"
              >
                Changelog
              </a>
              <a
                onClick={() => goToPage(Routes.howWorks)}
                className="border-blue-500 items-center px-4 py-1.5 text-sm font-semibold	bg-gray-900 text-white rounded-lg cursor-pointer"
              >
                ¿Cómo funciona?
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
