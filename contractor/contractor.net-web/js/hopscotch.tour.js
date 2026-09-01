// Define the tour!
var tour = {
  id: "hello-hopscotch",
  steps: [
    {
      title: "Load the assembly",
      content: "First, you have to load the assembly that will be analyzed.",
      target: "tutorial1",
      placement: "bottom",
    },
    {
      title: "(Optional) Load the contracts",
      content: "If the assembly does not contain any contracts, a Contract Reference Assembly must be supplied as well.",
      target: "tutorial1",
      placement: "bottom",
      xOffset: 20,
      yOffset: 0,
    },
    {
      title: "Choose the type",
      content: "Once the assembly is loaded, all the types available for the analysis will show up.",
      target: "tutorial1",
      placement: "right",
      xOffset: 180,
      yOffset: 100,
    },
    {
      title: "Select the methods",
      content: "Having selected the type, you can choose which public methods will be used for the analysis.",
      target: "tutorial1",
      placement: "right",
      xOffset: 100,
      yOffset: 370,
    },
    {
      title: "Choose the engine",
      content: "Currently, we support two different engines, Corral and Code Contracts.",
      target: "tutorial1",
      placement: "bottom",
      xOffset: 320,
      yOffset: 0
    },
    {
      title: "Start the analysis",
      content: "Ready, set, go!",
      target: "tutorial1",
      placement: "bottom",
      xOffset: 90,
      yOffset: 0
    },
    {
      title: "The EPA",
      content: "As the algorithm discovers new states or transitions, they will appear in the EPA.",
      target: "tutorial1",
      placement: "top",
      xOffset: 700,
      yOffset: 200
    },
  ],
  showPrevButton: true,
};

// Start the tour!
//hopscotch.startTour(tour);
