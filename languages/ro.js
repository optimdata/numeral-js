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
            million: 'mil', // milion/milioane
            billion: 'mld', // miliard/miliarde
            trillion: 't',
        },
        ordinal: function (number) {
            // In Romanian the ordinal can have different forms based on gender
            // and the quantity
            // masculine:
            // E.g.: 1st = primul; 2nd = al doilea; 3rd = al treilea
            // feminine:
            // E.g.: 1st = prima; 2nd = a doua; 3rd = a treia
            // Therefore is difficult to predict the format
            return '';
        },
        currency: {
            symbol: 'RON'
        }
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