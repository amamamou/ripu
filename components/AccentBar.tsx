import React from 'react';

interface AccentBarProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * AccentBar Component
 * Adds a left purple accent bar for visual hierarchy.
 * Used in cards, sections, and content blocks.
 */
export const AccentBar: React.FC<AccentBarProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`accent-bar ${className}`}>
      {children}
    </div>
  );
};

export default AccentBar;
