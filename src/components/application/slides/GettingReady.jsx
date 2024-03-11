import React, { Component } from 'react';
import Slide from '../Slide'
import { FormattedMessage } from 'react-intl';

class GettingReady extends Component {
  render() {
    const headerText =
      <FormattedMessage
          id="app.slides.gettingReady.header"
          description="Text for the header of the slide."
          defaultMessage="Getting ready"
      />

    return <Slide header={headerText} id="getting-ready">
      <p className="usa-font-lead">
        <FormattedMessage
            id="app.slides.gettingReady.intro"
            description="Phrase"
            defaultMessage="If you have questions, click the question mark or {bolded}. You also can hover over certain words to see their definitions."
            values={{
              bolded: <strong><FormattedMessage
                  id="app.slides.gettingReady.intro.bolded"
                  description="Get Help"
                  defaultMessage="Get Help"
                              /></strong>
            }}
        />
      </p>

      <p>
        <FormattedMessage
            id="app.slides.gettingReady.eligibility"
            description="Phrase"
            defaultMessage="There are many ways to be eligible for Summer EBT benefits. In deciding eligibility, we first look to see if:"
        />
        <ul className="usa-content-list">
          <li>
            <FormattedMessage
                id="app.slides.gettingReady.eligibility.programs"
                description="Programs leading text"
                defaultMessage="Someone in your household takes part in {bolded}"
                values={{
                  bolded: <strong><FormattedMessage
                      id="app.slides.gettingReady.eligibility.programs.bolded"
                      description="Programs"
                      defaultMessage="SNAP, TANF, or FDPIR"
                                  /></strong>
                }}
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.gettingReady.eligibility.children"
                description="Children's status"
                defaultMessage="You have a child or children classified as foster, homeless, migrant, or runaway"
            />
          </li>
        </ul>
      </p>

      <p>
        <FormattedMessage
            id="app.slides.gettingReady.household"
            description="Household info"
            defaultMessage="After that, we look at your total household {bolded} in the past or current month."
            values={{
              bolded: <strong>
                <FormattedMessage
                    id="app.slides.gettingReady.household.bolded"
                    description="Income and size"
                    defaultMessage="income and size"
                />
              </strong>
            }}
        />
      </p>

      <p>
        <FormattedMessage
            id="app.slides.gettingReady.unaffected"
            description="Do not worry about deportation or revocation of benefits"
            defaultMessage="Your {bolded}. The non-cash benefits received through this program won't make you or your children a public charge. You won't be deported, denied entry to the country, or denied permanent status because you applied for or receive Summer EBT benefits."
            values={{
              bolded: <strong>
                <FormattedMessage
                    id="app.slides.gettingReady.unaffected.bolded"
                    description="Citizenship does not affect eligibility"
                    defaultMessage="US citizenship or immigration status does not affect your eligibility for Summer EBT benefits"
                />
              </strong>
            }}
        />
      </p>
    </Slide>
  }
}

export default GettingReady;
