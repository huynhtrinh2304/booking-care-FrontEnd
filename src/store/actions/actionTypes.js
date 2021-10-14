
const actionTypes = Object.freeze({


    // app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',




    // user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',


    // admin


    // Genders
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',


    // Position
    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAILEDED: 'FETCH_POSITION_FAILED',

    // Role
    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILEDED: 'FETCH_ROLE_FAILED',

    // Create user by redux
    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILED: 'CREATE_USER_FAILED',

    // Get user by redux
    GET_ALL_USER_SUCCESS: 'GET_ALL_USER_SUCCESS',
    GET_ALL_USER_FAILED: 'GET_ALL_USER_FAILED',

    // Delete user by redux
    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILED: 'DELETE_USER_FAILED',

    // Update user by redux
    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
    UPDATE_USER_FAILED: 'UPDATE_USER_FAILED',



    // Get top doctor
    FETCH_TOP_DOCTORS_SUCCESS: 'FETCH_TOP_DOCTORS_SUCCESS',
    FETCH_TOP_DOCTORS_FAILED: 'FETCH_TOP_DOCTORS_FAILED',


    // Get all doctor by redux
    FETCH_ALL_DOCTORS_SUCCESS: 'FETCH_ALL_DOCTORS_SUCCESS',
    FETCH_ALL_DOCTORS_FAILED: 'FETCH_ALL_DOCTORS_FAILED',

    // Post infor doctor
    POST_INFOR_DOCTORS_SUCCESS: 'POST_INFOR_DOCTORS_SUCCESS',
    POST_INFOR_DOCTORS_FAILED: 'POST_INFOR_DOCTORS_FAILED',

    // Allcode schedule
    FETCH_ALLCODE_SCHEDULE_SUCCESS: 'FETCH_ALLCODE_SCHEDULE_SUCCESS',
    FETCH_ALLCODE_SCHEDULE_SUCCESS: 'FETCH_ALLCODE_SCHEDULE_FAILED',


})

export default actionTypes;