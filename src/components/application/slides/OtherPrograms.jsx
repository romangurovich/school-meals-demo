import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import OtherProgramsProgram from './OtherProgramsProgram'
import Tooltip from '../Tooltip'
import { tooltiptext } from '../../Tooltiptext'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { hmrPrograms, organization } from '../../../config'
import { FormattedMessage } from 'react-intl'

@observer
class OtherPrograms extends Component {
  @observable applicability = {
    isHomeless: null,
    isMigrant: null,
    isRunaway: null
  }

  get isValid() {
    const students = this.props.students

    if (students.length === 1) {
      for (const key in this.applicability) {
        if (students[0][key] === null) {
          return false
        }
      }
    } else {
      for (const key in this.applicability) {
        if (this.applicability[key] === null) {
          return false
        } else if (this.applicability[key] === true) {
          if (students
            .map(student => student[key] !== true)
            .reduce((a, b) => a && b, true)) {
            return false
          }
        }
      }
    }

    return true
  }

  render() {
    const { allPeopleCollections, students } = this.props
    const headerText =
    <FormattedMessage
        id="app.slides.otherPrograms.header"
        description="Text for the header of the slide."
        defaultMessage="Other programs"
    />
    const props = {
      students,
      allPeopleCollections,
      applicability: this.applicability
    }

    const studentCount = students.length
    const programs = [
      {
        attribute: 'isHomeless',
        label: <FormattedMessage
            id="app.slides.otherPrograms.isHomeless.label"
            description="Question asking if student is a homeless child."
            defaultMessage="Do any of your children receive assistance under the {programName}?"
            values={{
              programName: <Tooltip id="mckinney" text={tooltiptext.mckinney} target={hmrPrograms.mckinney.shortName} />
            }}
               />,
        note: <FormattedMessage
            id="app.slides.otherPrograms.isHomeless"
            description="Homeless organizations"
            defaultMessage="If not, but your household lacks a permanent address, or stays together in a shelter, hotel, or other temporary housing arrangement, contact {stateName} for help."
            values={{
              studentCount,
              stateName: organization.state
            }}
              />
      },
      {
        attribute: 'isMigrant',
        label: <FormattedMessage
            id="app.slides.otherPrograms.isMigrant.label"
            description="Question asking if student is a migrant child."
            defaultMessage="Do any of your children participate in the {programName}?"
            values={{
              programName: <span>{hmrPrograms.mep.fullName} (<Tooltip id="migrant" text={tooltiptext.mep} target={hmrPrograms.mep.accronym} />)</span>
            }}
               />,
        note: <FormattedMessage
            id="app.slides.otherPrograms.isMigrant"
            description="Migrant Organizations"
            defaultMessage="If not, but you moved your household into a different school district within the last three years to gain or look for temporary/seasonal work in agriculture or fishing, contact {stateName} for help."
            values={{
              studentCount,
              stateName: organization.state
            }}
              />
      },
      {
        attribute: 'isRunaway',
        label: <FormattedMessage
            id="app.slides.otherPrograms.isRunaway.label"
            description="Question asking if student is a runaway child."
            defaultMessage="Do any of your children participate in a program under the {programName}?"
            values={{
              programName: <Tooltip id="runaway" text={tooltiptext.runaway} target={hmrPrograms.runaway} />
            }}
               />,
        note: <FormattedMessage
            id="app.slides.otherPrograms.isRunaway"
            description="Run Away Organizations"
            defaultMessage="If not, but {studentCount, plural, one {he/she} other {they}} chose to leave {studentCount, plural, one {his/her} other {their}} prior family or household, contact {stateName} for help."
            values={{
              studentCount,
              stateName: organization.state
            }}
              />
      }
    ]

    return (
      <Slide nextDisabled={!this.isValid} id="other-programs" header={headerText}>
        {programs.map((program, i) =>
          <OtherProgramsProgram key={i} {...program} {...props} />
         )
        }
      </Slide>
    )
  }
}

OtherPrograms.propTypes = {
  allPeopleCollections: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired
}

export default OtherPrograms
