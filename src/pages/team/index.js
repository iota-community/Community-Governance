import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TEAM from './teamData';
import TeamMember from './TeamMember';

export default function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Governance Team`}
      description="The IOTA Community Governance Team">
      <main>
        <section className={styles.section}>
          <div className="container">
            <h1 className="hero__title">Team Members</h1>
            <p className="hero__subtitle">Do you want to become a member? Please watch <a href="https://github.com/iota-community/Community-Governance/issues/new/choose">here</a>.</p>
            <div className="row">
              {TEAM.map((item, index) => (
                <TeamMember key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
