export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}