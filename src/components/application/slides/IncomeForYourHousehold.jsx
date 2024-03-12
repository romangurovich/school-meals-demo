import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Slide from '../Slide';

class IncomeForYourHousehold extends Component {
  render() {
    const headerText =
      <FormattedMessage
          id="app.slides.householdIncome.header"
          description="Text for the header of the slide."
          defaultMessage="Income for your household"
      />

    return <Slide id="household-income" header={headerText} beginsSection>
      <p>
        <FormattedMessage
            id="app.slides.householdIncome.current"
            description="Income should be current"
            defaultMessage="Income information should be {bolded}. Include income earned or received in the current month, or in the month before the completion of this application."
            values={{
              bolded: <strong>
                <FormattedMessage
                    id="app.slides.householdIncome.current.bolded"
                    description="Current"
                    defaultMessage="current"
                />
              </strong>
            }}
        />
      </p>

      <p>
        <FormattedMessage
            id="app.slides.householdIncome.qualifiedIncome"
            description="Income should be gross before taxes and such"
            defaultMessage="We'll ask about your {grossBolded}. This means all money earned or received {beforeBolded} deductions, such as income taxes, social security taxes, and insurance premiums."
            values={{
              grossBolded: <strong>
                <FormattedMessage
                    id="app.slides.householdIncome.qualifiedIncome.grossBolded"
                    description="Gross income"
                    defaultMessage="gross income"
                />
              </strong>,
              beforeBolded: <strong>
                <FormattedMessage
                    id="app.slides.householdIncome.qualifiedIncome.beforeBolded"
                    description="Before"
                    defaultMessage="before"
                />
              </strong>
            }}
        />
      </p>

      <p>
        <FormattedMessage
            id="app.slides.householdIncome.different"
            description="How gross income is different from net"
            defaultMessage="Gross income is different than the amount of money received in a pay check, which is called net income. Net income is less and commonly referred to as “take home pay.”"
        />
      </p>

      <p>
        <FormattedMessage
            id="app.slides.householdIncome.paychecks"
            description="Look at paychecks to figure out gross income"
            defaultMessage="You will need to look on paystubs or paychecks, or a W2 form to find your {grossBolded} income. If you want to find gross income, look for the {largerTotalBolded} before money has been taken out (deducted)."
            values={{
              grossBolded: <strong>
                <FormattedMessage
                    id="app.slides.householdIncome.paychecks.grossBolded"
                    description="Gross"
                    defaultMessage="gross"
                />
              </strong>,
              largerTotalBolded: <strong>
                <FormattedMessage
                    id="app.slides.householdIncome.paychecks.largerTotalBolded"
                    description="Larger total"
                    defaultMessage="larger total"
                />
              </strong>
            }}
        />
      </p>

      <img src="img/paystub.png" />
      <br />
      <p>
        <FormattedMessage
            id="app.slides.householdIncome.situation"
            description="Different situations"
            defaultMessage="Everyone's situation is different. Click {bolded} for information on how to report:"
            values={{
              bolded: <strong>
                <FormattedMessage
                    id="app.slides.householdIncome.situation.bolded"
                    description="Get help"
                    defaultMessage="Get Help"
                />
              </strong>
            }}
        />
        <ul className="usa-content-list">
          <li>
            <FormattedMessage
                id="app.slides.householdIncome.situation.changes"
                description="Income that changes often"
                defaultMessage="Income that changes often"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.householdIncome.situation.1099"
                description="Income that appears on a 1099"
                defaultMessage="Income that appears on a 1099"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.householdIncome.situation.seasonal"
                description="Seasonal work"
                defaultMessage="Seasonal work"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.householdIncome.situation.military"
                description="Military income"
                defaultMessage="Military income"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.householdIncome.situation.rental"
                description="Rental income"
                defaultMessage="Rental income"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.householdIncome.situation.interest"
                description="Earned interest"
                defaultMessage="Earned interest"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.householdIncome.situation.noIncome"
                description="No income"
                defaultMessage="No income"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.householdIncome.situation.custody"
                description="Shared custody for a child"
                defaultMessage="Shared custody for a child"
            />
          </li>
        </ul>
      </p>
    </Slide>
  }
}

export default IncomeForYourHousehold;
