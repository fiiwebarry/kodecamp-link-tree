
import "./Kodecamp.css";
import Image from "/src/Assets/Images/profile-image.png";
import Icon from "/src/Assets/Icon/slack.png";
import Icon1 from "/src/Assets/Icon/Icon.png";
import Icon2 from "/src/Assets/Icon/kodecamp-logo.png";
import Icon3 from "/src/Assets/Icon/kodeHauz-logo.png";
import Icon4 from "/src/Assets/Icon/Content.png";
import Icon5 from "/src/Assets/Icon/Avatar.png";

const KodeCamp=()=>{


    return(
         <section className="container"> 
        <img className="displayImagetab" src={Icon4} alt=""/>
        <img className="displayImage" src={Icon5} alt=""/>
       <div>
        <img src={Image} alt=""/>
        <p className="text-header">John Doe</p>

        </div>
       <div className="Kodecamp-tab-list">
          <p className="kodecamp-text-tab">Twitter Link</p>
       </div>

       <div className="Kodecamp-tab-list">
           <p className="kodecamp-text-tab">KodeCamp Team</p>
       </div>

       <div className="Kodecamp-tab-list">
         <p className="kodecamp-text-tab">KodeCamp  Books</p>
       </div>

       <div className="Kodecamp-tab-list">
           <p className="kodecamp-text-tab">Background Check for Coders</p>
        </div>

         <div className="Kodecamp-tab-list">
            <p className="kodecamp-text-tab">Design books</p>
         </div>

         <div className="Icon-text-tab">
            <img src={Icon} alt=""/>
            <img src={Icon1} alt=""/>
         </div>

         <div className="Icon-tab-texter">
            <img  className="size-tab" src={Icon2} alt=""/>
            <p className="task-tab">KodeCamp Internship Task</p>
            <img  className="size-tab" src={Icon3} alt=""/>
         </div>








          </section>



    )
}

export default KodeCamp;