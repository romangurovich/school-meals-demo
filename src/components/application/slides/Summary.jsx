import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import SerialList from '../SerialList'
import SummaryAdults from './SummaryAdults'
import SummaryLabel from './SummaryLabel'
import SummaryPersonCollection from './SummaryPersonCollection'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import IncomeAmount from '../IncomeAmount'
import Tooltip from '../Tooltip'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import { fullName } from '../../../helpers'
import { tooltiptext } from '../../Tooltiptext'
import { FormattedMessage } from 'react-intl'

@observer
class Summary extends Component {
  constructor(props) {
    super(props)
    this.assistanceProgramAccronym = this.assistanceProgramAccronym.bind(this)
  }

  get isValid() {
    return this.props.applicationData.certifiedCorrect
  }

  assistanceProgramAccronym(program) {
    return program.accronym
  }

  render() {
    const { applicationData } = this.props
    const { contact,
            otherChildren,
            students } = applicationData
    const assistancePrograms = applicationData.assistancePrograms.applicable

    const headerText =
      <FormattedMessage
          id="app.slides.summary.header"
          description="Text for the header of the slide."
          defaultMessage="Confirm what you entered"
      />

    const nextText =
      <FormattedMessage
          id="app.slides.summary.nextText"
          description="Text on the button to submit final application."
          defaultMessage="Submit"
      />

    return (
      <Slide
          header={headerText}
          nextText={nextText}
          nextDisabled={!this.isValid}
          id="summary"
          beginsSection
      >
        <p>
          <FormattedMessage
              id="app.slides.summary.summaryInfo"
              description="Summary Info is below"
              defaultMessage="Here is a summary of the information you provided. We'll email you a copy of this screen if you entered your email address."
          />
        </p>
        <p>
          <FormattedMessage
              id="app.slides.summary.looksGood"
              description="Submit if looks good"
              defaultMessage="If everything looks good, check the boxes below and click {bolded}."
              values={{
                bolded: <strong><FormattedMessage
                    id="app.slides.summary.looksGood.bolded"
                    description="Submit"
                    defaultMessage="Submit"
                                /></strong>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.summary.callToEdit"
              description="Call to edit in case anything is wrong"
              defaultMessage="If things don't look correct, click on the pencil to change information. You won't lose your work by going back."
          />
        </p>

        <SummaryPersonCollection
            collection={students} id="students"
            showIncomes={applicationData.showHousehold}
        >
          <FormattedMessage
              id="app.slides.summary.studentsAttending"
              description="student info"
              defaultMessage="Students attending school in {organizationName}"
              values={{
                organizationName: organization.name
              }}
          />
        </SummaryPersonCollection>

        {applicationData.showHousehold &&
        <SummaryPersonCollection
            collection={otherChildren}
            id="other-children"
            showIncomes={true}
        >
          <FormattedMessage
              id="app.slides.summary.otherChildren"
              description="Other children"
              defaultMessage="Other children"
          />
        </SummaryPersonCollection>
        }

        <SummaryAdults applicationData={applicationData} />

        <div>
          <SummaryLabel id="assistance-programs">
            <FormattedMessage
                id="app.slides.summary.caseNumbers"
                description="Assistance program case numbers"
                defaultMessage="Assistance program case numbers"
            />
          </SummaryLabel>

          <ul>
            {
              assistancePrograms.length ?
              assistancePrograms.map(program =>
                <li key={program.id}>
                  {program.name} — <strong>{program.caseNumber}</strong>
                </li>
              )
              :
              <li>
                <FormattedMessage
                    id="app.slides.summary.noAssistancePrograms"
                    description="Placeholder indicating that no assistance programs have been selected."
                    defaultMessage="(none)"
                />
              </li>
            }
          </ul>
        </div>

        <SummaryLabel id="contact">
          <FormattedMessage
              id="app.slides.summary.contactInfo"
              description="Contact information"
              defaultMessage="Contact information"
          />
        </SummaryLabel>
        <p>
          { fullName(applicationData.attestor) }
          {!!contact.address1 &&
          <span>
            <br />
            { contact.address1 }
          </span>
          }
          {!!contact.address2 &&
          <span>
            <br />
            { contact.address2 }
          </span>
          }
          {!!contact.city &&
          <span>
            <br />
            { contact.city },{' '}
          </span>
          }
          { contact.state }
          {' '}
          { contact.zip }
          {!!contact.phone &&
          <span>
            <br />
            { contact.phone }
          </span>
          }
          {!!contact.email &&
          <span>
            <br />
            { contact.email }
          </span>
          }
        </p>

        {applicationData.showHousehold &&
        <div>
          <SummaryLabel>
            <FormattedMessage
                id="app.slides.summary.totalIncome"
                description="Total household income"
                defaultMessage="Total household income"
            />
          </SummaryLabel>
          <Tooltip text={tooltiptext.monthlyIncomeSum}>
            <IncomeAmount
                frequency="monthly"
                decimals={2}
                amount={parseFloat(applicationData.totalMonthlyHouseholdIncome, 10)}
            />
          </Tooltip>
        </div>
        }

        <Checkboxes legend="Certification">
          <Checkbox name="certifiedCorrect" object={applicationData}>
            { applicationData.showHousehold ? // eslint-disable-line no-nested-ternary
              <strong>
                <FormattedMessage
                    id="app.slides.summary.certification"
                    description="Certification statement"
                    defaultMessage="I certify* that {totalHouseholdMembers} are in my household and that our household income is about {totalHouseholdIncome}"
                    values={{
                      totalHouseholdMembers: <span className="usa-label-big">
                        {applicationData.totalHouseholdMembers}&nbsp;
                        <FormattedMessage
                            id="app.slides.summary.people"
                            description="people"
                            defaultMessage=" people"
                        />
                      </span>,
                      totalHouseholdIncome: <span className="usa-label-big">
                        <IncomeAmount
                            frequency="monthly"
                            amount={applicationData.totalMonthlyHouseholdIncome}
                        />
                      </span>
                    }}
                />
              </strong>
              : (assistancePrograms.length ?
                <strong>
                  <FormattedMessage
                      id="app.slides.summary.certificationPrograms"
                      description="Certification statement for programs"
                      defaultMessage="I certify* that my household participates in"
                  />&nbsp;
                  <SerialList className="usa-label-big" items={assistancePrograms} mapFunc={this.assistanceProgramAccronym} />
                </strong>
                 :
                <strong>
                  <FormattedMessage
                      id="app.slides.summary.infoCorrect"
                      description="acknowledge info is correct"
                      defaultMessage="I certify* that the information on this page is correct to the best of my knowledge."
                  />
                </strong>
              )
            }
          </Checkbox>
        </Checkboxes>
      </Slide>
    )
  }
}

Summary.propTypes = {
  applicationData: PropTypes.object.isRequired
}

export default Summary
