import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        pushModel(model) {
            console.log(`Saving model with address ${model.get('address')}`);
        }
    }
});
