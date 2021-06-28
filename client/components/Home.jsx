import React from 'react'

function Home (props) {


  const navigate = (path) => {
    props.history.push(path)
  }

  return (
    <>
      <div className='header'>
      <h1>Let's Play Madlibs</h1>
      </div>
      <div className='menu'>
      <button onClick={() => navigate('/how')}>How?</button>
      <button onClick={() => navigate('/choose')}>Play</button>
      </div>
    </>
  )
}


export default Home
