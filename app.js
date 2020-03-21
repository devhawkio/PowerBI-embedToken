 import ReportPage from './pbi-embed';
  
  class App extends Component {
  
  async componentDidMount() {
  fetch(process.env.REACT_APP_MS_FLOW_URL, 
    {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({groupid: process.env.REACT_APP_EMBED_GROUP_ID, reportid: process.env.REACT_APP_EMBED_REPORT_ID})
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
      this.setState({accessToken: data.token})
    }).catch((e) => {
      console.error("=============>", e);
    });
  }
  
  render()...
