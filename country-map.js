var countryMap = {
  'america': 'United States'
}

require('world-countries').forEach(function (country) {
  countryMap[country.name.toLowerCase()] = country.name
  country.altSpellings.forEach(function (altSpelling) {
    countryMap[altSpelling.toLowerCase()] = country.name
  })
})

module.exports = countryMap