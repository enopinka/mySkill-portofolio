import "./App.css";
import { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "./components/Header";
import About from "./components/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("");
    ReactGA.pageview(window.location.pathname);
  }
  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({
          resumeData: data,
        });
      },
      error: (xhr, status, err) => {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
