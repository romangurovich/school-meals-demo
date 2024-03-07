import React from 'react'
import Slide from '../Slide'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class Household extends React.Component {
  constructor(props) {
    super(props)
    this.handleCheckItOut = this.handleCheckItOut.bind(this)
  }

  @observable showExtraContent = false

  handleCheckItOut() {
    this.showExtraContent = true
  }

  render() {
    const headerText =
      <FormattedMessage
          id="app.slides.household.header"
          description="Text for the header of the slide."
          defaultMessage="Your household"
      />

    return (
      <Slide header={headerText} id="household">
        <p>
          <FormattedMessage
              id="app.slides.household.determination"
              description="Note to check members of household to determine eligibility."
              defaultMessage="To determine benefit eligibility for your students, we need to know more about who is in your household."
          />
        </p>
        <p>
          <FormattedMessage
              id="app.slides.household.definition"
              description="What defines a household"
              defaultMessage="For this application, a household is {bolded}."
              values={{
                bolded: <strong><FormattedMessage
                    id="app.slides.household.definition.bolded"
                    description="Household definition bolded"
                    defaultMessage="a group of related or unrelated people that usually live together AND share income and expenses"
                                /></strong>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.household.anyone"
              description="Phrase"
              defaultMessage="Your household includes {bolded}, such as:"
              values={{
                bolded: <strong><FormattedMessage
                    id="app.slides.household.anyone.bolded"
                    description="Phrase bolded"
                    defaultMessage="anyone you support financially"
                                /></strong>
              }}
          />
          <ul className="usa-content-list">
            <li>
              <FormattedMessage
                  id="app.slides.household.dependents1"
                  description="Foster children"
                  defaultMessage="Foster children"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.household.dependents2"
                  description="Children in college"
                  defaultMessage="Children away at college"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.household.dependents3"
                  description="Grandparents"
                  defaultMessage="Grandparents"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.household.dependents4"
                  description="Extended family"
                  defaultMessage="Extended family members that live with you regularly"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.household.dependents5"
                  description="Foreign exchange students"
                  defaultMessage="Foreign exchange students who live with you"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.household.dependents6"
                  description="People away"
                  defaultMessage="People who are away temporarily, but not currently living with you"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.household.dependents7"
                  description="Military"
                  defaultMessage="Armed service members who are away because they are activated or deployed"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.household.dependents8"
                  description="Other people in house"
                  defaultMessage="Other people at your house that you provide with shelter, utilities, clothing, or food"
              />
            </li>
          </ul>
        </p>

        <p>
          <FormattedMessage
              id="app.slides.household.notInclude"
              description="Phrase"
              defaultMessage="Do {bolded} include:"
              values={{
                bolded: <strong><FormattedMessage
                    id="app.slides.household.notInclude.bolded"
                    description="Phrase bolded"
                    defaultMessage="not"
                                /></strong>
              }}
          />
          <ul className="usa-content-list">
            <li>
              <FormattedMessage
                  id="app.slides.household.outsiders1"
                  description="Renters"
                  defaultMessage="Renters"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.household.outsiders2"
                  description="Boarders"
                  defaultMessage="Boarders"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.household.outsiders3"
                  description="Children living elsewhere"
                  defaultMessage="Children who live permanently with relatives or friends"
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.household.outsiders4"
                  description="Children not in custody"
                  defaultMessage="Children who you don't have custody over"
              />
            </li>
          </ul>
        </p>

        <p>
          <FormattedMessage
              id="app.slides.household.getHelp"
              description="Reassuring message about how to get help to determine household."
              defaultMessage="If you don't know who to include while filling this out, go to {bolded} and type in household."
              values={{
                bolded: <strong><FormattedMessage
                    id="app.slides.household.getHelp.bolded"
                    description="Phrase 'Get Help' bolded"
                    defaultMessage="Get Help"
                                /></strong>
              }}
          />
        </p>
      </Slide>
    )
  }
}

export default Household
