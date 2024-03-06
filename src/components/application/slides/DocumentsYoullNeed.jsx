import React from 'react'
import Slide from '../Slide'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class DocumentsYoullNeed extends React.Component {
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
          id="app.slides.documentsYoullNeed.header"
          description="Text for the header of the slide."
          defaultMessage="Documents you'll need"
      />

    return (
      <Slide header={headerText} id="documents-youll-need">
        <p>
          <FormattedMessage
              id="app.slides.documentsYoullNeed.recommendation"
              description="Note to gather documents."
              defaultMessage="We recommend gathering the following documents now. You'll use them to enter income information."
          />
        </p>
        <p>
          <FormattedMessage
              id="app.slides.documentsYoullNeed.items"
              description="Phrase"
              defaultMessage="You'll need:"
          />
          <ul className="usa-content-list">
            <li>
              <FormattedMessage
                  id="app.slides.documentsYoullNeed.items.paystubs"
                  description="Paystubs"
                  defaultMessage="{bolded} for anyone in your house (including your children) with a job.
                  We ask for gross income, which is different from the amount you might receive as direct deposit or cash.
                  Earnings statements and pay stubs show your gross income."
                  values={{
                    bolded: <strong><FormattedMessage
                        id="app.slides.documentsYoullNeed.items.paystubs.bolded"
                        description="Paystubs bolded"
                        defaultMessage="Pay stubs"
                                    /></strong>
                  }}
              />
            </li>

            <li>
              <FormattedMessage
                  id="app.slides.documentsYoullNeed.items.benefitStatements"
                  description="Benefit Statements"
                  defaultMessage="{bolded} for anyone in your household who receives Social Security or retirement benefits."
                  values={{
                    bolded: <strong><FormattedMessage
                        id="app.slides.documentsYoullNeed.items.benefitStatements.bolded"
                        description="Benefit statements bolded"
                        defaultMessage="Benefit statements"
                                    /></strong>
                  }}
              />
            </li>

            <li>
              <FormattedMessage
                  id="app.slides.documentsYoullNeed.items.otherDocuments"
                  description="Other documents"
                  defaultMessage="{bolded} that show details about rental income, military pay, alimony, or other sources of income."
                  values={{
                    bolded: <strong><FormattedMessage
                        id="app.slides.documentsYoullNeed.items.otherDocuments.bolded"
                        description="Other documents bolded"
                        defaultMessage="Other documents"
                                    /></strong>
                  }}
              />
            </li>
          </ul>
        </p>
        <p>
          <FormattedMessage
              id="app.slides.documentsYoullNeed.notSure"
              description="Reassuring message about the application prompting for information as needed."
              defaultMessage="If you aren't sure what you need, don't worry. The income section of the application contains detailed instructions and you can gather additional information then."
          />
        </p>
      </Slide>
    )
  }
}

export default DocumentsYoullNeed
