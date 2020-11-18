/**
 * @author Paul Lungu
 * @type {{DOM, PropTypes, createElement, isValidElement, version, __spread, PureComponent, createMixin, createClass, Children, Component, createFactory, cloneElement}}
 */

'use strict';

// tag::nodeModules[]
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('../client.jsx');
const follow = require('../follow.jsx'); // function to hop multiple links by "rel"

// tag::customComponents
const List = require('src/main/js/reactjs/service-request/components/task/List.jsx');
const Detail = require('src/main/js/reactjs/service-request/components/task/Detail.jsx');
// tag::customComponents

// tag::vars[]
// const root = 'http://localhost:8080/api';
const root = '/api';
// end::vars[]

// tag::app[]
class home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceRequest: null,
            tasks: [],
            task: null,
            attributes: [],
            pageSize: 10,
            links: {},
            displayDetail: "none",
            displayList: "block",
            displayInfo: "none",
            displayLine: "block",
            toggleDetailInfo: "off",
            callUpdate: function (pageSize, that) {that.loadAllFromServer(pageSize)}
        };
        this.updatePageSize = this.updatePageSize.bind(this);
        this.onNavigate = this.onNavigate.bind(this);
        this.handleSelectedItem = this.handleSelectedItem.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleFilterAll = this.handleFilterAll.bind(this);
    }

    // tag::update-page-size[]
    updatePageSize(pageSize) {
        if (pageSize !== this.state.pageSize) {
          this.state.callUpdate(pageSize, this);
        }
    }
    // end::update-page-size[]

    // tag::follow-1[]
    componentDidMount() {
        this.loadAllFromServer(this.state.pageSize);
    }
    // end::follow-1[]

    // tag::follow-2[]
    loadAllFromServer(pageSize) {
        follow(client, root, [
            {rel: 'serviceRequestEntities', params: {size: pageSize}}]
        ).then(taskCollection => {
            return client({
                method: 'GET',
                path: taskCollection.entity._links.profile.href,
                headers: {'Accept': 'application/schema+json'}
            }).then(schema => {
                this.schema = schema.entity;
                return taskCollection;
            });
        }).done(taskCollection => {
            this.setState({
                tasks: taskCollection.entity._embedded.serviceRequestEntities,
                attributes: Object.keys(this.schema.properties),
                pageSize: pageSize,
                links: taskCollection.entity._links});
        });
    }
    // end::follow-2[]

    // tag::navigate[]
    onNavigate(navUri) {
        client({method: 'GET', path: navUri}).done(taskCollection => {
            this.setState({
                tasks: taskCollection.entity._embedded.tasks,
                attributes: this.state.attributes,
                pageSize: this.state.pageSize,
                links: taskCollection.entity._links
            });
        });
    }
    // end::navigate[]

    handleFilterAll(pageSize){
      this.loadAllFromServer(pageSize);
      this.setState({
        callUpdate: function (pageSize, that) {that.loadAllFromServer(pageSize)}
      });
    }

    handleSelectedItem(serviceRequest, task) {

        task.serviceRequest = serviceRequest;
        console.log("Megred Task: "+ JSON.stringify(task));
        this.setState({
            task: task,
            displayDetail: "block",
            displayList: "none"
        });
    }


    handleBackClick(e){ 
       this.setState({
           displayDetail: "none",
           displayList: "block"
         });
    }

    handleToggleClick(e){
        if (this.state.toggleDetailInfo === "off"){
            this.setState({
              toggleDetailInfo: "on",
              displayInfo: "block",
              displayLine: "none"
            });
        }else {
            this.setState({
                toggleDetailInfo: "off",
                displayInfo: "none",
                displayLine: "block"
              });
    
        }
    }

    render() {
      var item = "";
      if (this.state.task !== null) {
        item = <Detail  task={this.state.task}
                        displayInfo={this.state.displayInfo}
                        displayLine={this.state.displayLine}
                        />
      }

      return (
          <div>

            <div style={{display: this.state.displayList}}>
              <List tasks={this.state.tasks}
                    links={this.state.links}
                    pageSize={this.state.pageSize}
                    onNavigate={this.onNavigate}
                    onUpdateNote={this.onUpdateNote}
                    updatePageSize={this.updatePageSize}
                    onSelectItem={this.handleSelectedItem}
                    onFilterAll={this.handleFilterAll}
                    />
            </div>

            <div style={{display: this.state.displayDetail}}>
              <div className="top-bar show-for-medium small-12 columns">
               <div className="top-bar-left">
                 <ul className="menu">
                   <li className="topbar-title">
                     Task Detail
                   </li>
                 </ul>
               </div>
               <div className="top-bar-right">
                 <ul className="menu">
                   {/*<li className="topbar-title">*/}
                   {/*  <a className="button small" onClick={this.handleToggleClick}>&lt;Details&gt;</a>*/}
                   {/*</li>                   */}
                   <li className="topbar-title">
                     <a className="button" onClick={this.handleBackClick}>Back</a>
                   </li>
                 </ul>
               </div>
              </div>
              <div>
                  {item}
              </div>
            </div>

          </div>
      )
    }
}
// end::app[]

module.exports = home;
