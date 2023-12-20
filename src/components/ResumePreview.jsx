import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
// import { html2pdf } from 'html2pdf.js';

const ResumePreview = () => {
  const { state } = useContext(AppContext);
  const { resumes } = state;
  const [selectedResume, setSelectedResume] = useState(null);

  const handleResumeClick = (index) => {
    setSelectedResume(resumes[index]);
  };

  const handleDownloadPdf = () => {
    const element = document.getElementById('selectedResume');
    html2pdf(element);
  };

  return (
    <div>
      <h2>Resume Preview</h2>
      <ul>
        {resumes.map((resume, index) => (
          <li key={index} onClick={() => handleResumeClick(index)} style={{ cursor: 'pointer' }}>
            <strong>{resume.fullName}</strong>
            <p>Company: {resume.companyName}</p>
            <p>Timeframe: {resume.timeframe}</p>
            <p>Education: {resume.education}</p>
            {resume.image && <img src={resume.image} alt="img" />}
          </li>
        ))}

      </ul>
      {selectedResume && (
        <div id="selectedResume">
          <h3>Selected Resume Details</h3>
          <p>Full Name: {selectedResume.fullName}</p>
          <p>Company: {selectedResume.companyName}</p>
          {/* הוסף כאן את כל הפרטים הנדרשים */}
          <p>Education: {selectedResume.education}</p>
          {selectedResume.image && <img src={selectedResume.image} alt="img" />}
          <div>
            <strong>Work Experience:</strong>
            {selectedResume.workExperience.map((exp, index) => (
              <div key={index}>
                <p>Company: {exp.company}</p>
                <p>Timeframe: {exp.timeframe}</p>
              </div>
            ))}
          </div>
          {/* הוסף כאן פרטים נוספים לפי הצורך */}
        </div>
      )}
      <button onClick={handleDownloadPdf}>Download PDF</button>
    </div>
  );
};

export default ResumePreview;
