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
        <div>
            <span className='img--egg' role="img" aria-label='egg'></span>
            <div className='main--text--container'>
                <h1>Transform your brand</h1>
                <p className='main--text--info'>
                    We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <p className='main--text--learnmore learn--yellow'>Learn more</p>
            </div>
        </div>
        <div>
            <span className='img--cup' role="img" aria-label='cup'></span>
            <div className='main--text--container'>
                <h1>Stand out to the right audience</h1>
                <p className='main--text--info'>
                Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
                </p>
                <p className='main--text--learnmore learn--softred'>Learn more</p>
            </div>
        </div>
        <div>
            <span role="img" aria-label='berry'>
                <h1>Graphic Design</h1>
                <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
            </span>
        </div>
        <div>
            <span role="img" aria-label='orange'>
                <h1>Photography</h1>
                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </span>
        </div>
    </main>
  )
}

export default Main
