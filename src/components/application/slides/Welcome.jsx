import React from 'react'
import { FormattedMessage } from 'react-intl'
import Slide from '../Slide'
import { organization } from '../../../config'
import { observer } from 'mobx-react'

@observer
class Welcome extends React.Component {
  render() {
    const headerText =
      <FormattedMessage
          id="app.slides.welcome.header"
          description="Text for the header of the slide."
          defaultMessage="Welcome!"
      />

    const nextButtonText =
      <FormattedMessage
          id="app.slides.welcome.nextButton"
          description="Text for button to advance to the next slide."
          defaultMessage="Get started"
      />

    return (
      <Slide header={headerText} id="welcome" showBack={false} nextText={nextButtonText} beginsSection>

        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.welcome.intro"
              description="Introductory paragraph."
              defaultMessage="This is {organizationName}'s 2025 Summer Electronic Benefit Transfer (EBT) Program for Children. If your household qualifies, you can receive a EBT card with money for each student."
              values={{
                organizationName: organization.name,
                usda: <abbr title="United States Department of Agriculture">USDA</abbr>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.welcome.onlineInstructions"
              description="Instructions on how to apply online."
              defaultMessage="This application will guide you through the process of applying for benefits. If you want to use a paper application, you can print it and return it to {Address}."
              values={{
                buttonText: nextButtonText
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.welcome.paperInstructions"
              description="Instructions on how many to complete per household."
              defaultMessage="Only complete one application per household, even if you have multiple children."
              values={{
                address: organization.paperApplication.address,
                link:
  <a href={organization.paperApplication.url} target="_blank" rel="noopener noreferrer">
    <FormattedMessage
        id="app.slides.welcome.paperApplication"
        description="Phrase"
        defaultMessage="paper application"
    />
  </a>
              }}
          />
        </p>

      </Slide>
    )
  }
}

export default Welcome
