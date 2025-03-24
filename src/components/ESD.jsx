import React from 'react';

const ESD = () => {
  const enterpriseSupplierDevelopmentServices = [
    'ED advisory',
    'SMME beneficiary identification',
    'SMME project planning and development',
    'SMME Accelerator Program',
    'Supplier Development'
  ];

  const supplierDevelopmentServices = [
    'Data collection of suppliers B-BBEE certificates and analysis',
    'Documentation inspection in line with verification guidelines',
    'Identification, vetting and implementation of outsourced suppliers',
    'Procurement advisory',
    'SMME beneficiary identification',
    'SMME project planning and development',
    'Supplier development management',
    'SME support',
    'Innovation management and product development strategies',
    'Strategic business formulation and commercialisation of ideas',
    'Fundraising, bid management and advisory services for SMEs'
  ];

  const businessDevelopmentServices = [
    'Business plans',
    'Business profiles',
    'Sales and marketing advisory and training',
    'Financial management advisory and training',
    'Monitoring, evaluation and reporting'
  ];

  const socioEconomicDevelopmentServices = [
    'SED advisory',
    'SED beneficiary identification',
    'SED project planning and development'
  ];

  const styles = {
    container: {
      backgroundColor: '#0a1e3c',
      color: '#ffffff',
      padding: '3rem 1rem',
      borderRadius: '0.75rem',
      fontFamily: 'Arial, sans-serif',
     width: '100%',  // Set the width to 100% to make it take up the full page width
      margin: '0',    // Remove the margin to avoid any unwanted spacing
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
      margin: '0 auto'
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
          Enterprise Supplier Development & Socio Economic Development Solutions
        </div>
        <h2 style={styles.title}>Empowering Enterprises for Sustainable Growth</h2>
        <p style={styles.description}>
          This element measures the extent to which enterprises carry out enterprise development initiatives intended to assist and accelerate the growth and sustainability of black enterprises. 1% of Net Profit After Tax is committed to Economic Development spend.
        </p>
      </div>

      {/* Services Grid - Top Row */}
      <div style={styles.grid}>
        {/* Enterprise Development Column */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Enterprise Development Solutions</h3>
          <ul style={styles.list}>
            {enterpriseSupplierDevelopmentServices.map((service, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.icon}>★</span>
                <span style={styles.serviceText}>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Supplier Development Column */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Supplier Development Solutions</h3>
          <ul style={styles.list}>
            {supplierDevelopmentServices.map((service, index) => (
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
        {/* Business Development Column */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Business Development Services</h3>
          <ul style={styles.list}>
            {businessDevelopmentServices.map((service, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.icon}>★</span>
                <span style={styles.serviceText}>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Socio-Economic Development Column */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Socio-Economic Development Services</h3>
          <ul style={styles.list}>
            {socioEconomicDevelopmentServices.map((service, index) => (
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

export default ESD;