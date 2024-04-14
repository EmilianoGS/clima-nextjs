


import {Suspense} from 'react'


export default async function Page() {
  
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl text-blue-500`}>
        Dashboard
      </h1>
      
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={'Cargando...'}>-- Componente 1 --</Suspense>  
        <Suspense fallback={'Cargando...'}>-- Componente 2 --</Suspense>
      </div>
    </main>
  );
}