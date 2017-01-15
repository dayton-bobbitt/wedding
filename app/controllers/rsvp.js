import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        pushModel(model) {
            this.get('store').query('guest', {
                filter: {
                    firstName: model.get('firstName'),
                    lastName: model.get('lastName')
                }
            }).then((guests) => {

                // Set RSVP true only if guest exists in database
                if (guests.length > 0) {
                    model.set('hasRsvp', true);
                    model.save();
                } else {
                    model.set('isNotFound', true);
                }
            }).catch(() => {
                console.log('Something went wrong... ¯\\_(ツ)_/¯');
                model.set('isNotFound', true);
            });
        }
    },

    resetIsNotFound(model) {
        model.set('isNotFound', false);
    }
});
