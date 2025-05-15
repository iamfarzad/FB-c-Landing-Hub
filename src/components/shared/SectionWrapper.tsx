import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements; // Allows specifying the HTML tag, defaults to 'section'
}

export default function SectionWrapper({
  children,
  className,
  id,
  as: Component = 'section',
}: SectionWrapperProps) {
  return (
    <Component
      id={id}
      className={cn('py-12 md:py-20 animate-fadeInUp', className)}
    >
      <div className="container">
        {children}
      </div>
    </Component>
  );
}
