import React, { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface IMessageOptions {
  severity?: 'success' | 'error' | 'info' | 'warn'
  message: string
}

export interface INotificationContext {
  showMessage: (options: IMessageOptions) => void
}

export type INotificationProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const initialContext = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  showMessage: () => {},
} as INotificationContext

export const NotificationContext = createContext(initialContext)

export const NotificationProvider: React.FC<INotificationProviderProps> = ({
  children,
}) => {
  const showMessage = ({ severity = 'info', message }: IMessageOptions) => {
    toast[severity](message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <NotificationContext.Provider value={{ showMessage }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </NotificationContext.Provider>
  )
}
