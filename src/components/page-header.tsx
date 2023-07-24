import "tailwindcss/tailwind.css";

interface PageProps {
  title: string;
}

export default function MainPageHeader({ title }: PageProps) {
  return (
    <div className="h-36 mb-10 flex bg-dark-accent justify-start pl-10 items-center">
      <p className="text-4xl">{title}</p>
    </div>
  );
}
