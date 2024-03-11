import React from 'react'
import Slide from '../Slide'
import { organization } from '../../../config'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class BeforeYouBegin extends React.Component {
  render() {
    const headerText =
      <FormattedMessage
          id="app.slides.beforeYouBegin.header"
          description="Text for the header of the slide."
          defaultMessage="Before you begin"
      />

    return (
      <Slide header={headerText} id="before-you-begin">
        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.householdPrograms"
              description="Note that you can skip most of application with previous participation in a household program."
              defaultMessage="{bolded} if someone in your household participates in:"
              values={{
                bolded: <strong><FormattedMessage
                    id="app.slides.beforeYouBegin.householdPrograms.bolded"
                    description="Bolded phrase"
                    defaultMessage="You should not have to submit an application"
                                /></strong>
              }}
          />
          <ul className="usa-content-list">
            <li>
              <FormattedMessage
                  id="app.slides.beforeYouBegin.eligibility1"
                  description="Household program List item"
                  defaultMessage="Supplemental Nutrition Assistance Program (SNAP)"
              />
            </li>

            <li>
              <FormattedMessage
                  id="app.slides.beforeYouBegin.eligibility2"
                  description="Household program List item"
                  defaultMessage="Temporary Assistasnce for Needy Families (TANF)"
              />
            </li>

            <li>
              <FormattedMessage
                  id="app.slides.beforeYouBegin.eligibility3"
                  description="Household program List item"
                  defaultMessage="Food Distribution Program on Indian Reservations (FDPIR)"
              />
            </li>
          </ul>
        </p>
        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.automaticBenefits"
              description="Automatic benefits"
              defaultMessage="Participation in these programs means you should automatically receive Summer EBT benefits in summer {year}."
              values={{
                year: organization.year
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.householdIncomeWaiver"
              description="No need to submit application if your income is already recorded for the school year"
              defaultMessage="Additionally, {bolded} if you completed a household income application for school year {yearStart}-{yearEnd} and your child was approved for free or reduced-priced meals."
              values={{
                yearStart: organization.year - 1,
                yearEnd: organization.year.toString().slice(2),
                bolded: <strong>
                  <FormattedMessage
                      id="app.slides.beforeYouBegin.householdIncomeWaiver.bolded"
                      description="No need to submit application"
                      defaultMessage="you should not have to submit an application"
                  />
                </strong>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.ineligible"
              description="Kids who are ineligble"
              defaultMessage="If your child is homeschooled or goes to a school that doesn't participate in a National School Lunch Program, they are not eligible for Summer EBT benefits."
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.moving"
              description="If moving apply elsewhere"
              defaultMessage="If you plan to move or have recently moved to a new state, apply for benefits in the state where your child will or has already completed the school year."
          />
        </p>
      </Slide>
    )
  }
}

export default BeforeYouBegin
