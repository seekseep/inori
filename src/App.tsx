import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function App() {

  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const auth = getAuth()
    return onAuthStateChanged(auth, (user) => {
      console.log('user=', user)
      if (user) {
        setStatus('authenticated')
      } else {
        setStatus('unauthenticated')
      }
    })
  }, [])

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="text-2xl font-bold">いのり</div>
      <div className="mt-4">
        {status === 'loading' && 'Loading...'}
        {status === 'authenticated' && 'Authenticated'}
        {status === 'unauthenticated' && 'Unauthenticated'}
      </div>
    </div>
  )
}

export default App
