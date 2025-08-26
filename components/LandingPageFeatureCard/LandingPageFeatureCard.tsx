type Props = {
  title: string;
  paragraph: string;
  Icon: React.ElementType;
};

export default function LandingPageFeatureCard({
  title,
  paragraph,
  Icon,
}: Props) {
  return (
    <li className="border-2 border-red flex-1 min-w-[150px] basis-[200px] p-4 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="bg-accent rounded-[50%] w-[70px] p-4 flex justify-center items-center m-auto my-6">
        <Icon className="size-8" />
      </div>

      <h3 className="font-bold text-2xl text-center mb-4">{title}</h3>
      <p className="text-center text-grey text-lg">{paragraph}</p>
    </li>
  );
}
