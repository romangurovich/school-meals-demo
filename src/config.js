// Automatically updates to the current calendar year.
// This can be overridden by setting the following variable (e.g. to 2016) --
// NOTE that manually setting the school year will require the application
// to be rebuilt every year to reflect a new school year.
export const schoolYear = null

export const organization = {
  state: 'North Carolina',
  name: 'Applewood School District',
  shortname: 'ASD',
  logoUrl: 'img/Applewood_logo.png',
  year: 2025,
  contact: {
    address: '100 Main Street, Anytown, USA 12345',
    phone: '555-123-4567',
    email: 'sfa@state.us'
  },
  paperApplication: {
    url: 'http://www.fns.usda.gov/sites/default/files/cn/SP34-2016a2.pdf',
    address: '100 Main Street, Anytown, USA 12345',
    phone: '555-123-4567',
    email: 'sfa@state.us'
  }
}

export const schoolDistricts = {
  'Camden County School District': [
    'Grandy Primary',
    'Camden Intermediate School',
    'Camden Middle',
    'Camden Early College High',
    'Camden County High School'
  ],
  'Hyde County School District': [
    'Mattamuskeet Elementary',
    'Mattamuskeet Early College High School',
    'Ocracoke School'
  ]
}

export const grades = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

export const assistancePrograms = [
  'Supplemental Nutrition Assistance Program (SNAP)',
  'Temporary Assistance for Needy Families (TANF)',
  'Food Distribution Program on Indian Reservations (FDPIR)'
]

export const assistanceProgramsVarArray = [
  {
    fullName: 'Supplemental Nutrition Assistance Program',
    accronym: 'SNAP'
  },
  {
    fullName: 'Temporary Assistance for Needy Families',
    accronym: 'TANF'
  },
  {
    fullName: 'Food Distribution Program on Indian Reservations',
    accronym: 'FDPIR'
  }
]

export const assistanceProgramsVar = {
  snap: assistanceProgramsVarArray[0],
  tanf: assistanceProgramsVarArray[1],
  fdpir: assistanceProgramsVarArray[2]
}

export const hmrPrograms = {
  mep: {
    fullName: 'Migrant Education Program',
    accronym: 'MEP'
  },
  mckinney: {
    shortName: 'McKinney-Vento Homeless Assistance Act',
    fullName: 'McKinney-Vento Education of Homeless Children and Youth Assistance Act'
  },
  runaway: 'Runaway and Homeless Youth Act'
}

// To support an additional language:
//     1. add an import statment for it:
import es from 'react-intl/locale-data/es';
import en from 'react-intl/locale-data/en';

//     2. add its language code to the following array:
import { addLocaleData } from 'react-intl'
addLocaleData([...es, ...en])

//     3. create a JSON file in /translations/ with the name of the locale code
//     4. add locale to the following array (NOTE: keep English as first item)
export const locales = [
  {
    code: 'en',
    language: 'English',
    iSpeak: 'I speak English'
  },
  {
    code: 'es',
    language: 'Español',
    iSpeak: 'Yo hablo español'
  }
]
//     5. add locale to the Intl polyfill in index.html (see polyfill.min.js)