import { useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase/firebaseInit'
import Header from './Header'

const Layout = ({ children }) => {
  useEffect(() => {
    initializeApp(firebaseConfig)
  }, [])

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200">
      <Header />
      <main>{children}</main>
    </div>
  )
}
export default Layout
