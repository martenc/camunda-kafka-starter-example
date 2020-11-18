var React = require('react');
const client = require('../client.jsx');
const DisplayDate = require('src/main/js/reactjs/service-request/components/date/DisplayDate.jsx');
const follow = require('../follow.jsx'); // function to hop multiple links by "rel"

class ServiceDetailForm extends React.Component {
        
  constructor(props) {
      super(props);
        this.state = {

        };
      this.handleChange = this.handleChange.bind(this);
  }

    handleChange(e){
        e.preventDefault();
        var serviceRequest = this.props.serviceRequest;
        console.log("handleChange: "+ serviceRequest)
        serviceRequest.serviceOwner = this.refs.serviceOwner.value;
        serviceRequest.sourcingManager = this.refs.sourcingManager.value;
        serviceRequest.acquiringDivision = this.refs.acquiringDivision.value;
        serviceRequest.sourcingComments = this.refs.sourcingComments.value;

        this.props.onUpdateState(serviceRequest);

    }

    render() {
    var i = 0;  

    return (
      <div className="row">
          <div className="small-12 columns">

                <div className="row">
                    <div className="small-5 columns">
                        <div className="input-group">
                            <span className="input-group-label">Service Owner</span>
                            <input className="input-group-field" type="text"
                                   ref="serviceOwner" onChange={this.handleChange}
                                   defaultValue={this.props.serviceRequest.serviceOwner} />
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="small-5 columns">
                        <div className="input-group">
                            <span className="input-group-label">Sourcing Manager</span>
                            <input className="input-group-field" type="text"
                                   ref="sourcingManager" onChange={this.handleChange}
                                   defaultValue={this.props.serviceRequest.sourcingManager}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="small-5 columns">
                  <div className="input-group">
                    <span className="input-group-label">Acquiring Division</span>
                    <select className="input-group-field" ref="acquiringDivision"
                            defaultValue={this.props.serviceRequest.acquiringDivision} onChange={this.handleChange}>
                      <option defaultValue>Please Select</option>
                      <option value="1">Division 1 </option>
                      <option value="2">Division 2 </option>
                      <option value="3">Division 3 </option>
                      <option value="5">Division 4 </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                  <div className="small-5 columns">
                  <textarea rows="5" ref="sourcingComments"
                            placeholder="Sourcing Comments"
                            onChange={this.handleChange}
                            defaultValue={this.props.serviceRequest.sourcingComments}/>
                  </div>
              </div>

          </div>
      </div>

    );
  }
}

module.exports = ServiceDetailForm;
