function Field ({name, value, onChange, children}) {
    return (
      <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
      </div>
    );
  }
  
  function Checkbox ({name, value, onChange, children}) {
    return (
      <div className="form-check">
        <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input" />
        <label htmlFor={name} className="form-check-label">{children}</label>
      </div>
    );
  }
  
  class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nom: '',
        prenom: '',
        newsletter: false // Correction : la clé doit être "newsletter" et non "newletter"
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      const name = e.target.name;
      const type = e.target.type;
      const value = type === 'checkbox' ? e.target.checked : e.target.value;
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const data = JSON.stringify(this.state); // Correction : la variable data doit contenir this.state et non this.props
      console.log(data);
    }
  
    render() {
      console.log('render');
      return (
        <form className="container" onSubmit={this.handleSubmit}>
          <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
          <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field> {/* Correction : le name doit être "prenom" et non "Prénom" */}
          <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>S'abonner</Checkbox>
          <div className="form-group">
            <button className="btn btn-primary">submit</button> {/* Correction : la classe doit être "className" et non "class" */}
          </div>
          {JSON.stringify(this.state)}
        </form>
      );
    }
  }
  
  ReactDOM.render(<Home />, document.querySelector('#app'));
  