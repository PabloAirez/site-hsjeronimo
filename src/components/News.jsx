import Image from "./Image";
import Paragraph from "./Paragraph";

const News = (image, title, description, date, href) => {
  return (
    <div className="xl:w-1/3 lg:w-1/2">
        <Image image={image}></Image>
        <Paragraph classNameText={"sm:ml-32 ml-10 mt-10"} text={date}></Paragraph>
        <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10"} title={title}></Paragraph>
        <Paragraph classNameText={"sm:ml-32 ml-10 mt-10"} text={description}></Paragraph>

    </div>
  )
}

export default News