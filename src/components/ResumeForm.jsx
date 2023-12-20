import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import './form.css';

const ResumeForm = () => {
  const { dispatch } = useAppContext();
  const [fullName, setFullName] = useState('');
  const [workExperience, setWorkExperience] = useState([{ company: '', timeframe: '' }]);
  const [education, setEducation] = useState('');
  const [image, setImage] = useState(null);

  const handleAddExperience = () => {
    setWorkExperience([...workExperience, { company: '', timeframe: '' }]);
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...workExperience];
    newExperience[index][name] = value;
    setWorkExperience(newExperience);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAddResume = () => {
    dispatch({
      type: 'ADD_RESUME',
      payload: {
        fullName,
        workExperience,
        education,
        image,
      },
    });
    setFullName('');
    setWorkExperience([{ company: '', timeframe: '' }]);
    setEducation('');
    setImage(null);
  };

  return (
    <form className="form-container">
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </label>

      <div className="work-experience">
        <h3>Work Experience:</h3>
        {workExperience.map((exp, index) => (
          <div key={index}>
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </label>
            <label>
              Timeframe:
              <input
                type="text"
                name="timeframe"
                value={exp.timeframe}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddExperience}>+ Add Experience</button>
      </div>

      <label>
        Education:
        <input
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
      </label>

      <label>
        Image:
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>

      <button type="button" onClick={handleAddResume}>Add Resume</button>
    </form>
  );
};

export default ResumeForm;