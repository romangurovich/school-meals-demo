import React from 'react'
import Slide from '../Slide'
import { FormattedMessage } from 'react-intl'

const LegalStatements = () => {
  const headerText =
    <FormattedMessage
        id="app.slides.legalStatements.header"
        description="Text for the header of the slide."
        defaultMessage="Legal Statements"
    />

  return (
    <Slide header={headerText} id="legal-statements">
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.almostDone"
            description="Almost done"
            defaultMessage="Click continue after reading the following legal statements to complete the  application."
        />
      </p>
      <h2>
        <FormattedMessage
            id="app.slides.legalStatements.useOfStatement"
            description="{usda} Use of info statement"
            defaultMessage="USDA Use of Information Statement"
            values={{
              usda: <abbr title="United States Department of Agriculture">USDA</abbr>
            }}
        />
      </h2>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.nationalSchoolLunchAct"
            description="National School Lunch Act"
            defaultMessage="The Richard B. Russell National School Lunch Act requires that we use information from this application to determine who qualifies for Summer EBT benefits. We can only approve complete forms. We may share your eligibility information with education, health, and nutrition programs to help them deliver program benefits to your household. Inspectors and law enforcement may also use your information to make sure that program rules are met. Some children qualify for Summer EBT without an application. Please contact your State or ITO to get Summer EBT for a foster child, and children who are homeless, migrant, or runaway."
        />
      </p>

      <h2>
        <FormattedMessage
            id="app.slides.legalStatements.nondiscrimination"
            description="Non-Discrimination Statement"
            defaultMessage="{usda} Non-Discrimination Statement"
            values={{
              usda: <abbr title="United States Department of Agriculture">USDA</abbr>
            }}
        />
      </h2>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.fedCivilRights"
            description="Civil rights paragraph"
            defaultMessage="In accordance with federal civil rights law and U.S. Department of Agriculture (USDA) civil rights regulations and policies, this institution is prohibited from discriminating on the basis of race, color, national origin, sex (including gender identity and sexual orientation), disability, age, or reprisal or retaliation for prior civil rights activity."
        />
      </p>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.disabilities"
            description="Persons with disabilities"
            defaultMessage="Program information may be made available in languages other than English. Persons with disabilities who require alternative means of communication to obtain program information (e.g., Braille, large print, audiotape, American Sign Language), should contact the responsible state or local agency that administers the program or USDA’s TARGET Center at (202) 720-2600 (voice and TTY) or contact USDA through the Federal Relay Service at (800) 877-8339."
            values={{
              usda: <abbr title="United States Department of Agriculture">USDA</abbr>
            }}
        />
      </p>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.fileComplaint"
            description="to file a complaint..."
            defaultMessage="To file a program discrimination complaint, a Complainant should complete a Form AD-3027, USDA Program Discrimination Complaint Form which can be obtained online at: {link}, from any USDA office, by calling (866) 632-9992, or by writing a letter addressed to USDA. The letter must contain the complainant’s name, address, telephone number, and a written description of the alleged discriminatory action in sufficient detail to inform the Assistant Secretary for Civil Rights (ASCR) about the nature and date of an alleged civil rights violation. The completed AD-3027 form or letter must be submitted to USDA by:"
            values={{
              link: <a href="https://www.usda.gov/sites/default/files/documents/ad-3027.pdf">
                https://www.usda.gov/sites/default/files/documents/ad-3027.pdf
              </a>
            }}
        />
        <ol className="usa-list">
          <li>
            <strong><FormattedMessage
                id="app.slides.legalStatements.mail"
                description="Mail"
                defaultMessage="mail"
                    /></strong>
            <p className="info-cluster">
              U.S. Department of Agriculture Office of the Assistant Secretary for Civil Rights
            </p>
            <p className="info-cluster">
              1400 Independence Avenue, SW
            </p>
            <p className="info-cluster">
              Washington, D.C. 20250-9410
            </p>
          </li>
          <li>
            <strong><FormattedMessage
                id="app.slides.legalStatements.fax"
                description="Fax"
                defaultMessage="fax"
                    /></strong>
            <p className="info-cluster">
              (833) 256-1665 or (202) 690-7442
            </p>
          </li>
          <li>
            <strong><FormattedMessage
                id="app.slides.legalStatements.email"
                description="Email"
                defaultMessage="email"
                    /></strong>
            <p className="info-cluster">
              <a href="mailto:Program.Intake@usda.gov">Program.Intake@usda.gov</a>
            </p>
          </li>
        </ol>
      </p>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.equalOpportunity"
            description="USDA is an equal opportunity..."
            defaultMessage="This institution is an equal opportunity provider."
        />
      </p>
    </Slide>
  )
}

export default LegalStatements
