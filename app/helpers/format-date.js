import Ember from 'ember';

export function formatDate(params){
    return moment(params[0]).format('MM/DD/YY');
}

export default Ember.Helper.helper(formatDate);