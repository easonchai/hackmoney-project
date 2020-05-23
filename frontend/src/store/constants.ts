export enum AppActions {
  ADD_NOTIFICATION = "APP/ADD_NOTIFICATION",
  REMOVE_NOTIFICATION = "APP/REMOVE_NOTIFICATION",

  UPDATE_ORGANIZER_ETHEREUM_ADDRESS = "APP/UPDATE_ORGANIZER_ETHEREUM_ADDRESS",
  CREATE_FIRST_MEETING = "APP/CREATE_FIRST_MEETING",
  READ_ALL_MEETINGS = "APP/READ_ALL_MEETINGS",
  READ_CACHED_MEETING = "APP/READ_CACHED_MEETING",
  UPDATE_MEETING_CONTRACT_ADDRESS = "APP/UPDATE_MEETING_CONTRACT_ADDRESS",
  UPDATE_MEETING_RSVP_LIST = "APP/UPDATE_MEETING_RSVP_LIST",
  UPDATE_MEETING_RSVP_LIST_CANCELLATION = "APP/UPDATE_MEETING_RSVP_LIST_CANCELLATION",
  UPDATE_START_MEETING = "APP/UPDATE_START_MEETING",
  UPDATE_END_MEETING = "APP/UPDATE_END_MEETING",
  UPDATE_CANCEL_MEETING = "APP/UPDATE_CANCEL_MEETING",
  UPDATE_HANDLE_ATTENDANCE = "APP/UPDATE_HANDLE_ATTENDANCE",
  CREATE_NEXT_MEETING = "APP/CREATE_NEXT_MEETING",

  CREATE_USER_FEEDBACK = "APP/CREATE_USER_FEEDBACK",
  UPDATE_USER_ETHEREUM_ADDRESS = "APP/UPDATE_USER_ETHEREUM_ADDRESS",
  UPDATE_USER_ENS_DOMAIN = "APP/UPDATE_USER_ENS_DOMAIN",

  UPDATE_CACHED_MEETING_LOADING = "APP/UPDATE_CACHED_MEETING_LOADING",
  UPDATE_MEETING_DEPLOYMENT_LOADING = "APP/UPDATE_MEETING_DEPLOYMENT_LOADING",
  UPDATE_RSVP_CONFIRMATION_LOADING = "APP/UPDATE_RSVP_CONFIRMATION_LOADING",
  UPDATE_RSVP_CANCELLATION_CONFIRMATION_LOADING = "APP/UPDATE_RSVP_CANCELLATION_CONFIRMATION_LOADING",
  UPDATE_START_MEETING_CONFIRMATION_LOADING = "APP/UPDATE_START_MEETING_CONFIRMATION_LOADING",
  UPDATE_END_MEETING_CONFIRMATION_LOADING = "APP/UPDATE_END_MEETING_CONFIRMATION_LOADING",
  UPDATE_CANCEL_MEETING_CONFIRMATION_LOADING = "APP/UPDATE_CANCEL_MEETING_CONFIRMATION_LOADING",
  UPDATE_MARK_ATTENDANCE_CONFIRMATION_LOADING = "APP/UPDATE_MARK_ATTENDANCE_CONFIRMATION_LOADING",
}