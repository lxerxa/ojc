import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import * as ActivityActions from 'redux/actions/ActivityActions';

import * as IssueActions from 'redux/actions/IssueActions';
import * as WfconfigActions from 'redux/actions/WfconfigActions';

const qs = require('qs');
const Header = require('./Header');
const List = require('./List');

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActivityActions, dispatch),
    issueActions: bindActionCreators(IssueActions, dispatch),
    wfActions: bindActionCreators(WfconfigActions, dispatch)
  };
}

@connect(({ activity, project, issue, wfconfig }) => ({ activity, project, issue, wfconfig }), mapDispatchToProps)
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.pid = '';
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    issueActions: PropTypes.object.isRequired,
    wfActions: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired,
    issue: PropTypes.object.isRequired,
    wfconfig: PropTypes.object.isRequired,
    activity: PropTypes.object.isRequired
  }

  async index(query) {
    await this.props.actions.index(this.pid, qs.stringify(query || {}));
    return this.props.activity.ecode;
  }

  async more(query) {
    await this.props.actions.more(this.pid, qs.stringify(query || {}));
    return this.props.activity.ecode;
  }

  async create(values) {
    await this.props.issueActions.create(this.pid, values);
    return this.props.issue.ecode;
  }

  async show(id) {
    await this.props.issueActions.show(this.pid, id);
    return this.props.issue.ecode;
  }

  async getOptions() {
    await this.props.issueActions.getOptions(this.pid);
    return this.props.issue.ecode;
  }

  async edit(id, values) {
    await this.props.issueActions.edit(this.pid, id, values);
    return this.props.issue.ecode;
  }

  async setAssignee(id, values) {
    await this.props.issueActions.setAssignee(this.pid, id, values);
    return this.props.issue.ecode;
  }

  async delFile(field_key, file_id) {
    await this.props.issueActions.delFile(this.pid, this.props.issue.itemData.id, field_key, file_id);
    return this.props.issue.ecode;
  }

  async viewWorkflow(definition_id) {
    await this.props.wfActions.index(this.pid, definition_id);
    return this.props.wfconfig.ecode;
  }

  async indexComments(issue_id) {
    await this.props.issueActions.indexComments(this.pid, issue_id);
    return this.props.issue.ecode;
  }

  async addComments(issue_id, values) {
    await this.props.issueActions.addComments(this.pid, issue_id, values);
    return this.props.issue.ecode;
  }

  async delComments(issue_id, id) {
    await this.props.issueActions.delComments(this.pid, issue_id, id);
    return this.props.issue.ecode;
  }

  async editComments(issue_id, id, value) {
    await this.props.issueActions.editComments(this.pid, issue_id, id, value);
    return this.props.issue.ecode;
  }

  async indexWorklog(issue_id) {
    await this.props.issueActions.indexWorklog(this.pid, issue_id);
    return this.props.issue.ecode;
  }

  async addWorklog(issue_id, values) {
    await this.props.issueActions.addWorklog(this.pid, issue_id, values);
    return this.props.issue.ecode;
  }

  async delWorklog(issue_id, id) {
    await this.props.issueActions.delWorklog(this.pid, issue_id, id);
    return this.props.issue.ecode;
  }

  async editWorklog(issue_id, id, value) {
    await this.props.issueActions.editWorklog(this.pid, issue_id, id, value);
    return this.props.issue.ecode;
  }

  async indexHistory(issue_id) {
    await this.props.issueActions.indexHistory(this.pid, issue_id);
    return this.props.issue.ecode;
  }

  async doAction(issue_id, workflow_id, action_id, values) {
    await this.props.issueActions.doAction(this.pid, issue_id, workflow_id, action_id, values || {});
    return this.props.issue.ecode;
  }

  watch(issue_id, flag) {
    this.props.issueActions.watch(this.pid, issue_id, flag);
  }

  record() {
    this.props.issueActions.record();
  }

  forward(offset) {
    this.props.issueActions.forward(offset);
  }

  cleanRecord() {
    this.props.issueActions.cleanRecord();
  }

  async createLink(values) {
    await this.props.issueActions.createLink(this.pid, values);
    return this.props.issue.ecode;
  }

  async delLink(id) {
    await this.props.issueActions.delLink(this.pid, id);
    return this.props.issue.ecode;
  }

  async resetState(id) {
    await this.props.issueActions.resetState(this.pid, id);
    return this.props.issue.ecode;
  }

  async copy(values) {
    await this.props.issueActions.copy(this.pid, values);
    return this.props.issue.ecode;
  }

  componentWillMount() {
    const { params: { key } } = this.props;
    this.pid = key;
  }

  render() {
    return (
      <div>
        <Header getOptions={ this.getOptions.bind(this) } { ...this.props.activity }/>
        <List 
          index={ this.index.bind(this) } 
          more={ this.more.bind(this) } 
          show={ this.show.bind(this) }
          edit={ this.edit.bind(this) }
          create={ this.create.bind(this) }
          setAssignee={ this.setAssignee.bind(this) }
          delFile={ this.delFile.bind(this) }
          addFile={ this.props.issueActions.addFile }
          record={ this.record.bind(this) }
          forward={ this.forward.bind(this) }
          cleanRecord={ this.cleanRecord.bind(this) }
          project={ this.props.project.item }
          wfCollection={ this.props.wfconfig.collection || [] }
          wfLoading={ this.props.wfconfig.indexLoading }
          viewWorkflow={ this.viewWorkflow.bind(this) }
          indexComments={ this.indexComments.bind(this) }
          addComments={ this.addComments.bind(this) }
          editComments={ this.editComments.bind(this) }
          delComments={ this.delComments.bind(this) }
          indexWorklog={ this.indexWorklog.bind(this) }
          addWorklog={ this.addWorklog.bind(this) }
          editWorklog={ this.editWorklog.bind(this) }
          delWorklog={ this.delWorklog.bind(this) }
          indexHistory={ this.indexHistory.bind(this) }
          createLink={ this.createLink.bind(this) }
          delLink={ this.delLink.bind(this) }
          doAction={ this.doAction.bind(this) }
          watch={ this.watch.bind(this) }
          copy={ this.copy.bind(this) }
          resetState={ this.resetState.bind(this) }
          { ...this.props.issue }
          { ...this.props.activity }/>
      </div>
    );
  }
}
