import database from 'mongoose'

const { Schema, model } = database

const studySchema = new Schema({
  TrialID: String,
  'Public title': String,
  'Last Refreshed on': String,
  'Scientific title': String,
  Acronym: String,
  'Primary sponsor': String,
  'Date registration': String,
  'Date registration3': Number,
  'Export date': String,
  'Source Register': String,
  'web address': String,
  'Recruitment Status': String,
  'other records': String,
  'Inclusion agemin': String,
  'Inclusion agemax': String,
  'Inclusion gender': String,
  'Date enrollement': String,
  'Target size': Number,
  'Study type': String,
  'Study design': String,
  Phase: String,
  Countries: String,
  'Contact Firstname': String,
  'Contact Lastname': String,
  'Contact Address': String,
  'Contact Email': String,
  'Contact Tel': String,
  'Contact Affiliation': String,
  'Inclusion Criteria': String,
  'Exclusion Criteria': String,
  Condition: String,
  Intervention: String,
  'Primary outcome': String,
  'results date posted': String,
  'results date completed': String,
  'results url link': String,
  'Retrospective flag': String,
  'Bridging flag truefalse': String,
  'Bridged type': String,
  'results yes no': String
})

export default model('Study', studySchema, 'studies')
