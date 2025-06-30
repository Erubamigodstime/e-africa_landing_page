

// This file contains the definition of the Button component and its props.
// The Button component is a reusable UI element that can be customized with different sizes, colors, and click actions.

export type ButtonProps = {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  bgColor?: string;      
  textColor?: string;    
  hoverColor?: string;   
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export type signinProps = {
    className?: string; 
}
export type patnerCardProps = {
    title: string;
    description?: string;
    description2?: string;
    imageUrl: string;
    className?: string; 
    children?: React.ReactNode;
};
export type ImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
};