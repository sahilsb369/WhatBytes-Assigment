import React, { useState } from "react";
import Quick from "./Quick";
import Syllabus from "./Syllabus";
import { Questions, Data } from "../Data";

const SkillTest = () => {
 
  const [score, setScore] = useState({
    solved: Questions[0].score
  })

  

  return (
    <div className='p-4 flex justify-between border-gray-300 gap-5 md:flex-wrap'>
      <Quick setScore={setScore} score={score.solved}  />
      <Syllabus className='border-gray-300' score={score.solved} />
      {/* <div className="p-10 bg-black"></div> */}
    </div>
  );
};

export default SkillTest;
