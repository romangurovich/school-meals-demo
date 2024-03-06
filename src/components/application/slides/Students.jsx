import React, { Component } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class Students extends Component {
  render() {
    const { students } = this.props

    const headerText =
      <FormattedMessage
          id="app.slides.students.header"
          description="Text for the header of the slide."
          defaultMessage="Students."
      />


    return (
      <Slide id="students" header={headerText} nextDisabled={!students.isValid} beginsSection>
        <p>
          <FormattedMessage
              id="app.slides.students.intro"
              description="Introductory paragraph."
              defaultMessage="List the names of the students in your household. Include any foster children who are students."
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.students.definition"
              description="Definition of a student."
              defaultMessage="For this application, {bolded} means a child who is:"
              values={{
                bolded: <strong><FormattedMessage
                    id="app.slides.students.definition.bolded"
                    description="Student"
                    defaultMessage="student"
                                /></strong>
              }}
          />
          <ul className="usa-content-list">
            <li>
              <FormattedMessage
                  id="app.slides.students.definition1"
                  description="Pre-k to 12"
                  defaultMessage="In pre-K to 12th grade"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.students.definition2"
                  description="Part of lunch program"
                  defaultMessage="In a public or private school that is part of the National School Lunch Program"
              />
            </li>
          </ul>
        </p>

        <p>
          <FormattedMessage
              id="app.slides.students.definition3"
              description="Residential childcare"
              defaultMessage="A student also might include someone in a residential child care institution."
          />
        </p>
        <p>
          <FormattedMessage
              id="app.slides.students.otherChildren"
              description="A note to enter other children elsewhere"
              defaultMessage="If you have other children who are not students as described above, wait to enter their information on a later screen."
          />
        </p>

        <PersonCollection
            collection={students}
            label={
              <FormattedMessage
                  id="app.slides.students.label"
                  description="Label used for title, add/remove buttons."
                  defaultMessage="Student"
              />
            }
        />
      </Slide>
    )
  }
}

export default Students
