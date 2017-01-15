import Ember from 'ember';

const timeInMs = {
    second: 1000,
    minute: 60000,
    hour: 3600000,
    day: 86400000
};

const weddingDate = new Date(2017, 8, 2, 19);

export default Ember.Service.extend({
    seconds: null,
    minutes: null,
    hours: null,
    days: null,
    inPast: null,

    init() {
        this._super(...arguments);
        this.setTimeRemaining();
        this.set('inPast', this.get('days') < 0);
        this.startCountdown();
    },

    setTimeRemaining() {
        const now = new Date();
        
        const days = (weddingDate.getTime() - now.getTime()) / timeInMs.day;
        this.set('days', Math.floor(days));

        const hours = (days % 1) * timeInMs.day / timeInMs.hour;
        this.set('hours', Math.floor(hours));

        const minutes = (hours % 1) * timeInMs.hour / timeInMs.minute;
        this.set('minutes', Math.floor(minutes));

        const seconds = (minutes % 1) * timeInMs.minute / timeInMs.second;
        this.set('seconds', Math.floor(seconds));
    },

    startCountdown() {
        setTimeout(() => {
            this.decrementSeconds();
        }, 1000);
    },

    decrementSeconds() {
        let seconds = this.get('seconds');

        if (--seconds < 0) {
            seconds = 59;
            this.decrementMinutes();
        }

        this.set('seconds', seconds);

        if (!this.get('inPast')) {
            Ember.run.later(() => {
                this.decrementSeconds();
            }, 1000);
        }
    },

    decrementMinutes() {
        let minutes = this.get('minutes');

        if (--minutes < 0) {
            minutes = 59;
            this.decrementHours();
        }

        this.set('minutes', minutes);
    },

    decrementHours() {
        let hours = this.get('hours');

        if (--hours < 0) {
            hours = 23;
            this.decrementDays();
        }

        this.set('hours', hours);
    },

    decrementDays() {
        let days = this.get('days');
        this.set('days', --days);
        this.set('inPast', days < 0);
    }
});