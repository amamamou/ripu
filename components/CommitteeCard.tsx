import Image from 'next/image';

interface CommitteeCardProps {
  name: string;
  title: string;
  institution: string;
  country: string;
  imageUrl: string;
}

export default function CommitteeCard({ name, title, institution, country, imageUrl }: CommitteeCardProps) {
  return (
    <div className="text-center group">
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-sm bg-[#f9f9f9]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:opacity-80 transition-smooth"
        />
      </div>
      <h3 className="text-base font-bold text-black mb-1">{name}</h3>
      <p className="text-sm text-[#2d9bb7] font-medium mb-1">{title}</p>
      <p className="text-xs text-[#666666]">{institution}</p>
      <p className="text-xs text-[#999999]">{country}</p>
    </div>
  );
}
