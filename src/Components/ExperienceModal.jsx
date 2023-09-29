import React from 'react'

const ExperienceModal = ({selectJob, setViewJob}) => {
  console.log(selectJob)
  return (
    <div>
      ExperienceModal
      <button onClick={()=>setViewJob(false)}>X</button>
    </div>
  )
}

export default ExperienceModal