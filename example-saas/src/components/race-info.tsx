export type RaceInfoProps = {
  name: string;
  distance: string;
  logo: string;
  description: string;
  date: Date;
};

export default function RaceInfo({
  name,
  distance,
  description,
  logo,
  date,
}: RaceInfoProps) {
  return (
    <div className="p-10 mx-auto flex bg-gradient-to-r from-gray-700 to-gray-900 border-8 border-gray-900 rounded-xl shadow-lg shrink space-y-2 text-gray-400 responsive">
      <div className="flex-1">
        <img className="mx-auto max-w-full max-h-48" src={logo} alt={name} />
      </div>
      <div className="flex-1 flex-col justify-center h-full">
        <h1 className="text-2xl text-gray-200 font-bold text-center underline decoration-orange-700">
          {name}
        </h1>
        <div className="text-m font-small text-center">
          Date: {date.toDateString()}
        </div>
        <div className="text-m font-small text-center">
          Distance: {distance}
        </div>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}
