/*! 
 * numeral.js language configuration
 * language : German (de) – generally useful in Germany, Austria, Luxembourg, Belgium
 * author : Marco Krage : https://github.com/sinky
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
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
            weeks: 'w',
            months: 'mo',
            years: 'y',
        },
        isPlural: function (amount) {
            return amount === 1 ? 0 : 1;
        },
        durations: {
            plural: {
                seconds: 'Sekunden',
                minutes: 'Minuten',
                hours: 'Stunden',
                days: 'Tage',
                weeks: 'Wochen',
                months: 'Monten',
                years: 'Jahre',
            },
            singular: {
                seconds: 'Sekunde',
                minutes: 'Minute',
                hours: 'Stunde',
                days: 'Tag',
                weeks: 'Woche',
                months: 'Monat',
                years: 'Jahr',
            },
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '€'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('de', language);
    }
}());