import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { LoadingAnimation } from "../components/LoadingAnimation";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";



export function Subscribe(){
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [createSubscriber, {loading}] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent){
    event.preventDefault()

    await createSubscriber({
      variables:{
        name, 
        email
      }
    })
    
    navigate("/event")
  }
 
  return (
    <div className="bg-backgroundSub bg-no-repeat bg-top ">
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        
          <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
            <div className="max-w-[640px]">
              <Logo/>
              <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong> </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
            </div>

            <div className="p-8 bg-gray-700 border border-gray-500 rounded">
              <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="bg-gray-900 rounded px-5 h-14"
                  type="text" 
                  placeholder="Seu nome completo"
                />
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-gray-900 rounded px-5 h-14"
                  type="email"
                  placeholder="Digite seu e-mail"
                />

                <button 
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {loading ? <LoadingAnimation props={"w-5 h-5 text-white"}/> : <span>Garantir minha vaga</span>}
                  
                </button>
              </form>

            </div>

          </div>
        

        <img src="/src/assets/code-mockup.png" className="mt-10" />

      </div>
      
      <Footer/>
    </div>
  )
}