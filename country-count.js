var countryMap = require('./country-map')

module.exports = function (possibleCountries) {
  var result = {};

  possibleCountries.forEach(function (possibleCountry) {
    var country = countryMap[possibleCountry.toLowerCase()]
    if (country)
      result[country] = result[country] ? result[country] + 1 : 1
  })

  return result
}