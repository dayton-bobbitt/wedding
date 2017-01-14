import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        const store = this.get('store');

        let address = store.peekRecord('address', 1);

        if (!address) {
            address = store.createRecord('address');
        }

        return address;
    }
});
