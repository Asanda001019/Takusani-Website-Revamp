import React from 'react';

const SkillsDevelopment = () => {
  const skillsDevelopmentServices = [
    'Learnership sourcing and implementation',
    'Skills committee training',
    'Skills audit coordination',
    'Skills committee establishment',
    'Quarterly skills reporting',
    'Annual training report submissions',
    'Workplace skills planning, development, and implementation',
    'SETA registration and administration solutions',
    'Disabilities integration and advisory'
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
          Skills Development
        </div>
        <h2 style={styles.title}>Empowering Your Workforce with Skills Development Initiatives</h2>
        <p style={styles.description}>
          The Skills Development element measures the extent to which employers carry out initiatives designed to develop the competencies of employees, both internally and externally, in line with the Skills Development Act of 1998, as amended. At Takusani Group, we espouse the following services to enhance employee development and organizational success.
        </p>
      </div>

      {/* Skills Development Services Layout */}
      <div style={styles.grid}>
        {/* Skills Development Column */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Skills Development Services</h3>
          <ul style={styles.list}>
            {skillsDevelopmentServices.map((service, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.icon}>★</span>
                <span style={styles.serviceText}>{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Added empty section for balance */}
        <div style={{...styles.section, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{textAlign: 'center', padding: '2rem'}}>
            <div style={{fontSize: '3rem', color: '#FFD700', marginBottom: '1rem'}}>★</div>
            <h3 style={{...styles.sectionTitle, borderBottom: 'none', marginBottom: '1rem'}}>Elevate Your Team</h3>
            <p style={{color: '#e2e8f0', lineHeight: '1.6'}}>
              Our skills development solutions are designed to transform your workforce and drive sustainable growth through targeted training and development initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsDevelopment;