"use strict";
//Your JavaScript goes in here
const nhcl = document.querySelector("#nhcl");
const microwave = document.querySelector(".microwave");
let count = "100%";

nhcl.addEventListener(
  "click",
  function () {
    let nhclCords = nhcl.getBoundingClientRect();
    let microwaveCords = microwave.getBoundingClientRect();
    console.log(nhclCords, microwaveCords);

    let nhclAspirinDistance =
      document.querySelector("#aspirin").getBoundingClientRect().right -
      document.querySelector("#nhcl").getBoundingClientRect().left;

    console.log("distance: ", nhclAspirinDistance);

    let windowCords = document
      .querySelector(".microwave > .store > .window")
      .getBoundingClientRect();

    if (count == "20%") count = "100%";
    else count = "20%";

    let anim = nhcl.animate(
      [
        {},
        {
          transform: `translate( ${
            microwaveCords.left - nhclCords.left + windowCords.width / 2
          }px, ${-microwaveCords.height / 4}px)`,
          opacity: count,
        },
      ],
      {
        duration: 1000,
        fill: "forwards",
      }
    );

    anim.onfinish = function () {
      // show 50° C on microwave display when nhcl is place inside it
      const microwaveDisplay = document.querySelector(".microwave .display");

      microwaveDisplay.style.color = "green";
      microwaveDisplay.style.textAlign = "center";
      microwaveDisplay.textContent = "50° C";

      nhcl.addEventListener(
        "click",
        function () {
          let nhclCords = nhcl.getBoundingClientRect();
          let aspirinCords = aspirin.getBoundingClientRect();
          console.log(nhclCords, aspirinCords);

          if (count == "20%") count = "100%";
          else count = "20%";

          // switch off microwave display
          microwaveDisplay.textContent = "";

          let anim = nhcl.animate(
            [
              {
                // transform: `translate( ${
                //   microwaveCords.left - nhclCords.left + windowCords.width / 2
                // }px, ${-microwaveCords.height / 4}px)`,
              },
              {
                transform: `translate( ${
                  // nhclCords.left - aspirinCords.left
                  nhclAspirinDistance - aspirinCords.width / 4
                }px, ${-aspirinCords.height}px)`,
                opacity: count,
              },
            ],
            {
              duration: 1000,
              fill: "forwards",
            }
          );

          // pour 90% hot nhcl into aspirin
          anim.onfinish = function () {
            let anim = nhcl.animate(
              [
                {},
                {
                  transform: `translate( ${
                    nhclAspirinDistance - aspirinCords.width / 4
                  }px, ${-aspirinCords.height}px) rotate(-45deg)`,
                },
                {
                  transform: `translate( ${
                    nhclAspirinDistance - aspirinCords.width / 4
                  }px, ${-aspirinCords.height}px) rotate(-45deg)`,
                },
                {
                  transform: `translate( ${
                    nhclAspirinDistance - aspirinCords.width / 4
                  }px, ${-aspirinCords.height}px) rotate(-45deg)`,
                },
                {
                  transform: `translate( ${
                    nhclAspirinDistance - aspirinCords.width / 4
                  }px, ${-aspirinCords.height}px)`,
                },
              ],
              { duration: 1000 }
            );

            nhcl.childNodes[1].animate(
              [
                {},
                {
                  bottom: "-85px",
                },
              ],
              {
                duration: 1000,
                fill: "forwards",
              }
            );

            aspirin.childNodes[0].animate(
              [
                {},
                {
                  bottom: "-60px",
                },
              ],
              {
                duration: 1000,
                fill: "forwards",
              }
            );

            // pour remaining 10% hot nhcl into aspirin
            anim.onfinish = function () {
              aspirin.addEventListener("click", shakeAspirin, { once: true });

              nhcl.addEventListener(
                "click",
                function () {
                  nhcl.animate(
                    [
                      {},
                      {
                        transform: `translate( ${
                          nhclAspirinDistance - aspirinCords.width / 4
                        }px, ${-aspirinCords.height}px) rotate(-45deg)`,
                      },
                      {
                        transform: `translate( ${
                          nhclAspirinDistance - aspirinCords.width / 4
                        }px, ${-aspirinCords.height}px) rotate(-45deg)`,
                      },
                      {
                        transform: `translate( ${
                          nhclAspirinDistance - aspirinCords.width / 4
                        }px, ${-aspirinCords.height}px) rotate(-45deg)`,
                      },
                      {
                        transform: `translate( ${
                          nhclAspirinDistance - aspirinCords.width / 4
                        }px, ${-aspirinCords.height}px)`,
                      },
                    ],
                    { duration: 600 }
                  );

                  nhcl.childNodes[1].animate(
                    [
                      {},
                      {
                        bottom: "-100px",
                      },
                    ],
                    {
                      duration: 1000,
                      fill: "forwards",
                    }
                  ).onfinish = function () {
                    aspirin.addEventListener("click", shakeAspirin, {
                      once: true,
                    });

                    // move empty nhcl container to its original position or out of the screen
                    nhcl.animate(
                      [
                        {},
                        {
                          transform: "translate(300px, 300px)",
                        },
                      ],
                      { duration: 500, fill: "forwards" }
                    ).onfinish = function () {
                      // replace nhcl with chemical
                      nhcl.setAttribute("data-after", "FERRIC NITRATE");

                      console.log("Child", nhcl.childNodes);
                      // nhcl.childNodes[1].bottom = "-10px";

                      nhcl.animate(
                        [
                          {
                            transform: "translate(0,0)",
                            opacity: "0%",
                          },
                          {
                            transform: "translate(0,0)",
                            opacity: "100%",
                          },
                        ],
                        {
                          duration: 1000,
                          fill: "forwards",
                        }
                      );

                      nhcl.childNodes[1].animate(
                        [
                          {},
                          {
                            bottom: "-50px",
                          },
                        ],
                        {
                          duration: 0,
                          fill: "forwards",
                        }
                      );

                      // anim.onfinish = function () {
                      //   // pour 5ml ferric nitrate in each cylinder
                      // take nhcl + aspirin sample in cylinders
                      animateCylinder(zero, aspirin, -60);
                      animateCylinder(ten, aspirin, -70);
                      animateCylinder(twenty, aspirin, -80);
                      animateCylinder(thirty, aspirin, -90);
                      // };
                    };

                    // take nhcl + aspirin sample in cylinders
                    // animateCylinder(zero, aspirin, -60);
                    // animateCylinder(ten, aspirin, -70);
                    // animateCylinder(twenty, aspirin, -80);
                    // animateCylinder(thirty, aspirin, -90);
                  };

                  aspirin.childNodes[0].animate(
                    [
                      {},
                      {
                        bottom: "-50px",
                      },
                    ],
                    {
                      duration: 1000,
                      fill: "forwards",
                    }
                  );
                },
                { once: true }
              );
            };
          };
        },
        { once: true }
      );
    };
  },
  { once: true }
);

const ethanol = document.querySelector("#ethanol");
const aspirin = document.querySelector("#aspirin");
// const ethanol = document.querySelector("#ethanol")
let ethanolLevel = -50;
let aspirinLevel = -90;

ethanol.addEventListener(
  "click",
  function () {
    let ethanolCords = ethanol.getBoundingClientRect();
    let aspirinCords = aspirin.getBoundingClientRect();

    const anim = ethanol.animate(
      [
        {},
        {
          transform: `translate( ${
            aspirinCords.left - ethanolCords.left - ethanolCords.width / 1.2
          }px, ${-aspirinCords.height}px)`,
        },
      ],
      {
        duration: 1000,
        fill: "forwards",
      }
    );

    anim.onfinish = function () {
      ethanol.animate(
        [
          {
            transform: `translate( ${
              aspirinCords.left - ethanolCords.left - ethanolCords.width / 1.2
            }px, ${-aspirinCords.height}px)`,
          },
          {
            transform: `translate( ${
              aspirinCords.left - ethanolCords.left - ethanolCords.width / 1.2
            }px, ${-aspirinCords.height}px) rotate(45deg)`,
          },
          {
            transform: `translate( ${
              aspirinCords.left - ethanolCords.left - ethanolCords.width / 1.2
            }px, ${-aspirinCords.height}px)`,
          },
        ],
        {
          duration: 1000,
        }
      );

      ethanolLevel -= 10;

      ethanol.childNodes[0].animate(
        [
          {},
          {
            bottom: `${ethanolLevel}px`,
          },
        ],
        {
          duration: 1000,
          fill: "forwards",
        }
      );

      aspirinLevel += 10;

      aspirin.childNodes[0].animate(
        [
          {},
          {
            bottom: `${aspirinLevel}px`,
          },
        ],
        {
          duration: 1000,
          fill: "forwards",
        }
      );
    };

    aspirin.addEventListener(
      "click",
      function () {
        // shake aspirin
        aspirin.animate(
          [
            {},
            {
              transform: `rotate(35deg)`,
            },
            {
              transform: `rotate(-35deg)`,
            },
            {
              transform: `rotate(35deg)`,
            },
            {},
            // {},
          ],
          { duration: 300, iterations: 3 }
        );

        // move to initial position
        ethanol.animate(
          [
            {},
            {
              transform: "translate(0,0)",
            },
          ],
          { duration: 1000, fill: "forwards" }
        );
      },
      { once: true }
    );
  },
  { once: true }
);

function shakeAspirin() {
  aspirin.animate(
    [
      {},
      {
        transform: `rotate(35deg)`,
      },
      {
        transform: `rotate(-35deg)`,
      },
      {
        transform: `rotate(35deg)`,
      },
      {},
      // {},
    ],
    { duration: 300, iterations: 3 }
  );
}

// animation for cylinders - 0, 10, 20, 30
function animateCylinder(cylinder, solution, solutionLevel) {
  // const zero = document.querySelector("#zero");
  // const ten = document.querySelector("#ten");
  // const twenty = document.querySelector("#twenty");
  // const thirty = document.querySelector("#thirty");

  let cylinderCords = cylinder.getBoundingClientRect();
  let solutionCords = solution.getBoundingClientRect();
  let nhclCords = nhcl.getBoundingClientRect();

  cylinder.addEventListener(
    "click",
    function () {
      solution.animate(
        [
          {},
          {
            transform: `translate( ${
              cylinderCords.right - solutionCords.left
            }px, ${
              cylinderCords.top - solutionCords.top - solutionCords.height
            }px)`,
          },
          {
            transform: `translate( ${
              cylinderCords.right - solutionCords.left
            }px, ${
              cylinderCords.top - solutionCords.top - solutionCords.height
            }px) rotate(-45deg)`,
          },
          {
            transform: `translate( ${
              cylinderCords.right - solutionCords.left
            }px, ${
              cylinderCords.top - solutionCords.top - solutionCords.height
            }px) rotate(-45deg)`,
          },
          {
            transform: `translate( ${
              cylinderCords.right - solutionCords.left
            }px, ${
              cylinderCords.top - solutionCords.top - solutionCords.height
            }px)`,
          },
          {},
        ],
        {
          duration: 2000,
          iterations: 1,
        }
      );

      solution.childNodes[0].animate(
        [
          {},
          {
            bottom: `${solutionLevel}px`,
          },
        ],
        {
          duration: 1000,
          fill: "forwards",
        }
      );

      // fill cylinders
      cylinder.childNodes[0].animate(
        [
          {},
          {
            bottom: "-150px",
          },
        ],
        {
          duration: 1000,
          fill: "forwards",
        }
      ).onfinish = function () {
        // ferric nitrate
        cylinder.addEventListener(
          "click",
          function () {
            nhcl.animate(
              [
                {},
                {
                  transform: `translate( ${
                    cylinderCords.right - nhclCords.left
                  }px, ${
                    cylinderCords.top - nhclCords.top - nhclCords.height
                  }px)`,
                },
                {
                  transform: `translate( ${
                    cylinderCords.right - nhclCords.left
                  }px, ${
                    cylinderCords.top - nhclCords.top - nhclCords.height
                  }px) rotate(-45deg)`,
                },
                {
                  transform: `translate( ${
                    cylinderCords.right - nhclCords.left
                  }px, ${
                    cylinderCords.top - nhclCords.top - nhclCords.height
                  }px) rotate(-45deg)`,
                },
                {
                  transform: `translate( ${
                    cylinderCords.right - nhclCords.left
                  }px, ${
                    cylinderCords.top - nhclCords.top - nhclCords.height
                  }px)`,
                },
                {},
              ],
              {
                duration: 2000,
                iterations: 1,
              }
            );

            nhcl.childNodes[1].animate(
              [
                {},
                {
                  bottom: `${solutionLevel - 10}px`,
                },
              ],
              {
                duration: 1000,
                fill: "forwards",
              }
            );

            // fill cylinders
            cylinder.childNodes[0].animate(
              [
                {},
                {
                  bottom: "-130px",
                },
              ],
              {
                duration: 1000,
                fill: "forwards",
              }
            );
          },
          { once: true }
        );
      };
    },
    { once: true }
  );
}
