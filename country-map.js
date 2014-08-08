var countryMap = {}

require('world-countries').forEach(function (country) {
  countryMap[country.name.toLowerCase()] = country.name
  countryMap[country.demonym.toLowerCase()] = country.name
  country.altSpellings.forEach(function (altSpelling) {
     if (altSpelling.length > 2)
    countryMap[altSpelling.toLowerCase()] = country.name
  })
})

// overwrite any existing definitions - (american became something weird)
countryMap.america = 'United States'
countryMap.american = 'United States'
countryMap.french = 'France'
countryMap.uk = 'United Kingdom'

module.exports = countryMap