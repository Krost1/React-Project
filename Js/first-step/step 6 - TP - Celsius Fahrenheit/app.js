const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function BoilingVerdict({ celsius }) {
    if (celsius >= 100) {
      return <div className="alert alert-success">L'eau bout</div>;
    }
    return <div className="alert alert-info">L'eau ne bout pas</div>;
  }
  
  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
    
    render() {
      const { temperature } = this.props;
      const name = 'scale' + this.props.scale;
      const scaleName = scaleNames[this.props.scale];
      return (
        <div>
          <label htmlFor={name}>Température ({scaleName})</label>
          <input
            type="text"
            id={name}
            value={temperature}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }
  
  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        temperature: '',
      };
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    
    handleCelsiusChange(temperature) {
      this.setState({
        temperature: temperature,
      });
    }
    
    handleFahrenheitChange(temperature) {
      this.setState({
        temperature: toCelsius(temperature),
      });
    }

    
    render() {
      const { temperature } = this.state;
      const celsius = temperature;
      const fahrenheit = toFahrenheit(celsius);
      
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange}
            />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange}
          />
          <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }
  
  ReactDOM.render(<Calculator />, document.getElementById("app"));
  