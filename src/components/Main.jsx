import React from 'react'

const Main = () => {
  return (
    <main>
        <header>
            <div className='img--orange--container'>
                <span className='header__img--orange' role="img" aria-label='orange' ></span>
            </div>
            <div className='header--info--container'>
                <p>We are creatives</p>
                <img className="header__img--arrow" src="../src/assets/images/icon-arrow-down.svg" alt="arrow down" />
            </div>
        </header>
        <section className='main--section'>


            
            <span className='img--egg' role="img" aria-label='egg'></span>

            <div className='main--text--container text--egg'>
                <h1>Transform your brand</h1>
                <p className='main--text--info'>
                    We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <p className='main--text--learnmore learn--yellow'>Learn more</p>
            </div>
            
            <span className='img--cup' role="img" aria-label='cup'></span>

            <div className='main--text--container text--cup'>
                <h1>Stand out to the right audience</h1>
                <p className='main--text--info'>
                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
                </p>
                <p className='main--text--learnmore learn--softred'>Learn more</p>
            </div>

            <div>
                <span className='graphic--img--berry graphic' role="img" aria-label='berry'>
                    <h1 className='lower--title'>Graphic Design</h1>
                    <p className='lower--text--info'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
                </span>
            </div>
            
            <div>
                <span className='photography--img--orange photography' role="img" aria-label='orange'>
                    <h1 className='lower--title'>Photography</h1>
                    <p className='lower--text--info'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </span>
            </div>
            
        </section>

            
  


    </main>
  )
}

export default Main
