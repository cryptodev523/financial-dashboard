# Front-End Developer Assessment Task Requirements

## Project Overview

Financial dashboard application with a responsive design. The app should present a multi-view experience to display an overview of financial activities, card details, transactions, statistics, and user settings.

## Pages and Key Components

### Dashboard Page (Overview)
- **My Cards Section**
  - Display multiple card details including card balance, cardholder name, and masked card number.
  - Include a "See All" button to view a full list of cards.

- **Recent Transactions**
  - Display recent transactions with an icon, description, date, and amount (indicating positive or negative).

- **Weekly Activity Chart**
  - A bar chart showing daily deposit and withdrawal activities for the week.

- **Expense Statistics**
  - A pie chart displaying expense breakdown by category (e.g., Entertainment, Bills, Investments, Others).

- **Quick Transfer**
  - List frequent transfer contacts with profile pictures, names, and roles.
  - Input field for transfer amount with a "Send" button (UI only).

- **Balance History Chart**
  - A line chart representing the balance trend over past months.

### Settings Page
- **Tabs**
  - Include tabs for "Edit Profile," "Preference," and "Security."

- **Edit Profile Section**
  - Allow users to update fields such as Name, Username, Email, Password, Date of Birth, Address details, City, Postal Code, and Country.
  - Profile picture upload/edit functionality.
  - "Save" button for saving changes.

## Functional Requirements

1. **Responsive Design**
   - Fully responsive, optimized for mobile, tablet, and desktop screens.

2. **Data Visualization**
   - Implement dynamic charts using Chart.js or D3.js.
   - Ensure charts update based on user data.

3. **Interactive Elements**
   - Hover effects for buttons (e.g., "See All," "Send," "Save").
   - Scrollable card and transaction lists if entries exceed viewport.

4. **Form Validations**
   - Validate inputs on the settings page, ensuring fields like email and password adhere to standard formats.

5. **User Experience**
   - Smooth transitions between sections and tabs.
   - Consistent icon use to enhance visual hierarchy.

## Technical Requirements

1. **Frameworks/Libraries**
   - Use React.js as the main framework.
   - Utilize Redux or Context API for state management.
   - Use TailwindCSS or styled-components for styling.

2. **API Integration**
   - Assume dummy API endpoints for fetching user data, card details, transaction history, and chart data. Mock data if necessary.

3. **Routing**
   - Use React Router for navigating between "Dashboard" and "Settings" pages.

4. **Charting Library**
   - Implement Chart.js or D3.js for rendering charts.

5. **Version Control**
   - Maintain a Git repository with a clean branching strategy.

## Non-Functional Requirements

1. **Performance**
   - Optimize application performance, implementing lazy loading where applicable.

2. **Accessibility**
   - Ensure basic accessibility standards (ARIA labels, keyboard navigation) are met.

3. **Browser Compatibility**
   - Support major browsers (Chrome, Firefox, Safari, Edge).

## Submission Guidelines

- Provide a Git repository link with the source code.
- Include a `README.md` with setup instructions and any assumptions made.
- Ensure the application can be deployed locally with minimal setup.