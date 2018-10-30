/*! 
 * numeral.js language configuration
 * language : english united kingdom (uk)
 * author : Dan Ristic : https://github.com/dristic
 */
(function () {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't',
            seconds: 's',
            minutes: 'min',
            hours: 'h',
            days: 'd',
            weeks: 'wk',
            months: 'mo',
            years: 'y'
        },
        isPlural: function (amount) {
            return amount === 1 ? 0 : 1;
        },
        durations: {
            plural: {
                seconds: 'seconds',
                minutes: 'minutes',
                hours: 'hours',
                days: 'days',
                weeks: 'weeks',
                months: 'months',
                years: 'years',
            },
            singular: {
                seconds: 'second',
                minutes: 'minute',
                hours: 'hour',
                days: 'day',
                weeks: 'week',
                months: 'month',
                years: 'year',
            },
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '£'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('en-gb', language);
    }
}());