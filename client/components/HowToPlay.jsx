import React from 'react'


function HowToPlay (props) {


  const navigate = (path) => {
    props.history.push(path)
  }

  return (
    <>
      

        <div className="header">
          <h1>How to play</h1>
        </div>

        <div className="story-body">
          <div className="instructions">
            <p>Remember those parts of speech you learned at school? Nouns, verb, adjectives?
              Well here's a chance for you to test out your knowledge in a fun, silly way!
              Choose a story to start, or you can add your own. Then, you'll be given a list of parts of speech.
              For each one, you get to choose ANY random example that you can think of!!
              This is where you get to let your imagination run wild - the wilder it is, the funnier and sillier the outcome will be!
            </p>
            <p>Ready to get started?</p>
          </div>
          <div className="confirm">
            <button onClick={() => navigate('/choose')}>Click here to choose a story</button>
          </div>
        </div>
      
    </>
  )
}


export default HowToPlay
