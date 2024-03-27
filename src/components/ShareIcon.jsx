import {useState} from 'react'
import { IconContext } from "react-icons";
import IconsData from '../data/IconsData.js'; 

const ShareIcon = ({urlPage, urlSocialMedia, icon, color,className}) => {

    const [iconComponent, setIconComponent] = useState(
            IconsData.find(function (icons) {
                return icons.title == icon;
            })
    );

  return (
    <>
    <a href={`${urlSocialMedia}${urlPage}`}>
    {
        icon &&  
        <IconContext.Provider   value={{ className: className }}>
            {
              <iconComponent.icon style={{fill: color}}></iconComponent.icon>
            }
        </IconContext.Provider>
        
      }
    </a>
    </>
  )
}

export default ShareIcon