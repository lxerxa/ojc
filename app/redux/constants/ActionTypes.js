import { generateConstants } from '../utils';

export default generateConstants([

  'SCHEME_INDEX(ASYNC)',
  'SCHEME_CREATE(ASYNC)',
  'SCHEME_SELECT',
  'SCHEME_UPDATE(ASYNC)',
  'SCHEME_DELETE(ASYNC)',

  'USER_REGISTER(ASYNC)',
  'USER_CREATE(ASYNC)',
  'USER_IMPORTS(ASYNC)',
  'USER_UPDATE(ASYNC)',
  'USER_PWD_RESET(ASYNC)',
  'USER_PWD_RENEW(ASYNC)',
  'USER_INDEX(ASYNC)',
  'USER_DELETE(ASYNC)',
  'USER_MULTI_DELETE(ASYNC)',
  'USER_MULTI_PWDRENEW(ASYNC)',
  'USER_SELECT',

  'GROUP_CREATE(ASYNC)',
  'GROUP_UPDATE(ASYNC)',
  'GROUP_INDEX(ASYNC)',
  'GROUP_DELETE(ASYNC)',
  'GROUP_MULTI_DELETE(ASYNC)',
  'GROUP_SELECT',

  'SESSION_CREATE(ASYNC)',
  'SESSION_DESTROY(ASYNC)',
  'SESSION_GET(ASYNC)',
  'SESSION_INVALIDATE',

  'PROJECT_INDEX(ASYNC)',
  'PROJECT_MORE(ASYNC)',
  'PROJECT_CREATE(ASYNC)',
  'PROJECT_UPDATE(ASYNC)',
  'PROJECT_CLOSE(ASYNC)',
  'PROJECT_REOPEN(ASYNC)',
  'PROJECT_CREATEINDEX(ASYNC)',
  'PROJECT_MULTI_CLOSE(ASYNC)',
  'PROJECT_MULTI_REOPEN(ASYNC)',
  'PROJECT_MULTI_CREATEINDEX(ASYNC)',
  'PROJECT_SHOW(ASYNC)',
  'PROJECT_SELECT',
  'PROJECT_OPTIONS(ASYNC)',
  'PROJECT_RECENTS(ASYNC)',
  'PROJECT_CLEAN_SELECTED',

  'PROJECT_CONFIG(ASYNC)',

  'TYPE_INDEX(ASYNC)',
  'TYPE_INIT',
  'TYPE_CREATE(ASYNC)',
  'TYPE_SELECT',
  'TYPE_UPDATE(ASYNC)',
  'TYPE_DELETE(ASYNC)',
  'TYPE_SET_SORT(ASYNC)',
  'TYPE_SET_DEFAULT(ASYNC)',

  'MODULE_INDEX(ASYNC)',
  'MODULE_CREATE(ASYNC)',
  'MODULE_SELECT',
  'MODULE_UPDATE(ASYNC)',
  'MODULE_DELETE(ASYNC)',

  'VERSION_INDEX(ASYNC)',
  'VERSION_CREATE(ASYNC)',
  'VERSION_SELECT',
  'VERSION_UPDATE(ASYNC)',
  'VERSION_DELETE(ASYNC)',

  'FIELD_INDEX(ASYNC)',
  'FIELD_CREATE(ASYNC)',
  'FIELD_SELECT',
  'FIELD_UPDATE(ASYNC)',
  'FIELD_DELETE(ASYNC)',

  'SCREEN_INDEX(ASYNC)',
  'SCREEN_CREATE(ASYNC)',
  'SCREEN_SELECT',
  'SCREEN_UPDATE(ASYNC)',
  'SCREEN_DELETE(ASYNC)',

  'WORKFLOW_INDEX(ASYNC)',
  'WORKFLOW_CREATE(ASYNC)',
  'WORKFLOW_SELECT',
  'WORKFLOW_PREVIEW(ASYNC)',
  'WORKFLOW_UPDATE(ASYNC)',
  'WORKFLOW_DELETE(ASYNC)',

  'WFCONFIG_INDEX(ASYNC)',
  'WFCONFIG_SAVE(ASYNC)',
  'WFCONFIG_STEP_CREATE',
  'WFCONFIG_STEP_EDIT',
  'WFCONFIG_STEP_DELETE',
  'WFCONFIG_ACTION_ADD',
  'WFCONFIG_ACTION_EDIT',
  'WFCONFIG_ACTION_DELETE',

  'STATE_INDEX(ASYNC)',
  'STATE_CREATE(ASYNC)',
  'STATE_SELECT',
  'STATE_UPDATE(ASYNC)',
  'STATE_DELETE(ASYNC)',

  'RESOLUTION_INDEX(ASYNC)',
  'RESOLUTION_CREATE(ASYNC)',
  'RESOLUTION_SELECT',
  'RESOLUTION_UPDATE(ASYNC)',
  'RESOLUTION_DELETE(ASYNC)',
  'RESOLUTION_SET_SORT(ASYNC)',
  'RESOLUTION_SET_DEFAULT(ASYNC)',

  'PRIORITY_INDEX(ASYNC)',
  'PRIORITY_CREATE(ASYNC)',
  'PRIORITY_SELECT',
  'PRIORITY_UPDATE(ASYNC)',
  'PRIORITY_DELETE(ASYNC)',
  'PRIORITY_SET_SORT(ASYNC)',
  'PRIORITY_SET_DEFAULT(ASYNC)',

  'ROLE_INDEX(ASYNC)',
  'ROLE_TEAM_INDEX(ASYNC)',
  'ROLE_CREATE(ASYNC)',
  'ROLE_SELECT',
  'ROLE_UPDATE(ASYNC)',
  'ROLE_SET_ACTOR(ASYNC)',
  'ROLE_SET_GROUP_ACTOR(ASYNC)',
  'ROLE_DELETE(ASYNC)',

  'ROLEACTOR_INDEX(ASYNC)',
  'ROLEACTOR_EDIT(ASYNC)',

  'EVENTS_INDEX(ASYNC)',
  'EVENTS_CREATE(ASYNC)',
  'EVENTS_SELECT',
  'EVENTS_UPDATE(ASYNC)',
  'EVENTS_RESET(ASYNC)',
  'EVENTS_DELETE(ASYNC)',

  'PROJECT_SUMMARY(ASYNC)',

  'ISSUE_INDEX(ASYNC)',
  'ISSUE_CREATE(ASYNC)',
  'ISSUE_OPTIONS(ASYNC)',
  'ISSUE_SHOW(ASYNC)',
  'ISSUE_EDIT(ASYNC)',
  'ISSUE_SET_ASSIGNEE(ASYNC)',
  'ISSUE_DELETE(ASYNC)',

  'ISSUE_SEARCHER_ADD(ASYNC)',
  'ISSUE_SEARCHER_DELETE(ASYNC)',
  'ISSUE_SEARCHER_CONFIG(ASYNC)',

  'ISSUE_FILE_DELETE(ASYNC)',
  'ISSUE_FILE_ADD',
  'ISSUE_COMMENTS_INDEX(ASYNC)',
  'ISSUE_COMMENTS_ADD(ASYNC)',
  'ISSUE_COMMENTS_EDIT(ASYNC)',
  'ISSUE_COMMENTS_DELETE(ASYNC)',

  'ISSUE_HISTORY_INDEX(ASYNC)',

  'ISSUE_RECORD',
  'ISSUE_FORWARD',
  'ISSUE_CLEAN_RECORD',

  'ISSUE_WORKLOG_INDEX(ASYNC)',
  'ISSUE_WORKLOG_ADD(ASYNC)',
  'ISSUE_WORKLOG_EDIT(ASYNC)',
  'ISSUE_WORKLOG_DELETE(ASYNC)',

  'ISSUE_LINK_CREATE(ASYNC)',
  'ISSUE_LINK_DELETE(ASYNC)',

  'ISSUE_STATE_RESET(ASYNC)',
  'ISSUE_MOVE(ASYNC)',
  'ISSUE_CONVERT(ASYNC)',
  'ISSUE_COPY(ASYNC)',
  'ISSUE_WORKFLOW_ACTION(ASYNC)',

  'ISSUE_WATCHING(ASYNC)',

  'ACTIVITY_INDEX(ASYNC)',
  'ACTIVITY_MORE(ASYNC)',

  'MYSETTING_USER_SHOW(ASYNC)',
  'MYSETTING_PWD_RESET(ASYNC)',
  'MYSETTING_ACCOUNT_UPDATE(ASYNC)',
  'MYSETTING_NOTIFY_UPDATE(ASYNC)',
  'MYSETTING_FAVORITE_UPDATE(ASYNC)',

  'SYSSETTING_SHOW(ASYNC)',
  'SYSSETTING_UPDATE(ASYNC)',
  'SYSSETTING_RESET_PWD(ASYNC)',
  'SYSSETTING_SEND_TESTMAIL(ASYNC)',

  'LOCALE_INITIALIZE',
  'LOCALE_CHANGE(ASYNC)'
]);
