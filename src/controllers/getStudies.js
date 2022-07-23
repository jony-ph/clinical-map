import Study from '../models/Study.js'

// Document list
export const getAllStudies = async (req, res, next) => {
  try {
    const studies = await Study.find()
    res.json(studies)
  } catch (error) {
    next(error)
  }
}

export const getCountry = async (req, res, next) => {
  try {
    const { country } = req.params

    const studies = await Study.find({
      Countries: country
    })

    studies !== [] ? res.json(studies) : res.status(400).end()
  } catch (error) {
    next(error)
  }
}

//  Just one document
export const getSpecificTrial = async (req, res, next) => {
  try {
    const { trial } = req.params

    const studies = await Study.find({
      TrialID: trial
    })

    studies ? res.json(studies) : res.status(400).end()
  } catch (error) {
    next(error)
  }
}

export const getDateRegistration = async (req, res, next) => {
  try {
    const { date } = req.params

    const studies = await Study.find({
      'Date registration3': Number(date)
    })

    studies ? res.json(studies) : res.status(400).end()
  } catch (error) {
    next(error)
  }
}
