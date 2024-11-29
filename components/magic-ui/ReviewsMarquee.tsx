import { Marquee } from "@/components/magic-ui/Marquee";
import { Format } from "../Format";
import Link from "next/link";
import React from "react";
import { ReviewsMarqueeProps } from "@/app/types/definitions";
import { DeleteButton } from "../DeleteBtn";
import Image from "next/image";
import { EditButton } from "../EditBtn";

export const ReviewCard: React.FC<ReviewsMarqueeProps> = ({
  id,
  avatarUrl,
  fullName,
  city,
  province,
  flag,
  createdAt,
  comment,
  trash,
  edit,
  edited,
  onDelete,
  onEdit,
  onSave,
}) => {
  return (
    <div
      id={`comment-${id}`}
      className="flex flex-col max-w-xs md:max-w-xl card-comment mx-auto space-y-2 bg-zinc-800/50 border border-zinc-800 rounded-2xl relative my-4 text-pretty"
    >
      <header className="flex gap-[10px] items-center border-b border-foreground/10 dark:border-zinc-800 p-3">
        <Image
          src={avatarUrl}
          width={38}
          height={38}
          alt={`Avatar de ${fullName}`}
          className="rounded-lg"
        />
        <aside className="flex flex-col cursor-default">
          <small className="font-semibold">{fullName}</small>
          <small className="text-zinc-400 font-light line-clamp-1">
            {city}, {province} {flag}
          </small>
        </aside>
        <small className="flex absolute right-3 text-zinc-400">
          {trash ? (
            <>
              <EditButton onEdit={() => onEdit && onEdit(id)} />
              <DeleteButton id={id} onDelete={() => onDelete && onDelete(id)} />
            </>
          ) : null}
          {createdAt as number}
        </small>
      </header>
      <div className="space-y-2 p-3 pointer-events-none">
        <small className="text-zinc-400 text-xs absolute right-[26px] top-1">
          {edited === true ? "(editado)" : null}
        </small>
        <p
          contentEditable={edit}
          suppressContentEditableWarning
          id="message"
          className="text-balance text-zinc-400"
        >
          {comment}
        </p>
        {edit && (
          <button
            onClick={() => {
              const comment = document.getElementById(`comment-${id}`);
              const editedComment = comment?.textContent;
              const edited = true;
              onSave && onSave(id, editedComment as string, edited);
            }}
            className="px-2 py-1 bg-btn-background hover:bg-btn-background-hover rounded-lg border border-foreground/10 w-fit cursor-pointer"
          >
            Guardar
          </button>
        )}
      </div>
    </div>
  );
};

export const ReviewsMarquee = ({ data }: { data: any | Promise<void> }) => {
  const reviews: any[] = [];

  data.forEach((review: any) => {
    reviews.push(review);
  });

  return (
    <div className="flex">
      {reviews.length !== 0 ? (
        <Marquee className="[--duration:20s]" animateY slice pauseOnHover>
          {reviews.map((review) => (
            <ReviewCard
              id={review.id}
              key={review.id}
              avatarUrl={review.avatar_url}
              fullName={review.full_name}
              city={review.city}
              province={review.province}
              country={review.country}
              flag={review.flag}
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
