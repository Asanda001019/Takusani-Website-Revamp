import React from 'react';

const EAP = () => {
  const employeeAssistanceSolutions = [
    'Employee Assistance Program Solutions',
    'Employee Financial Wellness Solutions',
    'Employee Wellness Solutions',
  ];

  const healthSolutions = [
    'Health risk assessments',
    'On-site health screening',
    'Chronic disease management',
    'Mental health support',
    'Stress management workshops',
    'Wellness education programs',
    'Work-life balance initiatives'
  ];

  const financialSolutions = [
    'Financial literacy training',
    'Debt management counseling',
    'Retirement planning',
    'Budget creation assistance',
    'Investment education',
    'Financial crisis support',
    'Tax planning assistance'
  ];

  const styles = {
    container: {
      backgroundColor: '#0a1e3c',
      color: '#ffffff',
      padding: '3rem 1rem',
      borderRadius: '0.75rem',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      padding: '1rem'
    },
    tagline: {
      color: '#FFD700',
      textTransform: 'uppercase',
      fontWeight: '600',
      letterSpacing: '1px',
      fontSize: '1rem',
      marginBottom: '0.75rem'
    },
    title: {
      color: '#ffffff',
      fontSize: '2.25rem',
      fontWeight: '800',
      lineHeight: '1.2',
      marginBottom: '1.5rem'
    },
    description: {
      color: '#d1d5db',
      fontSize: '1.1rem',
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto',
      marginBottom: '1.5rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    section: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      border: '1px solid rgba(255, 215, 0, 0.2)',
      transition: 'transform 0.3s ease',
      height: '100%'
    },
    sectionTitle: {
      color: '#FFD700',
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1.25rem',
      borderBottom: '2px solid #FFD700',
      paddingBottom: '0.5rem',
      display: 'inline-block'
    },
    list: {
      listStyleType: 'none',
      padding: '0',
      margin: '0'
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    },
    icon: {
      color: '#FFD700',
      marginRight: '0.75rem',
      minWidth: '20px'
    },
    serviceText: {
      color: '#e2e8f0',
      lineHeight: '1.5'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.tagline}>
          Employee Assistance Programme
        </div>
        <h2 style={styles.title}>Bespoke Health and Financial Solutions</h2>
        <p style={styles.description}>
          Our bespoke health and financial solutions are customised based on the unique requirements of each organisation. 
          We have the infrastructure and ability to impeccably provide services to employees across all nine provinces.
        </p>
        <p style={styles.description}>
          We advocate prevention and early detection of chronic diseases of lifestyle, stress and depression, 
          rather than focusing solely on the treatment. We are specialists in Employee Financial Wellness solutions. 
          A healthy workforce can enhance productivity and reduce absenteeism.
        </p>
        <p style={styles.description}>
          Our Employee Assistance Program places a strong emphasis on ensuring a return on healthcare investment.
        </p>
      </div>

      {/* Services Grid - Top Row */}
      <div style={styles.grid}>
        {/* Employee Assistance Solutions Column */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Employee Assistance Solutions</h3>
          <ul style={styles.list}>
            {employeeAssistanceSolutions.map((service, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.icon}>★</span>
                <span style={styles.serviceText}>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Health Solutions Column */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Health Solutions</h3>
          <ul style={styles.list}>
            {healthSolutions.map((service, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.icon}>★</span>
                <span style={styles.serviceText}>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Services Grid - Bottom Row */}
      <div style={{...styles.grid, marginTop: '2rem'}}>
        {/* Financial Solutions Column */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Financial Solutions</h3>
          <ul style={styles.list}>
            {financialSolutions.map((service, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.icon}>★</span>
                <span style={styles.serviceText}>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EAP;