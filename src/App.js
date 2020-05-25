import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import SimpleCard from './components/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.fetchCatImages = this.fetchCatImages.bind(this);

    this.state = {
      details: [],
    };
  }

  fetchCatImages() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "17d94b92-754f-46eb-99a0-65be65b5d18f");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://api.thecatapi.com/v1/images/search?order=RANDOM&limit=9&mime_types=gif&size=thumb", requestOptions)
      .then(response => response.json())
      .then(result => { 
        console.log(result);
        this.setState({
          details: result
        });
      })
      .catch(error => console.log('error', error));
  }

  updateState(result) {
    this.setState({
      details: result
    });
  }

  componentDidMount() {
    this.fetchCatImages();
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Button onClick={this.fetchCatImages} variant='contained' color='primary'>Refresh</Button> 
          <Grid spacing={4} container>
            {
              this.state.details.map((detail) => {
                return <SimpleCard detail={detail} />;
              }) 
            }
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    );
  } 
}

export default App;
