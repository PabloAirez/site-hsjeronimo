import { useState } from 'react'
import MenuPrincipal from './../components/MenuPrincipal'
import Banner from './../components/Banner'
import Card from './../components/Card'
import backgroundImage from '..//images/indexBanner.jpg'
import Carrossel from './../components/Carrossel'
import Location from './../components/Location'
import Footer from './../components/Footer'


const Home = () => {
    const indexImage = `url('${backgroundImage}')`;
    const cards = [
       {title:"Marcação de Consultas",
       image: { src: "./src/images/card1.jpg",
                alt:"Clique aqui para ver as marcações de consultas"
              }
       },
       {title:"Convênios e Planos",
       image: { src: "./src/images/card2.jpg",
                alt:"Clique aqui para ver os convênios"
              }
       },
       {title:"Notícias",
       image: { src: "./src/images/card3.jpg",
                alt:"Clique aqui para ver as notícias"
              }
       },
       {title:"Especialidades",
       image: { src: "./src/images/card4.jpg",
                alt:"Clique aqui para ver as especialidades"
              }
       },
  
    ]
  
  
    const servicos = [
      {title:"Assistência Social",
      image: { src: "./src/images/assistencia-social.jpg",
               alt:"Clique aqui para ver sobre nossa assistência social"
             }
      },
      {title:"Bloco Cirúrgico",
      image: { src: "./src/images/centro-cirurgico.jpg",
               alt:"Clique aqui para ver sobre nosso bloco cirúrgico"
             }
      },
      {title:"Centro Clínico",
      image: { src: "./src/images/centro-clinico.jpg",
               alt:"Clique aqui para ver  sobre nosso centro clinico"
             }
      },
      {title:"Centro Obstétrico e Maternidade",
      image: { src: "./src/images/maternidade.jpg",
               alt:"Clique aqui para ver sobre nosso centro obstétrico e nossa maternidade"
             }
      },
      {title:"Internação",
      image: { src: "./src/images/internacao.jpg",
               alt:"Clique aqui para saber mais sobre as internações"
             }
      },
      {title:"Laboratório de Análises Clínicas",
      image: { src: "./src/images/laboratorio.jpg",
               alt:"Clique aqui para ver sobre nossa assistência social"
             }
      },
      {title:"Pronto Atendimento / Emergência",
      image: { src: "./src/images/pronto-atendimento.jpg",
               alt:"Clique aqui para ver sobre nossa emergência"
             }
      },
      {title:"Pediatria",
      image: { src: "./src/images/pediatria.jpg",
               alt:"Clique aqui para ver sobre nossa pediatria"
             }
      },
      {title:"Psicologia",
      image: { src: "./src/images/psicologia.jpg",
               alt:"Clique aqui para ver sobre nossa psicologia"
             }
      }
  
   ]
  
    return (
      <>
    <MenuPrincipal></MenuPrincipal>
    <Banner backgroundImage={indexImage}></Banner>
    <div className='flex flex-row flex-wrap h-1/4'> {/* Renderizando os cards */}
    {cards.map((card,i)=>(
        <Card key={i} title={card.title} image={card.image}></Card>
    ))}
  
    </div>
  
    <div className=' h-1/4 w-full'>
    <p className='font-body text-3xl text-primaryColor w-full mb-8 mt-20 text-center'>Serviços</p>
    <Carrossel cards={servicos}></Carrossel>
    </div>
  
  
    <Location></Location>
  
    <Footer></Footer>
      </>
    )
}

export default Home
