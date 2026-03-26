# Payment Processing System

Enterprise-level microservices project built using Java, Spring Boot, React, Kafka, PostgreSQL, and Docker.

## Tech Stack
- Java 17
- Spring Boot
- Spring Security (JWT)
- PostgreSQL
- Apache Kafka
- React + TypeScript
- Docker

## Features
- User authentication with JWT
- Payment creation and tracking
- Kafka event-driven architecture
- Notification service
- REST APIs with Swagger
- React dashboard UI

## Architecture
Auth Service → Payment Service → Kafka → Notification Service → React UI

## How to Run
1. Start Docker:
   docker-compose up

2. Run backend services:
   mvn spring-boot:run

3. Run frontend:
   npm install
   npm start

## APIs
- POST /api/auth/login
- POST /api/payments
- GET /api/payments
- PUT /api/payments/{id}/status

## Future Improvements
- Add Kubernetes deployment
- Add CI/CD pipeline
- Add monitoring (Prometheus/Grafana)
