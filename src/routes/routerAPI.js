import express from 'express'
import {
  getCountry,
  getAllStudies,
  getSpecificTrial,
  getDateRegistration
} from '../controllers/getStudies.js'

import {
  getRCountry,
  getAllRStudies,
  getRSpecificTrial,
  getRDateRegistration
} from '../controllers/getRStudies.js'

const router = express.Router()

// GET
router.get('/all', getAllStudies)
router.get('/country/:country', getCountry)
router.get('/trial/:trial', getSpecificTrial)
router.get('/registration/:date', getDateRegistration)

// GET relevant information
router.get('/', getAllRStudies)
router.get('/country/r/:country', getRCountry)
router.get('/trial/r/:trial', getRSpecificTrial)
router.get('/registration/r/:date', getRDateRegistration)

export default router
