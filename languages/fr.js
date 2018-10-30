/*! 
 * numeral.js language configuration
 * language : french (fr)
 * author : Adam Draper : https://github.com/adamwdraper
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
            minutes: 'min.',
            hours: 'h',
            days: 'j',
            weeks: 'sem.',
            months: 'mois',
            years: 'a'
        },
        isPlural: function (amount) {
            return amount != null && amount > 1 ? 1 : 0;
        },
        durations: {
            plural: {
                seconds: 'secondes',
                minutes: 'minutes',
                hours: 'heures',
                days: 'jours',
                weeks: 'semaines',
                months: 'mois',
                years: 'années'
            },
            singular: {
                seconds: 'seconde',
                minutes: 'minute',
                hours: 'heure',
                days: 'jour',
                weeks: 'semaine',
                months: 'mois',
                years: 'année'
            }
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
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
        this.numeral.language('fr', language);
    }
}());