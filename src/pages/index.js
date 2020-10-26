import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Cards'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          {' '}
          Learning to <br /> design and code React apps{' '}
        </h1>
        <p>
          {' '}
          Complete courses about the best tools and design systems.Prototype and
          build apps with React and Swift.{' '}
        </p>
        <p> Now go build something great. </p>
        <Link to="/page-2/"> Watch a Video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 done, more on the way...</h2>
      <div className="CardGroup">
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="Course II"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="Course III"
          text="12 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="Course IV"
          text="12 sections"
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for designers"
      text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  </div>
)

export default IndexPage
