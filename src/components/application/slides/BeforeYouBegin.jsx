import React from 'react'
import Slide from '../Slide'
import { assistanceProgramsVar, organization } from '../../../config'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Glyphicon } from 'react-bootstrap'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class BeforeYouBegin extends React.Component {
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
                bolded: (<strong>You should not have to submit an application</strong>)
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
                  defaultMessage="Temporary Assistance for Needy Families (TANF)"
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
              id="app.slides.beforeYouBegin.oneApplication"
              description="Only need one application for your household"
              defaultMessage="Participation in these programs means you should automatically receive Summer EBT benefits in summer {year}."
              values={{
                organizationName: organization.name,
                year: organization.year
              }}
          />
        </p>

        <p>
          <strong>
            <Tooltip text={tooltiptext.eligibility}>
              <FormattedMessage
                  id="app.slides.beforeYouBegin.eligibility"
                  description="As in the qulifications for this program."
                  defaultMessage="Eligibility"
              />
            </Tooltip>&nbsp;
            <FormattedMessage
                id="app.slides.beforeYouBegin.mealEligibilityDescription"
                description="Only need one application for your household"
                defaultMessage="for free or reduced price school meal benefits is based on any one of these"
            />&nbsp;
            <Tooltip text={tooltiptext.threethings}>
              <FormattedMessage
                  id="app.slides.beforeYouBegin.threeThings"
                  description="As in the requirements for program qualification."
                  defaultMessage="three things:"
              />
            </Tooltip>
          </strong>
        </p>
        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.status"
              description="citizenship or immigration doesn't affect status"
              defaultMessage="Your {tooltip} does not affect your eligibility for free and reduced price benefits."
              values={{
                tooltip:
  <Tooltip text={tooltiptext.usStatus}>
    <FormattedMessage
        id="app.slides.beforeYouBegin.usStatus"
        description="As in the status of the person/family applying for benefits."
        defaultMessage="US citizenship or immigration status"
    />
  </Tooltip>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.questions"
              description="Click the question mark icons"
              defaultMessage="If you have questions at any point during the application, click the question mark icon {glyphIcon} to get help with the current section."
              values={{
                glyphIcon: <Glyphicon glyph="question-sign" className="help-icon" />
              }}
          />
        </p>

        <h2>
          <FormattedMessage
              id="app.slides.beforeYouBegin.thingsNeeded"
              description="Things you'll need section header."
              defaultMessage="Things you'll need"
          />
        </h2>

        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.thingsNeededMore"
              description="Invitation to view full list of things needed to apply."
              defaultMessage="Lastly, we compiled a list of the information you might need to complete the application."
          />
          &nbsp;
          <a onClick={this.handleCheckItOut}>
            <FormattedMessage
                id="app.slides.beforeYouBegin.thingsNeededMoreLinkText"
                description="Text for the link to view all information needed to apply."
                defaultMessage="Check it out!"
            />
          </a>
        </p>

        {!!this.showExtraContent &&
        <div>
          <p>
            <FormattedMessage
                id="app.slides.beforeYouBegin.informationHandy"
                description="Handy Information Lead"
                defaultMessage="If you have this information handy, it will make the application process fast and easy."
            />
          </p>

          <ul className="usa-content-list">
            <li>
              <FormattedMessage
                  id="app.slides.beforeYouBegin.caseNumber"
                  description="List of programs that will require a case number."
                  defaultMessage="If you participate in {snap}, {tanf} , or {fdpir} you will need to know your case number (not your card or account number)."
                  values={{
                    snap: <Tooltip text={tooltiptext.snap} target={assistanceProgramsVar.snap.accronym} />,
                    tanf: <Tooltip text={tooltiptext.tanf} target={assistanceProgramsVar.tanf.accronym} />,
                    fdpir: <Tooltip text={tooltiptext.fdpir} target={assistanceProgramsVar.fdpir.accronym} />
                  }}
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.beforeYouBegin.whenReportHouseholdIncome"
                  description="Description of when household income reporting is required."
                  defaultMessage="If you do not participate in any of the above assistance programs, you will need to report your total household income. In that case…"
              />
              <ul>
                <li>
                  <FormattedMessage
                      id="app.slides.beforeYouBegin.whenReportHouseholdIncome1"
                      description="Item required for household income reporting."
                      defaultMessage="if anyone in your household has a job, you may need to reference the earnings statements or pay stubs to report your gross income, which is different from the amount you actually receive in your paycheck."
                  />
                </li>
                <li>
                  <FormattedMessage
                      id="app.slides.beforeYouBegin.whenReportHouseholdIncome2"
                      description="Item required for household income reporting."
                      defaultMessage="if anyone receives Social Security or retirement benefits, you may need to gather the benefit statements to report the amount and frequency of the payments."
                  />
                </li>
                <li>
                  <FormattedMessage
                      id="app.slides.beforeYouBegin.whenReportHouseholdIncome3"
                      description="Item required for household income reporting."
                      defaultMessage="you may also need to reference other financial documents for additional sources of income."
                  />
                </li>
              </ul>
            </li>
          </ul>

          <p>
            <FormattedMessage
                id="app.slides.beforeYouBegin.notSure"
                description="Reassuring message about the application prompting for information as needed."
                defaultMessage="Still not sure if you have everything you need? Don’t worry! The income section of the application contains detailed instructions and explanations about the sources of income you must include, and you can gather additional information then."
            />
          </p>
        </div>
        }
      </Slide>
    )
  }
}

export default BeforeYouBegin
