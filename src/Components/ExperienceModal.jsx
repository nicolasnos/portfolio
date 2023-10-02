import React from 'react'
import time from "../assets/iconTiempo.png"
const ExperienceModal = ({ selectJob, setViewJob }) => {
  const closeModal = () => {
    setViewJob(false);
  };

  return (
    <div className={`modal ${setViewJob ? 'active' : ''}`}>
      <div className='modalContent'>
        <h2>{selectJob.title}</h2>
        <div className='description'>
          <p>{selectJob.place} </p>
          <img src={time} alt="reloj" />
        </div>
        <div className='time'>
          <p>{selectJob.from}</p>
          <p>{selectJob.to}</p>
        </div>
        <ul>
          {selectJob.duties.map((dutie) => (
            <li key={dutie}>{dutie}</li>
          ))}
        </ul>

        <button onClick={closeModal}>X</button>
      </div>
    </div>
  );
};

export default ExperienceModal;