import React, {Component} from 'react';
import Report from 'powerbi-report-component';

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.report = null;
  }

  handleDataSelected = (data) => {
    // will be called when some chart or data element in your report clicked
  }

  handleReportLoad = (report) => {
    // will be called when report loads:
    // - scripts and data received from server, visuals are rendered on the browser
    // - flickering Power BI logo stops appearing but report is not fully ready to be consumed

    this.report = report; // get the object from callback and store it.(optional)
  }

  handleReportRender = (report) => {
    // will be called when report renders:
    // - visuals finish rendering
    // - report is fully visible and ready for consumption

    this.report = report; // get the object from callback and store it.(optional)
  }

  handlePageChange = (data) => {
    // will be called when pages in your report changes
  }

  handleTileClicked = (data) => {
    console.log('Data from tile', data);
  }

  setFullscreen = () => {
    if (this.report) this.report.fullscreen();
  }

  printReport = () => {
    if (this.report) this.report.print();
  }

  removeFilters = () => this.report.removeFilters()
    .catch(function (errors) {
      console.log(errors);
    });

  render() {
    const reportStyle = {
      // style object for report component
    };
    const extraSettings = {
      filterPaneEnabled: true, //true
      navContentPaneEnabled: true, //true
      // ... more custom settings
    };

    const embedURL = 'https://app.powerbi.com/reportEmbed?groupId=' + process.env.REACT_APP_EMBED_GROUP_ID;

    return (
      <div className={'full-panel'}>
        {this.props.token && <div className='PBIReport'>
          <div className='PBIReportControls'>
            <button className="btn btn-med" onClick={this.printReport}>Print</button>
            <button className="btn btn-med" onClick={this.removeFilters}>Reset Filters</button>
            <button className="btn btn-med" onClick={this.setFullscreen}>Fullscreen</button>
            <button className="btn btn-med" onClick={() => {
            }}>Share
            </button>
          </div>
          <div className="PBIReportEmbed">
            <Report
              embedType={process.env.REACT_APP_EMBED_TYPE} // "dashboard"
              tokenType={process.env.REACT_APP_TOKEN_TYPE} // "Aad"
              accessToken={this.props.token}
              embedUrl={embedURL} // embedUrl goes here
              embedId={process.env.REACT_APP_EMBED_REPORT_ID} // report or dashboard Id goes here
              pageName="" // set as current page of the report
              extraSettings={extraSettings}
              style={reportStyle}
              permissions={process.env.REACT_APP_EMBED_PERMISSIONS} // View
              onLoad={this.handleReportLoad}
              onRender={this.handleReportRender}
              onSelectData={this.handleDataSelected}
              onPageChange={this.handlePageChange}
              onTileClicked={this.handleTileClicked}
            />
          </div>
        </div>}
        {!this.props.token && <div className="spinner-box">
          <div className="leo-border-1">
            <div className="leo-core-1"/>
          </div>
          <div className="leo-border-2">
            <div className="leo-core-2"/>
          </div>
        </div>}
      </div>
    );
  }
}

export default ReportPage;
