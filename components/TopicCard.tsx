interface TopicCardProps {
  title: string;
  description: string;
  category: 'ai' | 'pedagogy' | 'inclusion';
}

const categoryColors = {
  ai: 'border-l-[#2d9bb7]',
  pedagogy: 'border-l-[#6b7fa3]',
  inclusion: 'border-l-[#d4a574]',
};

const categoryBg = {
  ai: 'bg-[#2d9bb7]/5',
  pedagogy: 'bg-[#6b7fa3]/5',
  inclusion: 'bg-[#d4a574]/5',
};

export default function TopicCard({ title, description, category }: TopicCardProps) {
  return (
    <div
      className={`p-6 border-l-4 ${categoryColors[category]} ${categoryBg[category]} hover:shadow-md transition-smooth cursor-pointer group`}
    >
      <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#2d9bb7] transition-smooth">
        {title}
      </h3>
      <p className="text-sm text-[#666666] leading-relaxed">{description}</p>
    </div>
  );
}
