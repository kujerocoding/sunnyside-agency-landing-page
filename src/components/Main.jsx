import React from 'react'

const Main = () => {
  return (
    <main>
        <header>
            <img src="../src/assets/images/mobile/image-header.jpg" alt="orange fruit" />
        </header>
        <div>
            <span role="img" aria-label='egg'></span>
            <h1>We are creatives Transform your brand</h1>
             <p>
                We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <p>Learn more</p>
        </div>
        <div>
            <span role="img" aria-label='cup'></span>
            <h1>Stand out to the right audience</h1>
             <p>
             Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
            </p>
            <p>Learn more</p>
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
