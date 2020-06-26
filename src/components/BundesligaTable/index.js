import React, { Component } from "react";
import API from "../../utils/API";

import "../../styles/BundesligaTable.css";

class BundesligaTable extends Component {

  state = {
    results: [],
  };


  componentDidMount() {
    this.getBundesligaapi();
  }


  getBundesligaapi = (props) => {
    API.getGERModdsapi(props)
      .then(res => this.setState({ results: res.data.data }))
      .then(res => { console.log(res) })
      .catch(err => console.log(err));
  };

  render() {
    const { results } = this.state
    console.log(results)
    return (

      <>
         <div class="container is-fluid">
  <div class="notification">
  <header>
        <h1 id="GERMbanner" >Bundesliga Soccer Games 
        <img id="GERM-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/2._Bundesliga_logo.svg/1200px-2._Bundesliga_logo.svg.png" width="112" height="28" align="center" alt="germlogo"></img></h1>
        </header>
        <table class="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Home Team Line</th>
              <th>Home Team Win</th>
              <th>Bet on this game</th>
            </tr>
          </thead>

          <tbody>
            {results.map(data => {
              return (<tr>
                <td>{data.commence_time}</td>
              <td>{data.home_team}</td>
              <td>{data.teams[0]}</td>
              <td></td>
              <td></td>
              <td><button>Place a Bet</button></td>

              </tr>
            )})} 
           

           </tbody>
        </table>
</div></div>
      </>

    );
  }
}
export default BundesligaTable;