var test = require('tap').test
  , countryCount = require('./country-count')

test('should return list with countries and nr of occurances', function (t) {
  var possibleCountries = ['USA', 'Sweden', 'United States of America', 'America', 'No country', 'danish']
    , countryArr = countryCount(possibleCountries)

  t.deepEqual(countryArr, {
      'United States': 3
    , 'Sweden': 1
    , 'Denmark': 1
  })

  t.end()
})

test('american is USA', function (t) {
  t.deepEqual(countryCount([ 'American' ]), { 'United States': 1 })
  t.end()
})

test('french is france', function (t) {
  t.deepEqual(countryCount([ 'french' ]), { France: 1 })
  t.end()
})

test('norwegian in norway', function (t) {
  t.deepEqual(countryCount([ 'norwegian' ]), { Norway: 1 })
  t.end()
})

test('should not parse IT, SO or AM as countries', function (t) {
  var possibleCountries = ['it', 'so', 'am', 'uk']
    , countryArr = countryCount(possibleCountries)

    t.deepEqual(countryArr, {
      'United Kingdom': 1
    })

    t.end()
})
