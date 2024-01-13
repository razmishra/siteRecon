import React, { useContext } from "react";
import PrabhatImg from "../assets/PrabhatImg.png";
import FrameImg from "../assets/FrameImg.png";
import TagImg from "../assets/tagImg.png";
import send from "../assets/send.png";
import { BsEmojiSmile } from "react-icons/bs";
import { LuPlusCircle } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Modalcontext } from "../context/Modalcontext";
import Openmodal from "./Openmodal";

const FullCard = (props) => {
  const { modalOpen, handleOpen } = useContext(Modalcontext);

  return (
    <div className="items-start bg-white flex max-w-[400px] flex-col px-6 py-3.5 rounded-3xl">
      <div className="items-center self-stretch flex w-full justify-between gap-5 px-px">
        <span className="items-stretch flex gap-1 my-auto p-px">
          <div className="text-stone-500 text-xs grow whitespace-nowrap">
            Created 2d ago by
          </div>
          <div className="text-zinc-800 text-xs font-semibold grow whitespace-nowrap">
            Saiful Ameen
          </div>
        </span>
        <div className="items-stretch self-stretch flex justify-between gap-3">
          <GoShareAndroid
            size={22}
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full text-stone-500"
          />
          <HiOutlineDotsVertical
            size={22}
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full text-stone-500"
          />
        </div>
      </div>
      <span className="justify-between items-stretch self-stretch flex gap-5 mt-3">
        <div className="text-zinc-800 text-base font-semibold grow whitespace-nowrap">
          Mowing Turf
        </div>
        <span className="text-amber-600 text-center text-xs leading-5 whitespace-nowrap justify-center items-stretch border bg-white aspect-[2.375] px-3 py-0.5 rounded-xl border-solid border-amber-600">
          Open
        </span>
      </span>
      <div className="items-stretch bg-neutral-100 self-stretch flex justify-between gap-0.5 mt-2 pl-2.5 pr-1 pt-2.5 rounded-md">
        <span className="flex flex-col items-stretch">
          <div className="text-zinc-800 text-xs">
            This turf is to be mowed with a manual mower of 30” . The total area
            includes the lawn back of the house. This turf is to be mowed with a
            manual mower of 30” . The total area includes the lawn back of the
            house.
          </div>
          <div className="mt-2">
            <li className="list-decimal">
              <span className="text-zinc-800 text-sm font-semibold whitespace-nowrap">
                Turf Audit
              </span>
              <ul className="list-none">
                <li className="list-none text-stone-500 text-xs font-semibold whitespace-nowrap">
                  <span>1.a Overall Appearance</span>
                </li>
              </ul>
            </li>
          </div>
          <div className="text-stone-500 text-xs">
            Please share feedback on the relative input points relevant to the
            area of the site that these questions are linked to. Please ensure
            all mandatory fields are filled sincerely.{" "}
          </div>
        </span>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2b061f4aa73322e0df730132b9084adfb84144747089e4582d370b94034dafd?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2b061f4aa73322e0df730132b9084adfb84144747089e4582d370b94034dafd?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2b061f4aa73322e0df730132b9084adfb84144747089e4582d370b94034dafd?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2b061f4aa73322e0df730132b9084adfb84144747089e4582d370b94034dafd?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2b061f4aa73322e0df730132b9084adfb84144747089e4582d370b94034dafd?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2b061f4aa73322e0df730132b9084adfb84144747089e4582d370b94034dafd?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2b061f4aa73322e0df730132b9084adfb84144747089e4582d370b94034dafd?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2b061f4aa73322e0df730132b9084adfb84144747089e4582d370b94034dafd?apiKey=b2551c1a133242ba93a6dc4befb9452b&"
        className="aspect-[4.76] object-contain object-center w-full overflow-hidden cursor-pointer self-center mt-3"
        onClick={handleOpen}
      />
      <div className="items-stretch self-stretch flex gap-2 mt-3">
        <div className="items-center flex justify-between gap-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fac695212fc280f089e79cf04143b948ce5b597ec27db7563802ec3605ce8d08?apiKey=b2551c1a133242ba93a6dc4befb9452b&"
            className="aspect-[0.86] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <span className="items-stretch bg-zinc-100 self-stretch flex justify-between gap-1.5 px-1.5 py-1 rounded-[42px]">
            <img
              loading="lazy"
              srcSet={PrabhatImg}
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full rounded-[50%]"
            />
            <div className="text-black text-xs grow whitespace-nowrap self-start">
              Prabhat K...
            </div>
          </span>
        </div>
        <div className="items-center flex justify-between gap-1.5">
          <img
            loading="lazy"
            src={FrameImg}
            className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <span className="text-black text-xs whitespace-nowrap items-stretch bg-zinc-100 self-stretch grow justify-center px-2 py-1.5 rounded-[41px]">
            Palm Tri... +2
          </span>
        </div>
        <div className="items-center flex justify-between gap-1.5">
          <img
            loading="lazy"
            src={TagImg}
            className="aspect-[1.17] object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <span className="items-stretch bg-zinc-100 self-stretch flex justify-between gap-px px-2 py-1.5 rounded-3xl">
            <div className="text-zinc-800 text-xs grow whitespace-nowrap">
              test tag ...
            </div>
            <div className="text-zinc-800 text-xs grow whitespace-nowrap">
              +7
            </div>
          </span>
        </div>
      </div>
      <div className="self-stretch bg-gray-200 flex shrink-0 h-px flex-col mt-2" />
      <span className="items-stretch flex gap-2 mt-3 self-start">
        <div className="text-stone-500 text-xs underline grow whitespace-nowrap self-start">
          3 comments
        </div>
        <div className="bg-zinc-300 flex w-px shrink-0 h-4 flex-col self-start" />
        <div className="text-sky-400 text-xs font-medium underline grow whitespace-nowrap">
          Resolve
        </div>
      </span>
      <div className="flex justify-between items-center w-full mt-1">
        <div className="w-1/2">
          <input
            type="text"
            className="text-stone-500 text-xs italic w-full border-none outline-none focus:outline-none"
            placeholder="Type your comment here"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center">
            <BsEmojiSmile style={{ color: "#999999CC" }} />
            <MdAlternateEmail style={{ color: "#999999CC" }} />
            <LuPlusCircle style={{ color: "#999999CC" }} />
          </div>
          <img src={send} alt="Send" />
        </div>
      </div>
      {modalOpen && <Openmodal />}
    </div>
  );
};

export default FullCard;
