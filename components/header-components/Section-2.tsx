import React from "react";
import { Eye, Flag, Sparkles } from "lucide-react";
import Masonry from "react-responsive-masonry";
import { Loader } from "../Loader";

export const Section_2 = ({
  visits,
  className,
}: {
  visits: number | string | any;
  className?: string;
}) => {
  const getExperienceYears = (currentDate: Date = new Date()): number => {
    const startDate = new Date(2023, 3, 26);
    const diffTime = currentDate.getTime() - startDate.getTime();
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); // milisegundos, segundos, minutos, horas, días del año

    return Math.max(0, Number(diffYears.toFixed(1)));
  };

  const handleVisitsNumber = (num: number | string | any) => {
    if (visits >= 1000) {
      const formatVisits = (visits / 1000).toFixed(1);
      return formatVisits.replace(/.0/, "") + "K";
    }
    return visits;
  };

  const sections = [
    {
      name: "Proyectos",
      quantity: 5,
      icon: <Flag className="inline w-4 h-5 mr-1 text-violet-400" />,
    },
    {
      name: "Visitas",
      quantity: !visits
        ? (visits = <Loader />)
        : handleVisitsNumber(visits as string),
      icon: <Eye className="inline w-4 h-5 mr-1 text-violet-400" />,
    },
    {
      name: "Experiencia",
      quantity: getExperienceYears(),
      icon: <Sparkles className="inline w-4 h-5 mr-1 text-violet-400" />,
    },
  ];

  return (
    <Masonry className="flex" gutter="0.8rem">
      {sections.map((sec, index) => (
        <section
          key={index}
          className={`flex items-center justify-center border border-foreground/5 bg-zinc-900/50 p-6 rounded-xl overflow-hidden ${className}`}
        >
          <div className="flex flex-col items-center text-center w-full">
            <h1 className="text-5xl font-bold text-white flex items-center">
              {sec.quantity as number}
              {sec.name !== "Experiencia" && sec.name !== "Visitas" ? (
                <span className="text-violet-400 font-semibold text-3xl ml-1">
                  +
                </span>
              ) : null}
            </h1>
            <aside className="flex items-center justify-center xl:px-3 px-2 xl:py-1 py-[2px] mt-2 bg-zinc-800/30 border border-foreground/5 md:rounded-full w-full min-w-[120px]">
              {sec.icon}
              <span className="xl:text-xs text-[10px] whitespace-nowrap">
                {sec.name}
              </span>
            </aside>
          </div>
        </section>
      ))}
    </Masonry>
  );
};
