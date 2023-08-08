import React, { useEffect } from "react";
import AMHcomponent from "./aboutMe/AMHcomponent";
import ResumeInfoComponent from "./Notuse/ResumeInfoComponent";
import AValuesComponent from "./aboutMe/AValuesComponent";
import ALanguageComponent from "./aboutMe/ALanguageComponent";
import PorblemSolveComponent from "./aboutMe/ProblemSolveComponent";
import ContactComponent from "./aboutMe/ContactComponent";
import ApplyReasonComponent from "./aboutMe/ApplyReasonComponent";
import FutureComponent from "./aboutMe/FutureComponent";
import SelfLearningComponent from "./aboutMe/SelfLearningComponent";

const ResumeComponent = ({ AOS }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" p-3 mb-2 resumeColor text-white">
      <AMHcomponent AOS={AOS} />
      <AValuesComponent AOS={AOS} />
      <ApplyReasonComponent AOS={AOS} />
      <ALanguageComponent AOS={AOS} />
      <PorblemSolveComponent AOS={AOS} />
      <FutureComponent AOS={AOS} />
      <SelfLearningComponent AOS={AOS} />
      <ContactComponent AOS={AOS} />
    </div>
  );
};

export default ResumeComponent;
