import { AiProfileImage } from "../assets/AiProfileImage";
import { UserProfileImage } from "../assets/UserProfileImage";

const ProfileImage = (props: { type: string }) => {
  if (props.type === "user") {
    return <UserProfileImage />;
  }
  return <AiProfileImage />;
};

export const ChatPost = (props: { type: string; message: string }) => {
  return (
    <div
      className={`flex gap-3 my-4 text-gray-600 text-sm flex-1 border border-slate-100 rounded-md p-4 ${
        props.type === "User" && "bg-slate-50"
      }`}
    >
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
        <div className="rounded-full bg-gray-100 border p-1">
          <ProfileImage type={props.type} />
        </div>
      </span>
      <p className="leading-relaxed">
        <span className="block font-bold text-gray-700">{props.type} </span>
        {props.message}
      </p>
    </div>
  );
};
