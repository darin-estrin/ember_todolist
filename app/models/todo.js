import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    date: DS.attr('string'),
    created_at: DS.attr('string', {
        defaultvalue: function(){
            return new Date();
        }
    })
});
