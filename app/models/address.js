import DS from 'ember-data';

export default DS.Model.extend({
    address: DS.attr(),
    hasRsvp: DS.attr('boolean', {defaultValue: false})
});
