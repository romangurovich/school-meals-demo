import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Alert from '../Alert'
import Button from '../Button'
import IncomeSource from '../IncomeSource'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { incomeTypeIsValid, informalName } from '../../../helpers'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class ChildIncomeSlide extends Component {
  @computed get allSourcesFalse() {
    const sources = this.props.person.incomeTypes.child.sources
    console.log(sources)

    for (const key in sources) {
      if (sources[key].has !== false) {
        return false
      }
    }

    return true
  }

  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.child
    const incomeSources = incomeType.sources
    const name = informalName(person)
    const missingIncomeTitle =
      <FormattedMessage
          id="app.slides.childIncomeSlide.missingIncomeTitle"
          description="Missing Income alert title"
          defaultMessage="Missing Income"
      />

    const titleText =
      <FormattedMessage
          id="app.slides.childIncomeSlide.childsIncome"
          description="Title text for child's income"
          defaultMessage="{child}'s income"
          values={{
            child: name
          }}
      />

    return (
      <Slide
          header={titleText}
          id={`income/${person.id}/child`}
          helpArticle="child-income"
          nextDisabled={!incomeTypeIsValid(incomeType)}
      >

        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.childIncomeSlide.intro"
              description="Introductory paragraph."
              defaultMessage="Does {child} have income from any of the following sources?"
              values={{
                child: <strong>{name}</strong>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.childIncomeSlide.incomeReported"
              description="Income reported should be child's."
              defaultMessage="Income reported here should be the child’s {bold} income."
              values={{
                bold: <strong>
                  <FormattedMessage
                      id="app.slides.childIncomeSlide.currentGross"
                      description="current gross"
                      defaultMessage="current, gross"
                  />
                </strong>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.childIncomeSlide.childGross"
              description="Gross Income definition."
              defaultMessage="Gross income means all money earned or received before deductions such as income taxes, social security taxes, and insurance premiums. You should not report net income, which is the amount of money received in a pay check."
          />
        </p>

        <IncomeSource
            incomeSources={incomeSources} name="job"
            showHourly={true} showAnnual={true}
        >
          <FormattedMessage
              id="app.slides.childIncomeSlide.moneyEarned"
              description="Money earned from a full or part-time job"
              defaultMessage="Does {child} earn money from a full or part-time job? Don't include infrequent earnings, such as income from occasional baby-sitting or mowing lawns."
              values={{
                child: name
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="socialSecurity">
          <FormattedMessage
              id="app.slides.childIncomeSlide.supplementalIncome"
              description="Supplemental income"
              defaultMessage="Does {child} receive Supplemental Security Income (SSI) or Social Security survivor benefits?"
              values={{
                child: name
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="friendsFamily">
          <FormattedMessage
              id="app.slides.childIncomeSlide.regularCash"
              description="Regular Cash Payments"
              defaultMessage="Does {child} regularly receive income from extended family or friends outside the household?"
              values={{
                child: name
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="pensionAnnuityTrust">
          <FormattedMessage
              id="app.slides.childIncomeSlide.pensionAnnuityTrust"
              description="Pensions annuities & trusts"
              defaultMessage="Does {child} receive a pension , annuity, or trust?"
              values={{
                child: name
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="other">
          <FormattedMessage
              id="app.slides.childIncomeSlide.otherIncome"
              description="other income"
              defaultMessage="Does {child} regularly receive money from any other source of income?"
              values={{
                child: name
              }}
          />
        </IncomeSource>

        { this.allSourcesFalse &&
          <Alert heading={missingIncomeTitle}>
            <FormattedMessage
                id="app.slides.childIncomeSlide.missingIncome"
                description="Missing Income Alert"
                defaultMessage="On a previous page, you indicated that {child} receives income. Please enter this income above or correct your previous answer."
                values={{
                  child: <strong>{name}</strong>
                }}
            />
            <br />
            <Button
                className="usa-button-gray"
                slideId="child-income"
            >
              <FormattedMessage
                  id="app.slides.childIncomeSlide.changeAnswer"
                  description="Change Answer"
                  defaultMessage="Change previous answer"
              />
            </Button>
          </Alert>
        }
      </Slide>
    )
  }
}

ChildIncomeSlide.propTypes = {
  person: PropTypes.object.isRequired
}

export default ChildIncomeSlide
