import React, { Component } from 'react';

class Project extends Component {
state = {
  showInfo: false
}

handleInfo = () => {
  this.setState({ 
    showInfo: !this.state.showInfo
   });
}

    render() {
          let{name, languagesIcons, source, info, picture}=this.props.item;

        return (
            <div className='Project'>
              <div className='icons'>
                {languagesIcons.map(icon =>
                <i className={icon} key={icon}></i>
                 )}
              </div>
                <h3>{name}</h3> 
                <img src={process.env.PUBLIC_URL + picture} alt='' onClick={this.handleInfo} />
                <span className='infos' onClick={this.handleInfo}>
                    <i className='fa fa-plus-circle'></i>
                </span>

                {
                  this.state.showInfo && (
                    <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{name}</h2>
              <div className="sourceCode">
                <a href={source} rel="noopener noreferrer" className="button" target="_blank">
                  Code Source
                </a>
              </div>
            </div>
            <p className="text">{info}</p>

            <div className="button return" onClick={this.handleInfo}>
              Retour 
            </div>
          </div>
          </div>
                  )
                }
            </div>
        );
    }
}

export default Project;