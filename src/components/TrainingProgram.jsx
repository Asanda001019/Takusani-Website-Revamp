import React from 'react';

const TrainingPrograms = () => {
  const accreditedTrainingList = [
    'New Venture Creation NQF Level 2',
    'New Venture Creation NQF Level 4',
    'Project Management NQF Level 4',
    'Project Management NQF Level 5',
    'Real Estate NQF Level 4',
    'Business Administration NQF Level 2',
    'Business Administration NQF Level 4',
    'Generic Management NQF Level 3',
    'Generic Management NQF Level 4',
    'End User Computing NQF 2',
    'Contact Centre NQF Level 2',
    'Contact Centre NQF Level 3',
    'Contact Centre NQF Level 4'
  ];

  const softSkillsTrainingList = [
    'Soft Skills Training',
    'Financial Skills',
    'Finance for Non-Financial Managers',
    'Conflict Management',
    'Emotional Intelligence',
    'Customer Care',
    'Leadership and Supervisory Skills',
    'Business Etiquette',
    'Negotiation Skills',
    'Communication Skills',
    'Problem Solving',
    'Assertiveness Training',
    'Stress Management',
    'Telesales/ Telemarketing',
    'Personnel Planning'
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
          Our Training Programmes
        </div>
        <h2 style={styles.title}>Empowering You with Knowledge and Skills</h2>
        <p style={styles.description}>
          We offer a range of accredited and soft skills training programmes that are designed to meet the needs of your organization. These programmes are crafted to improve the capabilities of your workforce and ensure long-term success.
        </p>
      </div>

      {/* Training Programmes Layout */}
      <div style={styles.grid}>
        {/* Accredited Training Column */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Accredited Training</h3>
          <ul style={styles.list}>
            {accreditedTrainingList.map((program, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.icon}>★</span>
                <span style={styles.serviceText}>{program}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills Training Column */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Soft Skills Training</h3>
          <ul style={styles.list}>
            {softSkillsTrainingList.map((program, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.icon}>★</span>
                <span style={styles.serviceText}>{program}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainingPrograms;