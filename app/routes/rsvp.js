import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        const store = this.get('store');

        let guest = store.peekRecord('guest', 1);

        if (!guest) {
            guest = store.createRecord('guest');
        }

        return guest;
    }
});
