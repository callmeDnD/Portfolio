import React  from 'react';
import '../Style/skills.css';

const Skills = () => {
  

  return (
    <div className="wholeskills"  id='skills'>
    <div className="scontent">
      
       <h1>My Skills</h1>
       <div className="skillcontent">
        <div className="skills">
          <div className="sone">
 <div className="one">
 <span class="logos--javascript"></span>
 <span className='spantext'>60%</span>
</div>
<div className="progress-bar-container">
 <progress className="progress-bar" value="60" max="100" label >
 </progress> </div>
 </div>
 <div className="sone">
<div className="one">
 <span class="skill-icons--html"></span>
 <span className='spantext'>80%</span>
 </div>
 <div className="progress-bar-container">
 <progress className="progress-bar" value="80" max="100" label >
 </progress> </div>
 </div>
 <div className="sone">
  <div className="one">
 <span class="logos--mongodb"></span>
 <span className='spantext'>40%</span>
 </div>
 <div className="progress-bar-container">
 <progress className="progress-bar" value="40" max="100" label >
 </progress> </div>
 </div>
 </div>
 <div className="skills">
<div className="stwo">
  <div className="two">
<span class="vscode-icons--file-type-css"></span>
<span className='spantext'>60%</span>
</div>
<div className="progress-bar-container">
 <progress className="progress-bar" value="60" max="100" label >
 </progress> </div>
  </div>
  <div className="stwo">
    <div className="two">
  <span class="skill-icons--nodejs-light"></span>
  <span className='spantext'>20%</span>
 </div>
 <div className="progress-bar-container">
 <progress className="progress-bar" value="20" max="100" label >
 </progress> </div>
  </div>
  
<div className="stwo">
  <div className="two">
  <span class="skill-icons--expressjs-dark"></span>
  <span className='spantext'>30%</span>
</div>
<div className="progress-bar-container">
 <progress className="progress-bar" value="30" max="100" label >
 </progress> </div>
</div>
 </div>
  
       </div>
    </div>
    </div>
  )
}

export default Skills