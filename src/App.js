import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  constructor() {
    super();
    this.state = {
      markdown: ''
    }
    this.onChangeMarkdown = this.onChangeMarkdown.bind(this);
  }
  onChangeMarkdown(e) {
    this.setState({ markdown: e.target.value })
  }
  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            Markdown To Backlog
          </Grid>
          <Grid item xs={6}>
              <TextField
                className="markdown"
                label="Markdown"
                multiline
                rows="4"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={this.onChangeMarkdown}
              />
          </Grid>
          <Grid item xs={6}>
              <TextField
                className="backlog"
                label="Backlog"
                multiline
                rows="4"
                fullWidth
                margin="normal"
                variant="outlined"
                value={this.state.markdown}
              />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
