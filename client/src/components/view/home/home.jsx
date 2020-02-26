import React, {Component} from 'react';
import style from './style.module.css';

import Footer from '../../shared/footer/footer';
import ContentSection from '../../static/contentSection/contentSection';
import ReverseContentSection from '../../static/contentSection/reverseContentSection';
import image1 from './c-e.png';

import Steps from '../../static/steps/steps';
import Cover from '../../static/cover/cover';
import Navbar from '../../shared/navBar/navBar';

class App extends Component {
  state = {
    myState: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ myState: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className={style.container}>
        <Navbar />
        <Cover />
        <p className="App-intro">{this.state.myState}</p>
        <ContentSection image={image1} />
        <Steps />
        <ReverseContentSection image={image1} />
        <Footer />
      </div>
    );
  }
}

export default App;