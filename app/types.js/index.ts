export interface User {
  name: string;
}

export interface NameFormProps {
  onNameSubmit: (name: string) => void;
  initialName?: string;
}

export interface WelcomeMessageProps {
  userName: string;
}