export type SponsorProps = {
  name: string;
  tier: string;
  image: string;
};

export default function Sponsor({ name, tier, image }: SponsorProps) {
  return (
    <div className="p-12 max-w-sm max-h-64 mx-auto border-4 border-gray-500 bg-gradient-to-r from-gray-500 to-gray-700 rounded-xl shadow-lg space-y-2 text-gray-400">
      <div className="flex flex-col items-center h-full">
        <img className="h-5/6 object-contain" src={image} alt={name} />
        <div className="h-1/6 text-m font-small text-center py-10">
          {tier} Sponsor
        </div>
      </div>
    </div>
  );
}
