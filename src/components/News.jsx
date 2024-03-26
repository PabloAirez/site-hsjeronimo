// Componentes
import Image from "./Image";
import Paragraph from "./Paragraph";
import { Link } from 'react-router-dom';

const News = ({image,title,description, date, href}) => {
  return (
    <div className="xl:w-1/3 lg:w-1/2 lg:mr-2 w-full mr-0 mb-10 hover:bg-secondaryColor hover:border-solid hover:border-2 hover:border-white duration-100 group " >
        <Link to={href}>
          <Image image={image} classNameImage={"mt-5 w-fullh-64"}></Image>
          <Paragraph classNameText={" mt-2 text-center group-hover:text-white duration-100"} text={date}></Paragraph>
          <Paragraph classNameTitle={"text-center mt-5 group-hover:text-white duration-100"} title={title}></Paragraph>
          <Paragraph classNameText={"text-center mt-3 mb-10 group-hover:text-white duration-100"} text={description}></Paragraph>
        </Link>
    </div>
  )
}

export default News