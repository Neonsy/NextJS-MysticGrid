type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className }: ContainerProps) {
    return <div className={`md:container md:mx-auto ${className}`}>{children}</div>;
}
