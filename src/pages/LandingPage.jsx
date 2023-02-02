import React from "react";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  const pageData = [
    {
      layout: "hero",
    },

    {
      layout: "left_image",
      image: "../survey_animation.gif",
      h2: "Data, like oil, is a valuable resource. However, unlike oil, data leaks can be just as detrimental.",
      p: {
        type: "bullet_points",
        content_array: [
          {
            content:
              "Customize your surveys to effectively communicate with your customers, employees, or target audience using our pre-made templates",
          },
          {
            content:
              "Gain access to a library of expertly crafted sample questions to enhance the quality of your surveys",
          },
          {
            content:
              "Our survey tool provides you with the best practices to create even the most complex surveys",
          },
        ],
      },
    },

    // {
    //   layout: "right_image",
    //   image: "../survey_animation.gif",
    //   h2: "Data, like oil, is a valuable resource. However, unlike oil, data leaks can be just as detrimental.",
    //   p: {
    //     type: "bullet_points",
    //     content_array: [
    //       {
    //         content:
    //           "Customize your surveys to effectively communicate with your customers, employees, or target audience using our pre-made templates",
    //       },
    //       {
    //         content:
    //           "Gain access to a library of expertly crafted sample questions to enhance the quality of your surveys",
    //       },
    //       {
    //         content:
    //           "Our survey tool provides you with the best practices to create even the most complex surveys",
    //       },
    //     ],
    //   },
    // },
  ];
  return (
    <div className="font-nunito ">
      <div className="w-[80%] mx-auto">
        {pageData?.map((data, index) => {
          return (
            <div key={index}>
              {data?.layout === "hero" && (
                <section>
                  <div className="py-20 text-center">
                    <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold w-[90%] xl:w-[80%] 2xl:w-[70%] lg:leading-[3.5rem] xl:leading-[4rem] mx-auto text-[#1E1E1E] text-center">
                      Revolutionize your survey game with our AI-powered tool to
                      refine{" "}
                      <span className="font-extrabold inline-block  min-w-[120px] md:min-w-[150px] lg:min-w-[180px] xl:w-[250px] w-fit text-left  ">
                        <Typewriter
                          options={{
                            strings: ["Customer", "Product", "Employee"],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 55,
                            delay: 100,
                            pauseFor: 3500,
                          }}
                        />
                      </span>
                    </h1>

                    <p className="text-[#1E1E1E] py-20 sm:py-10 md:text-lg lg:text-xl md:w-[80%] mx-auto">
                      Ensure the security of your respondents' information with
                      our survey tool that prioritizes data protection and
                      privacy.
                    </p>

                    <div className="text-xs sm:text-sm md:text-md lg:text-lg  flex justify-center items-center gap-5">
                      <button className="py-3 sm:py-2 rounded-xl px-5 min-w-[100px]  text-white font-medium shadow-[#038bfe] shadow-md  bg-[#038BFE] active:scale-95 transition-all">
                        Go Premium
                      </button>
                      <button className="py-3 sm:py-2 rounded-xl px-5 min-w-[100px] active:scale-95 transition-all font-semibold border border-[#747474]">
                        Sign Up Free
                      </button>
                    </div>
                  </div>
                </section>
              )}

              {data?.layout === "left_image" && (
                <section className="flex flex-col md:flex-row gap-5 md:items-center">
                  <div className="flex-1">
                    <img
                      src="../survey_animation.gif"
                      alt=""
                      className="w-full"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl md:text-lg font-semibold mb-10">
                      {data?.h2}
                    </h2>
                    <div>
                      {data?.p?.type === "bullet_points" && (
                        <div className="my-5 ">
                          {data?.p?.content_array?.map(
                            (content_data, content_index) => {
                              return (
                                <div
                                  key={content_index}
                                  className="flex gap-2 items-start my-5"
                                >
                                  <div className="w-[6px] mt-2 rounded-full aspect-square bg-[#1e2124]"></div>
                                  <p className="w-[calc(100%-5px)] ">
                                    {content_data?.content}
                                  </p>
                                </div>
                              );
                            }
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
