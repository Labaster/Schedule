const storeState = {
  days: {
    1: {name: 'tu', type: 'qqq'},
    2: {name: 'en', type: 'wwww'},
    3: {name: 'us', type: 'eee'},
    4: {name: 'es', type: '6666'}
  }
};

const selectDays = (state) => state.days;

const selectDayById = (state, id) => selectDays(state)[id];

const selectDayFieldById = (state, id, field) => selectDayById(state, id)[field];

const selectDayNameById = (state, id) => selectDayFieldById(state, id, 'name');

const selectDayTypeById = (state, id) => selectDayFieldById(state, id, 'type');


console.log(selectDayNameById(storeState, 4), selectDayTypeById(storeState, 4));