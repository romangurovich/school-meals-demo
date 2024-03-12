import React, { Component } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import Link from '../Link'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { FormattedMessage } from 'react-intl'

@observer
class Adults extends Component {
  constructor(props) {
    super(props)
    this.filterFunc = this.filterFunc.bind(this)
  }

  filterFunc(person) {
    return !person.isAttestor
  }

  @computed get nextText() {
    if (this.props.adults.length === 1) {
      return <FormattedMessage
          id="app.slides.adults.nextText"
          description="Text to show on next slide button if no other adults are added."
          defaultMessage="No other adults"
             />
    }

    return void 0
  }

  render() {
    const { adults } = this.props
    const attestors = adults.items.filter(person => person.isAttestor)

    const headerText =
      <FormattedMessage
          id="app.slides.adults.header"
          description="Text for the header of the slide."
          defaultMessage="Other adults"
      />

    return (
      <Slide
          nextDisabled={!adults.isValid} nextText={this.nextText}
          id="adults" header={headerText}
      >
        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.adults.adultsInto"
              description="Intro Paragraph"
              defaultMessage="Let's talk about the adults in your household."
          />
        </p>
        <p>
          <FormattedMessage
              id="app.slides.adults.notIncluding"
              description="What other adults live in household"
              defaultMessage="Not including {attestor}, what other adults live in your household?"
              values={{
                attestor: <Link id="attestation">{informalName(attestors[0])}</Link>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.adults.remember"
              description="Remember Household definitions"
              defaultMessage="Remember, for the purposes of applying for Summer EBT benefits, a household is a {bolded}."
              values={{
                bolded: <strong><FormattedMessage
                    id="app.slides.adults.remember.bolded"
                    description="Defines what adults are"
                    defaultMessage="a group of people, related or unrelated, that usually live together and share income and expenses"
                                /></strong>
              }}
          />
        </p>
        <p>
          <FormattedMessage
              id="app.slides.adults.be.sure.to"
              description="Be sure to"
              defaultMessage="Be sure to include grandparents or extended family members who live with you."
          />
        </p>
        <p>
          <FormattedMessage
              id="app.slides.adults.dont.forget"
              description="Don't Forget"
              defaultMessage="Don't forget people who aren't currently living with you and are away on a temporary basis, like:"
          />

        </p>
        <ul className="usa-content-list">
          <li>
            <FormattedMessage
                id="app.slides.adults.kids"
                description="Kids over 18"
                defaultMessage="Kids (over 18) who are away at college"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.adults.family.military"
                description="military and deployed"
                defaultMessage="Family members that are in the military and deployed"
            />
            <li>
              <FormattedMessage
                  id="app.slides.adults.relatives"
                  description="relatives away"
                  defaultMessage="Relatives who live with you much of the time but are away right now"
              />
            </li>
          </li>
        </ul>

        <PersonCollection
            collection={adults}
            filter={this.filterFunc}
            label={
              <FormattedMessage
                  id="app.slides.adults.label"
                  description="Label used for title, add/remove buttons."
                  defaultMessage="Adult"
              />
            }
        />
      </Slide>
    )
  }
}

export default Adults
