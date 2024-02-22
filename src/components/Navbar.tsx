import { FaGraduationCap } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex my-10 justify-between items-center">
      <div className="flex gap-2 items-center">
        <FaGraduationCap className=" text-violet-600" size={60} />
        <p className="text-xl font-bold">All Courses</p>
        <div className=" px-4 py-2 rounded-md bg-violet-600 text-white">Add New Courses</div>
      </div>
      <div>
        <button className="">
          <CiCircleQuestion className=" text-violet-400" size={50} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
