var countryMap = {}

require('world-countries')
  .sort(function (country1, country2) {
    return parseFloat(country1.relevance) - parseFloat(country2.relevance)
  })
  .forEach(function (country) {
    countryMap[country.name.toLowerCase()] = country.name
    countryMap[country.demonym.toLowerCase()] = country.name
    country.altSpellings.forEach(function (altSpelling) {
       if (altSpelling.length > 2)
      countryMap[altSpelling.toLowerCase()] = country.name
    })
  })

// add some custom names
countryMap.america = 'United States'
countryMap.uk = 'United Kingdom'

module.exports = countryMap