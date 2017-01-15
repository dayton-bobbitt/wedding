import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    hasRsvp: DS.attr('boolean', {defaultValue: false}),
    isNotFound: DS.attr('boolean', {defaultValue: false})
});
