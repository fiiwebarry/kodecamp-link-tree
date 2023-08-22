
import "./Kodecamp.css";
import { Data } from "./Data";
import Image from "/src/Assets/Images/profile-image.png";
import Icon from "/src/Assets/Icon/slack.png";
import Icon1 from "/src/Assets/Icon/Icon.png";
import Icon2 from "/src/Assets/Icon/kodecamp-logo.png";
import Icon3 from "/src/Assets/Icon/kodeHauz-logo.png";
import Icon4 from "/src/Assets/Icon/Content.png";
import Icon5 from "/src/Assets/Icon/Avatar.png";

const KodeCamp = () => {


   return (
      <section className="container">
         <img className="displayImagetab" src={Icon4} alt="" />
         <img className="displayImage" src={Icon5} alt="" />
         <div className="John-tab-header">
            <img src={Image} alt="" />
            <p className="text-header">John Doe</p>

         </div>
         {Data.map((data) => {

            const { id, title } = data;
            return <button key={id}>{title}</button>
         })}


         <div className="Icon-text-tab">
            <img src={Icon} alt="" />
            <img src={Icon1} alt="" />
         </div>
         <hr />

         <div className="Icon-tab-texter">
            <img className="size-tab" src={Icon2} alt="" />
            <p className="task-tab">KodeCamp Internship Task</p>
            <img className="size-tab" src={Icon3} alt="" />
         </div>









      </section>



   )
}

export default KodeCamp;