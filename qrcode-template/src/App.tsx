

export function App() {

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-52 h-80 bg-white rounded-xl flex justify-center  flex-wrap itens-center ">
        <div className="bg-blue-600 rounded-xl w-44 h-44 mt-5  ">
          <div>
            <img src="/images/image-qr-code.png" alt="" className=" rounded-xl " />
          </div>
        </div>   

        <div className=" flex  font-bold text-xs text-center pt-1">
          <h1>Improve yours front-end skills by building projects</h1>
          </div> 
          
            <p className="text-xs/3 font-style pt-0.5 text-zinc-600 flex text-center">Scan the QR code to visit FrontEnd Mentor and take your coding skills to 
              the next level
            </p>
          
      </div>
  
    </div>
  )
}


