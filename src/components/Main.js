import React, { Component } from "react"
import "./Main.css"
import duelmaster from '../pics/duelmaster.png'
import rickandmorty from '../pics/rickandmorty.png'
import wildlife from '../pics/wildlife.jpg'
import resume from '../pics/resume.jpeg'
import face from '../pics/face.jpg'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showResume: false
    }
  }

  handleResumeClick = () => {
    this.setState({ showResume: !this.state.showResume })
  }

  render() {
    const containerStyle = {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
    }

    const headerStyle = {
      marginBottom: '40px',
    }

    const projectStyle = {
      marginBottom: '40px',
    }

    const imgStyle = {
      width: '100%',
      maxWidth: '400px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginTop: '10px',
    }

    const resumeContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '20px',
    }

    const resumeStyle = {
      width: '100%',
      maxWidth: '700px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginTop: '10px',
    }

    const linkStyle = {
      textDecoration: 'underline',
      color: '#007BFF',
      fontWeight: 'bold',
    }

    const buttonStyle = {
      display: 'inline-block',
      padding: '10px 20px',
      margin: '20px 0',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }

    const footerStyle = {
      marginTop: '40px',
    }

    const footerLinksStyle = {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    }

    const footerLinkStyle = {
      textDecoration: 'none',
      color: '#007BFF',
      fontWeight: 'bold',
    }

    const faceContainerStyle = {
      width: '150px',
      height: '150px',
      overflow: 'hidden',
      borderRadius: '50%',
      margin: '0 auto 20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }

    const faceImgStyle = {
      width: '200%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '-2cm -6cm',
    }

    return (
      <div style={containerStyle}>
        <h1 style={headerStyle}>Christian's Portfolio</h1>
        
        <div style={faceContainerStyle}>
          <img src={face} alt="pic" style={faceImgStyle} />
        </div>
        <footer style={footerStyle}>
          <div style={footerLinksStyle}>
            <a href="https://github.com/ChristianJ16" style={footerLinkStyle}>GitHub</a>
            <a href="https://www.linkedin.com/in/christian-jansen-dev/" style={footerLinkStyle}>LinkedIn</a>
          </div>
        </footer>
        <p>I am a dedicated worker who always does the best work I can when given a task. I show up on time daily and I'm easily teachable. I have the work ethic to be in an office or work remotely from home.</p>
       
        <div style={resumeContainerStyle}>
          <button style={buttonStyle} onClick={this.handleResumeClick}>
            {this.state.showResume ? "Hide Resume" : "Show Resume"}
          </button>
          {this.state.showResume && <img src={resume} alt="Resume" style={resumeStyle} />}
        </div>
        
        <div style={projectStyle}>
          <h2>Project 1: <a
            href="https://rick-and-morty-ep-browser.netlify.app/"
            style={linkStyle}
          >
            Rick and Morty
          </a></h2>
          <img src={rickandmorty} alt="Rick and Morty" style={imgStyle} />
        </div>

        <div style={projectStyle}>
          <h2>Project 2: <a
            href="https://duel-master.netlify.app/"
            style={linkStyle}
          >
            Duel Master
          </a></h2>
          <img src={duelmaster} alt="Duel Master" style={imgStyle} />
        </div>

        <div style={projectStyle}>
          <h2>Project 3: <a
            href="https://wildlife-insights.netlify.app/"
            style={linkStyle}
          >
            Wildlife Insights
          </a></h2>
          <img src={wildlife} alt="Wildlife Insights" style={imgStyle} />
        </div>
       
      </div>
    )
  }
}

export default Main
