import ocasion from "../assets/media/occasion.png";
import ocasion1 from "../assets/media/occasion1.png";
import ocasion2 from "../assets/media/occasion2.png";
import ocasion3 from "../assets/media/occasion3.png";
import ocasion4 from "../assets/media/occasion4.png";
import Post from "./Post";

export default function Ocasion() {

    
  return (
    <>
      <h2 className="font-semibold mt-8 mb-3">Occasions for</h2>
      <div className="flex flex-wrap gap-5">
        <div>
          <img src={ocasion} alt="" />
        </div>
        <div>
          <img src={ocasion1} alt="" />
        </div>
        <div>
          <img src={ocasion2} alt="" />
        </div>
        <div>
          <img src={ocasion3} alt="" />
        </div>
        <div>
          <img src={ocasion4} alt="" />
        </div>
      </div>
      <Post />
    </>
  );
}
