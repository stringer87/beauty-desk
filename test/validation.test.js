const { Password, Name, Email } = require('../src/components/validation/index.js')

test('Password Validation Pass', () => {
  const res = Password('JJSkks*122')
  expect(res).toEqual(true)
})

test('Password Validation Fail', () => {
  const res = Password('klasdjo2k')
  expect(res).toEqual(false)
})

test('Name Validation Pass', () => {
  const res = Name('james')
  expect(res).toEqual(true)
})

test('Name Validation Fail', () => {
  const res = Name(' James')
  expect(res).toEqual(false)
  const res2 = Name('james1')
  expect(res2).toEqual(false)
})

test('Email Validation Pass', () => {
  const res = Email('jms@gmail.com')
  expect(res).toEqual(true)
})

test('Email Validation Fail', () => {
  const res = Email('jsm.com@gmail')
  expect(res).toEqual(false)
})