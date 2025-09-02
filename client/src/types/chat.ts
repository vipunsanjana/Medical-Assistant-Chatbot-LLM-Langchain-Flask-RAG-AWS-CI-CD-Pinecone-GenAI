export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  answer: string;
}

export interface ChatRequest {
  query: string;
}

export interface HealthStatus {
  status: string;
  timestamp: string;
}