var test = require('tap').test
  , countryCount = require('./country-count')


test('should return list', function (t) {
  var possibleCountries = ['USA', 'Sweden', 'United States of America', 'America', 'No country']
    , countryArr = countryCount(possibleCountries)

  t.deepEqual(countryArr, {
      'United States': 3
    , 'Sweden': 1
  })

  t.end()
})