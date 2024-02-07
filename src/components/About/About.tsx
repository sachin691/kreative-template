// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Specialization from "../../globalSubComponents/Specialization";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/controllers";
import AboutUs from "./subComponents/AboutUs";
import AboutWork from "./subComponents/AboutWork";
import Leadership from "./subComponents/Leadership";
import Clients from "../../globalSubComponents/Clients";
import CTA from "../../globalSubComponents/CTA";


const content = {
  introNormal: " About ",
  introRed: "Us ",
  caption:
    "Welcome to Kreative Machinez! Where innovation, creativity, and cutting-edge technology converge to shape your brand's digital narrative.",
};

const ctaContent1 = {
  text1: "Want To Boost Your Online Presence ?",
  text2: "Call Us Now !",
};

const ctaContent2 = {
  text1: "Maximize Your Impact & Get Noticed Now !",
  text2: "Email Us.",
};

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  scrollTop();

  let callOffset = 650;
  let emailoffset = 1150;
  if (window.innerWidth <= 1024) {
    callOffset = 1000;
    emailoffset = 1650;
  }



  return (
    <div>
      <Intro
        normalHead={content.introNormal}
        redHead={content.introRed}
        caption={content.caption}
      />
      <AboutUs />
      <AboutWork />
      <CTA
        text={ctaContent1.text1}
        color="warning"
        showArrow={true}
        text2={ctaContent1.text2}
        to="../Contact"
        offset={callOffset}
      />
      <Specialization />
      <Leadership />
      <CTA
        text={ctaContent2.text1}
        color="warning"
        showArrow={true}
        text2={ctaContent2.text2}
        to="../Contact"
        offset={emailoffset}
      />
      <Clients />
    </div>
  );
};

export default About;
