# contact-form Specification

## Purpose
TBD - created by archiving change add-advantage-marketing-website. Update Purpose after archive.
## Requirements
### Requirement: Contact Page Layout
The system SHALL provide a dedicated contact page with form, agency information, and alternative contact methods.

#### Scenario: Contact page rendering
- **WHEN** user navigates to /contact
- **THEN** page displays contact form as primary element
- **AND** page includes agency contact information (address, phone, email if applicable)
- **AND** page includes map or location reference if relevant
- **AND** page has clear heading explaining purpose

#### Scenario: Contact page hero
- **WHEN** contact page loads
- **THEN** hero section includes welcoming headline in French
- **AND** hero communicates response time expectations
- **AND** hero reassures data privacy (GDPR compliance message)

### Requirement: Contact Form Fields
The system SHALL provide a contact form with essential fields for capturing lead information and inquiry details.

#### Scenario: Required form fields
- **WHEN** contact form is displayed
- **THEN** form includes the following required fields:
  - Full name (Nom complet)
  - Email address (Adresse e-mail)
  - Phone number (Téléphone) - optional or required based on client preference
  - Company name (Nom de l'entreprise) - optional
  - Message (Message or Votre projet)
- **AND** all field labels are in French
- **AND** required fields are marked with asterisk (*)

#### Scenario: Service selection field
- **WHEN** contact form is displayed
- **THEN** form includes dropdown or radio buttons for service selection
- **AND** options include: SEO, SEA, Email Marketing, Sites Web, Landing Pages, Autre
- **AND** field may be pre-selected if user came from service page

#### Scenario: Optional fields
- **WHEN** form is displayed
- **THEN** may include optional fields:
  - Budget range (select dropdown)
  - Timeline (select dropdown)
  - How did you hear about us? (referral tracking)

### Requirement: Form Validation
The system SHALL validate form inputs on client-side before submission to provide immediate feedback.

#### Scenario: Required field validation
- **WHEN** user attempts to submit form with empty required fields
- **THEN** form prevents submission
- **AND** error messages are displayed in French next to invalid fields
- **AND** first invalid field receives focus

#### Scenario: Email validation
- **WHEN** user enters email address
- **THEN** format is validated in real-time (after blur)
- **AND** error message displays if format is invalid: "Veuillez entrer une adresse e-mail valide"

#### Scenario: Phone validation
- **WHEN** user enters phone number
- **THEN** format is validated for French/international format
- **AND** non-numeric characters are handled appropriately

#### Scenario: Message length validation
- **WHEN** user enters message
- **THEN** minimum length is enforced (e.g., 10 characters)
- **AND** maximum length prevents excessively long submissions
- **AND** character count may be displayed

### Requirement: Form Submission
The system SHALL submit form data securely to server and provide clear feedback to user.

#### Scenario: Successful submission
- **WHEN** user submits valid form
- **THEN** loading indicator is displayed during submission
- **AND** submit button is disabled to prevent double-submission
- **AND** form data is sent to server via Server Action or API route
- **AND** success message is displayed in French after successful submission
- **AND** form fields are cleared or form is hidden

#### Scenario: Submission error handling
- **WHEN** form submission fails (network error, server error)
- **THEN** error message is displayed in French
- **AND** form remains filled with user's data
- **AND** user can attempt resubmission
- **AND** specific error is logged for debugging

#### Scenario: Server-side validation
- **WHEN** form data reaches server
- **THEN** all inputs are validated again on server
- **AND** malicious input is sanitized
- **AND** rate limiting prevents spam submissions

### Requirement: Form Accessibility
The system SHALL ensure contact form is accessible to all users including keyboard and screen reader users.

#### Scenario: Keyboard navigation
- **WHEN** user navigates form with keyboard
- **THEN** all fields are reachable via Tab key
- **AND** focus indicators are clearly visible
- **AND** form can be submitted with Enter key

#### Scenario: Screen reader support
- **WHEN** screen reader user encounters form
- **THEN** all labels are properly associated with inputs
- **AND** error messages are announced to screen reader
- **AND** required fields are announced as required
- **AND** form instructions are read before fields

#### Scenario: Error announcement
- **WHEN** validation errors occur
- **THEN** errors are announced via aria-live region
- **AND** screen reader user is guided to first error

### Requirement: Spam Prevention
The system SHALL implement measures to prevent spam form submissions while maintaining good user experience.

#### Scenario: Honeypot field
- **WHEN** form is rendered
- **THEN** hidden honeypot field is included
- **AND** honeypot field is invisible to real users
- **AND** bots filling honeypot field are rejected on server

#### Scenario: Rate limiting
- **WHEN** submissions are made from same IP/session
- **THEN** rate limit prevents more than 3 submissions per 15 minutes
- **AND** rate-limited user sees friendly error message in French

#### Scenario: Client-side validation as spam filter
- **WHEN** form is submitted too quickly after page load
- **THEN** submission may be flagged as suspicious
- **AND** additional verification may be requested

### Requirement: Email Notification
The system SHALL send email notification to agency when form is submitted successfully.

#### Scenario: Admin notification
- **WHEN** form submission is processed on server
- **THEN** email is sent to agency inbox with submission details
- **AND** email includes: name, email, phone, company, service, message
- **AND** email includes timestamp and source page

#### Scenario: User confirmation email
- **WHEN** form submission succeeds
- **THEN** optional confirmation email is sent to user
- **AND** email thanks user for inquiry in French
- **AND** email sets expectations for response time

### Requirement: GDPR Compliance
The system SHALL comply with GDPR requirements for collecting and processing user data.

#### Scenario: Privacy consent
- **WHEN** contact form is displayed
- **THEN** privacy policy checkbox is included
- **AND** checkbox label links to privacy policy
- **AND** checkbox is required before submission
- **AND** label text: "J'accepte la politique de confidentialité"

#### Scenario: Data minimization
- **WHEN** form data is collected
- **THEN** only necessary data is requested
- **AND** data is stored securely if stored at all
- **AND** data retention policy is documented

#### Scenario: Privacy information
- **WHEN** user views contact form
- **THEN** brief privacy notice is displayed near form
- **AND** notice explains how data will be used
- **AND** notice includes link to full privacy policy

### Requirement: Form Performance
The system SHALL ensure contact form loads and operates without performance degradation.

#### Scenario: Form rendering performance
- **WHEN** contact page loads
- **THEN** form is interactive within 2 seconds
- **AND** form validation provides immediate feedback
- **AND** submission completes within 3 seconds under normal conditions

#### Scenario: Progressive enhancement
- **WHEN** JavaScript fails to load
- **THEN** form still functions with basic HTML submission
- **AND** server-side validation catches errors
- **AND** graceful degradation maintains usability

