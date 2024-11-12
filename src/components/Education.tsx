import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-10 px-5 lg:px-12 bg-gray-100">
      <h2 className="font-play text-5xl font-bold text-center mb-5">
        MY <span className="text-[#388beb]">EDUCATION</span>
      </h2>
      <div className="divider divider-start divider-info">EDUCATION</div>

      <div className="relative flex flex-col gap-10 mt-10 max-w-3xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300"></div>

        <div className="relative flex items-start">
          <div className="absolute -left-8 top-4 bg-blue-500 rounded-full p-2 text-white shadow-lg z-10">
            <FaGraduationCap className="h-6 w-6" />
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-blue-500 w-80 ml-8">
            <h3 className="text-lg font-semibold text-blue-700">
              Jatiya Kabi Kazi Nazrul Islam University
            </h3>
            <p className="text-gray-700 font-medium">
              M.Sc., Computer Science and Engineering
            </p>
            <p className="text-gray-500 text-sm">Passing Year: 2018</p>
            <p className="text-gray-500 text-sm">CGPA: 3.17 / 4.00</p>
          </div>
        </div>

        <div className="relative flex items-start">
          <div className="absolute -right-8 top-4 bg-blue-500 rounded-full p-2 text-white shadow-lg z-10">
            <FaGraduationCap className="h-6 w-6" />
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-blue-500 w-80 mr-8 ml-auto">
            <h3 className="text-lg font-semibold text-blue-700">
              Jatiya Kabi Kazi Nazrul Islam University
            </h3>
            <p className="text-gray-700 font-medium">
              B.Sc. in Engineering, Computer Science and Engineering
            </p>
            <p className="text-gray-500 text-sm">Passing Year: 2015</p>
            <p className="text-gray-500 text-sm">CGPA: 3.16 / 4.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
