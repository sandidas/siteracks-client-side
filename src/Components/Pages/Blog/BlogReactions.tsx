import { ChatBubbleBottomCenterIcon, HeartIcon } from "@heroicons/react/24/solid";
import { UnstyledButton } from "@mantine/core";
import React, { FC, useState } from "react";

interface IProps {
  answers?: IBlogAnswer[];
  reactions?: {
    likes: IReaction[];
    dislikes: IReaction[];
    saves: IReaction[];
  };
}

const BlogReactions: FC<IProps> = ({ answers, reactions }) => {
  // userState for like count
  const [totalLikes, setTotalLikes] = useState(reactions?.likes.length ?? 0);
  const [totalDisLikes, setTotalDisLikes] = useState(0);
  const [totalComments, setTotalComments] = useState(answers?.length ?? 0);
  return (
    <>
      <div className="flex items-center gap-2 xl:gap-5">
        {/* Like Button */}
        <div className="flex items-center gap-2">
          <HeartIcon className={`w-5 h-5 stroke-primary fill-none`} />
          <span className="text-sm">{totalLikes} </span>
        </div>

        {/* Comment Button  */}
        <div className="flex items-center gap-2">
          <ChatBubbleBottomCenterIcon className="w-5 h-5 stroke-slate-500 fill-none" />

          <span className="text-sm"> {totalComments} </span>
        </div>
      </div>
    </>
  );
};

export default BlogReactions;
