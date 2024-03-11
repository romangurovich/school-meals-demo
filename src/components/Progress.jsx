import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import Steps, { Step } from 'rc-steps'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react'
import { ProgressBar } from 'react-bootstrap'

@observer
class Progress extends Component {
  constructor(props) {
    super(props)
    this.oldPercent = 0
    this.handleClick = this.handleClick.bind(this)
    this.disableNavigation = this.disableNavigation.bind(this)
    this.enableNavigation = this.enableNavigation.bind(this)
  }

  get isNavigationEnabled() {
    return !this.props.navigationData.isOnFinalSlide
  }

  get clickElement() {
    return document.getElementById('progress-desktop')
  }

  handleClick(e) {
    // Roll our own event delegation to capture step clicks.
    for (let target = e.target; target && target !== this; target = target.parentNode) {
      // Loop parent nodes from the target to the delegation node.
      if (target.hasAttribute('data-hash')) {
        for (let i = 0; i < target.classList.length; i++) {
          if (target.classList[i] === 'rc-steps-status-finish' ||
              target.classList[i] === 'rc-steps-status-process') {
            window.location.replace(`#/${target.getAttribute('data-hash')}`)
            break
          }
        }
        break
      }
    }
  }

  disableNavigation() {
    this.clickElement.removeEventListener('click', this.handleClick)
  }

  enableNavigation() {
    this.clickElement.addEventListener('click', this.handleClick)
  }

  componentDidUpdate() {
    if (this.isNavigationEnabled) {
      this.enableNavigation()
    } else {
      this.disableNavigation()
    }
  }

  get steps() {
    const result = []

    result.push({
      'data-hash': 'get-started',
      'title': <FormattedMessage
          id="progress.getStarted"
          description="Text for the Get Started progress bar step."
          defaultMessage="Get Started"
               />
    })

    result.push({
      'data-hash': 'household',
      'title': <FormattedMessage
          id="progress.household"
          description="Text for the Household progress bar step."
          defaultMessage="Household"
               />
    })

    result.push({
      'data-hash': 'income',
      'title': <FormattedMessage
          id="progress.income"
          description="Text for the Income progress bar step."
          defaultMessage="Income"
               />
    })

    result.push({
      'data-hash': 'income',
      'title': <FormattedMessage
          id="progress.income"
          description="Text for the Income progress bar step."
          defaultMessage="Income"
               />
    })

    result.push({
      'data-hash': 'last-steps',
      'title': <FormattedMessage
          id="progress.lastSteps"
          description="Text for the Last Steps progress bar step."
          defaultMessage="Last Steps"
               />
    })

    result.push({
      'data-hash': 'complete',
      'title': <FormattedMessage
          id="progress.complete"
          description="Text for the Complete progress bar step."
          defaultMessage="Complete!"
               />
    })

    return result
  }

  // Never returns a value less than a value that's been previously returned.
  get percent() {
    const { currentSlideIndex, slides } = this.props.navigationData
    const newPercent = Math.round(100 * currentSlideIndex / (slides.length - 1))
    this.oldPercent = Math.max(this.oldPercent, newPercent)
    return this.oldPercent
  }

  render() {
    const { stepsCompleted } = this.props.navigationData
    const localeCode = this.props.localeData.code
    const desktopClassNames = {
      'progress-desktop': true,
      'navigation-enabled': this.isNavigationEnabled
    }

    return (
      <div className="progress-container">
        <div className="usa-grid">
          <div className="progress-mobile">
            <ProgressBar
                now={this.percent}
                label={!!this.percent && `${this.percent}%`}
            />
          </div>
          <div className={classnames(desktopClassNames)} id="progress-desktop">
            <Steps current={stepsCompleted}>
              {this.steps.map(step =>
                <Step {...step} key={localeCode + step['data-hash']} />
               )}
            </Steps>
          </div>
        </div>
      </div>
    )
  }
}

Progress.propTypes = {
  navigationData: PropTypes.shape({
    stepsCompleted: PropTypes.number
  }).isRequired,
  localeData: PropTypes.shape({
    code: PropTypes.string
  }).isRequired,
  applicationData: PropTypes.shape({
    showHousehold: PropTypes.bool.isRequired
  }).isRequired
};

export default Progress
