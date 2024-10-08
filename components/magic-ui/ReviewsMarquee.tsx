import { Marquee } from "@/components/magic-ui/Marquee";
import { Format } from "../Format";
import Link from "next/link";
import React from "react";
import { ReviewsMarqueeProps } from "@/app/types/definitions";
import { DeleteButton } from "../DeleteBtn";

export const ReviewCard: React.FC<ReviewsMarqueeProps> = ({
  id,
  avatarUrl,
  fullName,
  city,
  country,
  createdAt,
  comment,
  trash,
  onDelete,
}) => {
  return (
    <div
      id={`comment-${id}`}
      className="flex flex-col md:max-w-lg max-w-xs w-[320px] md:w-[512px] space-y-2 bg-zinc-800/50 border border-zinc-800 rounded-2xl relative mt-4"
    >
      <header className="flex gap-[10px] items-center border-b border-foreground/10 dark:border-zinc-800 p-3">
        <img
          src={avatarUrl}
          width={38}
          height={38}
          alt={`Avatar de ${fullName}`}
          className="rounded-lg"
        />
        <aside className="flex flex-col cursor-default">
          <small className="font-semibold">{fullName}</small>
          <small className="text-zinc-400 font-light">
            {city}, {country}
          </small>
        </aside>
        <small className="flex absolute right-3 text-zinc-400">
          {trash ? (
            <DeleteButton id={id} onDelete={() => onDelete && onDelete(id)} />
          ) : null}
          {createdAt as number}
        </small>
      </header>
      <div className="space-y-2 p-3 pointer-events-none">
        <p id="message" className="text-balance text-zinc-400">
          {comment}
        </p>
      </div>
    </div>
  );
};

export const ReviewsMarquee = ({ data }: { data: any | Promise<void> }) => {
  const reviews = [];

  for (let i = 0; i < data.length; i++) {
    reviews.push(data[i]);
  }

  return (
    <div className="flex flex-col">
      {reviews.length !== 0 ? (
        <Marquee className="[--duration:20s]" animateY slice>
          {reviews.map((review) => (
            <ReviewCard
              id={review.id}
              key={review.id}
              avatarUrl={review.avatar_url}
              fullName={review.full_name}
              city={review.city}
              country={review.country}
              createdAt={Format.date(review.created_at)}
              comment={review.message}
            />
          ))}
        </Marquee>
      ) : (
        <div className="text-center mt-10 md:mt-20">
          <p className="my-4">No hay comentarios aún..🙄</p>
          <Link
            href="/comments"
            className="b-404 bg-violet-400/60 hover:bg-violet-300/60 px-2 py-2 rounded-md"
          >
            Comentar
          </Link>
        </div>
      )}
    </div>
  );
};
