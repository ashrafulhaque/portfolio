const Education = () => {
  return (
    <section id="education" className="py-10 px-5 lg:px-12 bg-[#fafafa]">
      <h2 className="font-play text-5xl font-bold text-center mb-5">
        MY <span className="text-[#388beb]">EDUCATION</span>
      </h2>
      <div className="divider divider-start divider-info">EDUCATION</div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2018</time>
            <h3 className="text-lg font-semibold text-blue-700">
              Jatiya Kabi Kazi Nazrul Islam University
            </h3>
            <p className="text-gray-700 font-medium">
              M.Sc., Computer Science and Engineering
            </p>
            <p className="text-gray-500 text-sm">CGPA: 3.17 / 4.00</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2015</time>
            <h3 className="text-lg font-semibold text-blue-700">
              Jatiya Kabi Kazi Nazrul Islam University
            </h3>
            <p className="text-gray-700 font-medium">
              B.Sc. in Engineering, Computer Science and Engineering
            </p>
            <p className="text-gray-500 text-sm">CGPA: 3.16 / 4.00</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2011</time>
            <h3 className="text-lg font-semibold text-blue-700">
              Agricultural University College
            </h3>
            <p className="text-gray-700 font-medium">Science Group</p>
            <p className="text-gray-500 text-sm">CGPA: 4.90 / 5.00</p>
          </div>
          <hr />
        </li>
      </ul>
    </section>
  );
};

export default Education;
