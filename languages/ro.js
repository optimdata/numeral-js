/*!
 * numeral.js language configuration
 * language : romanian (ro)
 * author : Elena Neacsu : https://github.com/endeav
 */
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mil',
            billion: 'mld',
            trillion: 't',
            // TODO: Add duration abbreviations
        },
        ordinal: function (number) {
            return '-';
        },
        currency: {
            symbol: 'RON'
        }
        // TODO: Add durations
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('ro', language);
    }
}());