var countryMap = {
  'america': 'United States'
  , 'uk': 'United Kingdom'
}

require('world-countries').forEach(function (country) {
  countryMap[country.name.toLowerCase()] = country.name
  countryMap[country.demonym.toLowerCase()] = country.name
  country.altSpellings.forEach(function (altSpelling) {
     if (altSpelling.length > 2)
    countryMap[altSpelling.toLowerCase()] = country.name
  })
})

module.exports = countryMap