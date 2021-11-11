import React from 'react'
import { useRouter } from 'next/router'

import { Routes } from '../constants/routes'

export const Footer = () => {
  const router = useRouter()
  const goToPage = (route: string): void => {
    router.push(route)
  }
  return (
    <footer className="relative border-t border-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div
              className="flex-shrink-0 flex items-center"
              onClick={() => goToPage(Routes.home)}
            >
              <img
                className="hidden lg:block h-8 w-auto cursor-pointer"
                src="/img/logo-2.svg"
                alt="Workflow"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center px-2 ml-6 justify-end">
            <div className="lg:ml-5 lg:flex lg:space-x-7">
              <a
                onClick={() => goToPage(Routes.about)}
                className={`border-blue-500 text-gray-500 cursor-pointer items-center px-1 pt-1 text-base font-medium ${
                  router.pathname === Routes.about ? 'border-b-2 ' : ''
                } `}
              >
                About
              </a>
              <a
                onClick={() => goToPage(Routes.changelog)}
                className={`border-blue-500 text-gray-500 items-center px-1 pt-1 text-base font-medium cursor-pointer ${
                  router.pathname === Routes.changelog ? 'border-b-2 ' : ''
                } `}
              >
                Changelog
              </a>
              <a
                onClick={() => goToPage(Routes.howWorks)}
                className={`border-blue-500 text-gray-500 items-center px-1 pt-1 text-base font-medium cursor-pointer ${
                  router.pathname === Routes.howWorks ? 'border-b-2 ' : ''
                } `}
              >
                ¿Cómo funciona?
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
