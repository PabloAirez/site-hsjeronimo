// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import Card from './../components/Card';
//images
import backgroundImage from './../images/backgroundAssistencia.jpg'

const AssistenciaSocial = () => {
  return (
    
    <>
    <Banner backgroundImage={backgroundImage} title={"Assistência Social"}></Banner>
    <Paragraph classNameText={"mt-10 mb-0 ml-10 mr-20"} text={"O Serviço Social atua no campo das políticas sociais, opõem-se ao assistencialismo através de uma prática que visa à expansão dos direitos e a emancipação da sociedade. Atua com pessoas em situação de vulnerabilidade, independente do poder aquisitivo."}></Paragraph>
    <Paragraph classNameText={"mt-3 mb-0 ml-10 mr-20"} text={"Atuamos na área da saúde, visando viabilizar os direitos dos pacientes, através de um processo de acolhimento, escuta sensível, construção e fortalecimento de vínculos. "}></Paragraph>
    <Paragraph classNameText={"mt-3 mb-0 ml-10 mr-20"} text={"Trabalhamos em conjunto com a equipe multidisciplinar, família, convênios e políticas públicas, articulando com todas as frentes e interlocutores necessários para permitir a desospitalização da maneira mais adequada e uma alta segura. "}></Paragraph>
    <Paragraph classNameText={"mt-3 mb-0 ml-10 mr-20"} text={"Ao oferecer as orientações e realizar os encaminhamentos necessários, contando com os mais diversos pontos da rede de apoio, esse trabalho busca a condução de uma transição do cuidado mais segura e qualificada."}></Paragraph>
    <Paragraph classNameText={"mt-3 mb-0 ml-10 mr-20"} text={"Entre as ações desenvolvidas estão a avaliação do contexto socioeconômico, elaboração de relatórios sociais, articulações com a rede privada e com os mais variados pontos da rede pública (Ministério Público, saúde mental, previdência social, serviços do SUS, entre outros)."}></Paragraph>
    <Paragraph classNameText={"mt-3 mb-0 ml-10 mr-20"} text={"Para acessar o serviço, solicite para equipe médica ou de enfermagem."}></Paragraph>

    <Paragraph classNameTitle={"ml-10 mt-10"} title={"Ações e Campanhas!"}></Paragraph>
    </>
  )
}

export default AssistenciaSocial