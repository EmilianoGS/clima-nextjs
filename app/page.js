import Actual from './actual'


export default function Home() {

  const fecha=new Date()
  const dia= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} `

  return (
    <main className="flex min-h-screen gap-3 p-6 text-midnight p"> 
        <Actual />
    </main>
  );
}
