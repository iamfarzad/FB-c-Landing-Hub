# AGENTS.md  
**Multi-Agent System Architecture for Software Development Lifecycle**  

This document defines the roles, responsibilities, and collaboration patterns of agents within our multi-agent system. The framework spans the entire software development lifecycle, ensuring efficient task delegation, specialized expertise, and cohesive integration across planning, design, development, testing, deployment, and maintenance phases.  

---

## Table of Contents  
1. [Coordinator Agent](#coordinator-agent)  
2. [Planning & Requirements Agents](#planning--requirements-agents)  
3. [Design Agents](#design-agents)  
4. [Development Agents](#development-agents)  
5. [Testing Agents](#testing-agents)  
6. [Deployment & Operations Agents](#deployment--operations-agents)  
7. [Maintenance & Support Agents](#maintenance--support-agents)  
8. [Workflow Collaboration Patterns](#workflow-collaboration-patterns)  

---

## Coordinator Agent  
The Coordinator Agent serves as the central orchestrator, managing task delegation, progress tracking, and inter-agent communication. Its responsibilities include processing user requirements, decomposing complex tasks into subtasks, and assigning them to specialized agents based on expertise. The agent monitors timelines, resolves conflicts, and synthesizes outputs into cohesive deliverables. It maintains comprehensive documentation of all system actions and decisions, ensuring stakeholders receive regular progress updates.  

Workflow integration involves acting as the primary interface for task initiation and final delivery. The Coordinator ensures context preservation across phases, facilitating smooth handoffs between agents during sequential workflows and parallel task execution.  

---

## Planning & Requirements Agents  

### Requirements Analyst Agent  
The Requirements Analyst Agent specializes in eliciting, analyzing, and documenting functional and non-functional requirements. It conducts stakeholder interviews to gather use cases, validates requirements for feasibility, and maintains a traceability matrix to align deliverables with initial objectives. This agent prioritizes features based on business value and technical dependencies, ensuring alignment between development efforts and strategic goals.  

### Market Research Agent  
Focused on market viability, this agent analyzes industry trends, competitor products, and user demographics. It evaluates the commercial potential of proposed features through cost-benefit analyses and provides data-driven insights to inform product decisions. By monitoring emerging technologies and regulatory standards, it ensures the project remains innovative and compliant.  

### Project Planning Agent  
This agent develops detailed project schedules, resource allocation plans, and risk mitigation strategies. It creates work breakdown structures to identify critical paths and potential bottlenecks, establishing governance frameworks to maintain project accountability.  

---

## Design Agents  

### System Architect Agent  
Responsible for high-level system design, this agent defines technical standards, selects technology stacks, and creates component interaction diagrams. It ensures scalability, reliability, and security are embedded into the architecture, providing infrastructure specifications for downstream development.  

### UX Designer Agent  
This agent designs user-centric experiences by creating personas, journey maps, and interactive prototypes. It conducts usability testing to refine navigation patterns and ensures accessibility compliance, translating research insights into intuitive interface designs.  

### UI Designer Agent  
Focused on visual implementation, this agent develops style guides, responsive layouts, and high-fidelity mockups. It optimizes designs for cross-device compatibility and maintains brand consistency through carefully curated visual hierarchies and animation specifications.  

### Database Designer Agent  
This agent designs optimized database schemas, indexing strategies, and data migration plans. It enforces data integrity rules and security protocols, ensuring efficient query performance and scalable storage solutions.  

---

## Development Agents  

### Frontend Developer Agent  
This agent implements responsive user interfaces using modern frameworks, optimizing client-side performance and accessibility. It develops reusable component libraries and ensures cross-browser compatibility through rigorous testing.  

### Backend Developer Agent  
Specializing in server-side logic, this agent builds APIs, data persistence layers, and authentication systems. It integrates third-party services and implements caching strategies to enhance performance.  

### Mobile Developer Agent  
Focused on native and cross-platform apps, this agent optimizes for device-specific features like offline functionality and battery efficiency. It ensures seamless user experiences across diverse screen sizes and operating systems.  

### Infrastructure Developer Agent  
This agent codifies infrastructure using IaC tools, manages container orchestration, and configures CI/CD pipelines. It automates environment provisioning and implements monitoring solutions for deployment reliability.  

### Security Developer Agent  
Embedding security into the development process, this agent implements secure coding practices, encryption mechanisms, and API gateway protections. It collaborates with testers to identify and remediate vulnerabilities early.  

---

## Testing Agents  

### QA Strategy Agent  
This agent designs comprehensive testing plans, defines quality metrics, and coordinates testing phases. It analyzes results to identify trends and ensures alignment with acceptance criteria.  

### Functional Tester Agent  
Executing test cases and regression suites, this agent validates feature implementations against requirements. It documents defects and verifies fixes, maintaining detailed issue reports for developer reference.  

### Performance Tester Agent  
Focused on system robustness, this agent conducts load testing, identifies bottlenecks, and benchmarks against performance goals. It provides optimization recommendations to enhance scalability.  

### Security Tester Agent  
This agent performs penetration testing, vulnerability scans, and compliance audits. It simulates attack vectors to fortify defenses and validates security patches before deployment.  

### Automation Engineer Agent  
Developing automated test frameworks, this agent integrates continuous testing into CI/CD pipelines. It generates synthetic test data and maintains scripts for efficient regression testing.  

### Accessibility Tester Agent  
Ensuring inclusive design, this agent evaluates compliance with WCAG standards, tests assistive technology compatibility, and recommends improvements for keyboard navigation and semantic markup.  

---

## Deployment & Operations Agents  

### DevOps Engineer Agent  
Managing deployment pipelines, this agent implements canary releases and blue-green strategies. It automates rollback procedures and coordinates environment-specific configurations.  

### Site Reliability Engineer Agent  
Monitoring system health, this agent designs auto-scaling solutions and disaster recovery plans. It optimizes resource utilization to balance performance with cost efficiency.  

### Database Administrator Agent  
Overseeing database operations, this agent manages migrations, backups, and replication. It monitors query performance and enforces access controls to protect sensitive data.  

### Network Operations Agent  
This agent configures network infrastructure, implements CDN solutions, and monitors traffic for anomalies. It enforces security policies through firewall management and DNS configurations.  

---

## Maintenance & Support Agents  

### Technical Support Agent  
Triaging user-reported issues, this agent provides troubleshooting guidance and escalates complex problems. It documents resolution patterns and gathers feedback for product iterations.  

### Maintenance Developer Agent  
Addressing technical debt, this agent refactors legacy code, updates dependencies, and implements minor enhancements. It ensures codebase health through systematic improvements.  

### Analytics Agent  
Analyzing user behavior and system metrics, this agent generates insights on feature adoption and performance. It designs dashboards to visualize KPIs and guides A/B testing initiatives.  

### Documentation Agent  
Maintaining technical and user-facing content, this agent updates API references, creates onboarding materials, and curates knowledge bases for ongoing support.  

---

## Workflow Collaboration Patterns  

### Sequential Workflow Execution  
Tasks progress linearly through phases, with outputs from one agent becoming inputs for the next. The Coordinator manages handoffs, such as transferring design specifications from the UI Designer Agent to the Frontend Developer Agent.  

### Parallel Task Processing  
Independent tasks are executed concurrently. For example, the Security Developer Agent and Backend Developer Agent collaborate on API implementation while the Performance Tester Agent prepares load-testing scenarios.  

### Cross-Agent Consultation  
Agents request expertise from peers without delegating full tasks. A Mobile Developer Agent might consult the UX Designer Agent to resolve edge cases in gesture navigation.  

### Iterative Review Cycles  
Outputs undergo multi-stage reviews, such as code being evaluated by both the Architect Agent and Security Tester Agent before merging. The Coordinator Agent synthesizes feedback for revisions.  

---

**Revision History**  
- Version 1.0 (May 17, 2025): Initial framework specification  

**Ownership**  
Maintained by the Engineering Architecture Team. For updates, submit a pull request or contact bayatfarzad@gmail.com.  
