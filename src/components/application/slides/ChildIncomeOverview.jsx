import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeTypeFormGroup from '../IncomeTypeFormGroup'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { FormattedMessage } from 'react-intl'

@observer
class ChildIncomeOverview extends Component {
  get isValid() {
    return this.props.allChildren
      .map(child => child.incomeTypes.child.isApplicable !== null)
      .reduce((a, b) => a && b, true)
  }

  render() {
    const { allChildren } = this.props

    const pluralizedChildrenIncome = (allChildren.length === 1 ?
      <FormattedMessage
          id="app.slides.childIncomeOverview.singleChildIncome"
          description="Possessive phrase for a single child's income."
          defaultMessage="child's income"
      /> :
      <FormattedMessage
          id="app.slides.childIncomeOverview.multipleChildIncome"
          description="Possessive phrase for multiple children's income."
          defaultMessage="children's income"
      />
    )

    const pluralizedChildrenIncomeCapital = (allChildren.length === 1 ?
      <FormattedMessage
          id="app.slides.childIncomeOverview.singleChildIncome.capital"
          description="Possessive phrase for a single child's income."
          defaultMessage="Child's income"
      /> :
      <FormattedMessage
          id="app.slides.childIncomeOverview.multipleChildIncome.capital"
          description="Possessive phrase for multiple children's income."
          defaultMessage="Children's income"
      />
    )

    return (
      <Slide
          header={pluralizedChildrenIncomeCapital}
          nextDisabled={!this.isValid} id="child-income"
      >

        <p>
          <FormattedMessage
              id="app.slides.childIncomeOverview.intro"
              description="Introductory paragraph."
              defaultMessage="The next few questions are about your {child}."
              values={{
                child: pluralizedChildrenIncome
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.childIncomeOverview.sources"
              description="income Source List beginning"
              defaultMessage="Some common sources of income for children are:"
          />
        </p>
        <ul className="usa-content-list">
          <li>
            <FormattedMessage
                id="app.slides.childIncomeOverview.fullOrPartJob"
                description="Full or part-time job"
                defaultMessage="a full- or part-time job"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.childIncomeOverview.ssi"
                description="SSI"
                defaultMessage="Supplemental Security Income {bolded}, if the child is disabled"
                values={{
                  bolded: <strong>
                    <FormattedMessage
                        id="app.slides.childIncomeOverview.social"
                        description="ssi"
                        defaultMessage="(SSI)"
                    />
                  </strong>
                }}
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.childIncomeOverview.socialSecurity"
                description="Social Security"
                defaultMessage="{socialSecurity} benefits for children of a disabled, retired, or deceased parent"
                values={{
                  socialSecurity: <strong>
                    <FormattedMessage
                        id="app.slides.childIncomeOverview.socialSecurity.word"
                        description="socialSecurity"
                        defaultMessage="Social Security"
                    />
                  </strong>
                }}
            />
          </li>

          <li>
            <FormattedMessage
                id="app.slides.childIncomeOverview.money"
                description="money regularly received"
                defaultMessage="money regularly received from extended family or friends outside the household"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.childIncomeOverview.moneyFrom"
                description="money From pension, annuity, or trust"
                defaultMessage="money from a pension, annuity, or trust"
            />
          </li>
        </ul>

        <p>
          <FormattedMessage
              id="app.slides.childIncomeOverview.exclusions"
              description="Message about which types of child income to exclude from reporting."
              defaultMessage="Do not include infrequent earnings, such as income from occasional babysitting or mowing lawns."
          />
        </p>

        {allChildren.map(child =>
          <IncomeTypeFormGroup
              person={child}
              key={child.id}
              incomeTypeName="child"
          >
            <FormattedMessage
                id="app.slides.childIncomeOverview.label"
                description="Question asking if child has income sources."
                defaultMessage="Does {child} have income from any of these or other sources?"
                values={{
                  child: <strong>{informalName(child)}</strong>
                }}
            />
          </IncomeTypeFormGroup>
        )}
      </Slide>
    )
  }
}

ChildIncomeOverview.propTypes = {
  allChildren: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ChildIncomeOverview
