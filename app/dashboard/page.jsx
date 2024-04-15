import {Suspense} from 'react'
import Card from './componentes/card'

export default async function Page() {
  
  return (

    <main >
      <h1 className={` mb-4 text-xl md:text-2xl text-blue-500`}>
        Dashboard
      </h1>
      
      <div className="flex mt-6 gap-6 md:grid-cols-4 lg:grid-cols-8 text-midnight">
        <Suspense fallback={'Cargando...'}>
          <Card />
        </Suspense>          
      </div>
    </main>
  );
}