# Medical Chatbot Frontend

A professional React-based frontend for the Medical Assistant API, designed for healthcare environments with a focus on accessibility and user experience.

## Features

- 🏥 Professional medical-grade UI design
- 💬 Real-time chat interface for medical queries
- 📱 Fully responsive design for all devices
- 🔒 Built-in safety disclaimers and error handling
- 🚀 Production-ready with Docker and Kubernetes support
- ⚡ Health monitoring and status indicators

## Development

### Prerequisites

- Node.js 18+ and npm
- Python backend service running on port 5000

### Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Environment Variables

- `VITE_API_URL`: URL of the Python backend API (default: `http://localhost:5000`)

## Docker Deployment

### Build the Docker image:

```bash
docker build -t medical-chatbot-frontend .
```

### Run the container:

```bash
docker run -p 80:80 -e VITE_API_URL=http://your-api-url medical-chatbot-frontend
```

## Kubernetes/EKS Deployment

### Apply the Kubernetes manifests:

```bash
kubectl apply -f k8s-deployment.yaml
```

### Deploy to EKS:

1. Build and push to ECR:
```bash
# Login to ECR
aws ecr get-login-password --region your-region | docker login --username AWS --password-stdin your-account.dkr.ecr.your-region.amazonaws.com

# Build and tag
docker build -t medical-chatbot-frontend .
docker tag medical-chatbot-frontend:latest your-account.dkr.ecr.your-region.amazonaws.com/medical-chatbot-frontend:latest

# Push to ECR
docker push your-account.dkr.ecr.your-region.amazonaws.com/medical-chatbot-frontend:latest
```

2. Update the deployment image in `k8s-deployment.yaml`
3. Apply to your EKS cluster:
```bash
kubectl apply -f k8s-deployment.yaml
```

## Production Considerations

- Update the `VITE_API_URL` to point to your production API
- Configure proper DNS for the ingress
- Set up SSL/TLS certificates
- Configure monitoring and logging
- Review security headers in nginx.conf

## API Integration

The frontend expects the backend API to have these endpoints:

- `GET /` - Health check endpoint
- `POST /chat` - Chat endpoint expecting `{"query": "message"}` and returning `{"answer": "response"}`

## Safety & Compliance

- Built-in medical disclaimers
- Clear indication that AI advice is informational only
- Professional design suitable for healthcare settings
- Error handling for service interruptions