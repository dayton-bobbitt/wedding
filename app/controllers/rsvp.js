import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        pushModel(model) {
            this.get('store').query('address', {
                filter: {
                    address: model.get('address')
                }
            }).then((addresses) => {

                // Set RSVP true only if guest exists in database
                if (addresses.length > 0) {
                    model.set('hasRsvp', true);
                    model.save();
                }
            }).catch(() => {
                console.log('Something went wrong... ¯\_(ツ)_/¯');
            });
        }
    }
});
