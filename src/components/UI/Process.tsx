import Image from "next/image";

const Process = () => {
  return (
    <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-lg text-center mx-auto sm:py-16 mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span className="inline-block mb-1 sm:mb-4">
          Seamless Painting Journey: Our Proven Six-Step Process
        </span>
        <div className="h-1 ml-auto duration-300 origin-left transform bg-[#7044e5] scale-x-30 group-hover:scale-x-100" />
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-[#5e22f4]">
                1
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Initial Consultation
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Begin with a detailed discussion to understand your painting
              needs, preferences, and any specific requirements.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded bg-[#40e1b6]">
                2
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Customized Proposal
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Based on the consultation, we{"'"}ll provide a tailored proposal
              outlining the scope of work, including materials, timelines, and
              cost estimates.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded  bg-deep-purple-accent-400 bg-[#5e22f4]">
                3
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Color and Design Selection
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Collaborate with our experts to choose the perfect colors and
              design elements that suit your space and personal style.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded md:text-white bg-[#40e1b6]">
                4
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Preparation Phase
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Our team will prepare the area by covering furniture, protecting
              floors, and addressing any repairs or priming necessary for a
              flawless finish.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded md:text-white bg-[#5e22f4] md:bg-deep-purple-accent-400">
                5
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Painting Execution
              </p>
            </div>
            <p className="text-sm text-gray-900">
              The skilled PaintHut team will apply high-quality paint using
              efficient techniques, ensuring precision and a stunning result.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded md:text-white bg-[#40e1b6] md:bg-deep-purple-accent-400">
                6
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Final Inspection and Client Approval
              </p>
            </div>
            <p className="text-sm text-gray-900">
              We conduct a thorough inspection, and once you{"'"}re satisfied
              with the results, we{"'"}ll finalize the project, leaving you with
              a beautifully painted space.
            </p>
          </div>
        </div>
        <div className="relative md:col-span-2 lg:col-span-2">
          <Image
            width={400}
            height={400}
            className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
            src="https://i.ibb.co/BBPF2yq/pexels-antoni-shkraba-6322368-1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
