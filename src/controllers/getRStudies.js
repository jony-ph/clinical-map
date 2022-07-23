import Study from '../models/Study.js'

const relevantData = {
  TrialID: true,
  Acronym: true,
  Countries: true,
  'Public title': true,
  'Scientific title': true,
  'Primary sponsor': true,
  'Primary outcome': true,
  'Date registration': true,
  'Date registration3': true,
  'Date enrollement': true,
  'Export date': true,
  'Source Register': true,
  'web address': true,
  'Study type': true,
  'Inclusion Criteria': true
}

// Document list
export const getAllRStudies = async (req, res, next) => {
  try {
    const studies = await Study.find({}, relevantData)
    res.json(studies)
  } catch (error) {
    next(error)
  }
}

export const getRCountry = async (req, res, next) => {
  try {
    const { country } = req.params

    const studies = await Study.find({
      Countries: country
    }, relevantData)

    studies !== [] ? res.json(studies) : res.status(400).end()
  } catch (error) {
    next(error)
  }
}

//  Just one document
export const getRSpecificTrial = async (req, res, next) => {
  try {
    const { trial } = req.params

    const studies = await Study.find({
      TrialID: trial
    }, relevantData)

    studies ? res.json(studies) : res.status(400).end()
  } catch (error) {
    next(error)
  }
}

export const getRDateRegistration = async (req, res, next) => {
  try {
    const { date } = req.params

    const studies = await Study.find({
      'Date registration3': Number(date)
    }, relevantData)

    studies ? res.json(studies) : res.status(400).end()
  } catch (error) {
    next(error)
  }
}
