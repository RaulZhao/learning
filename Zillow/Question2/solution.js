// Write a method, populationGrowth(simulationLength) that determines how many amoebas will exist after simulationLength given the scenario below. Write the method using javascript. Attach any extra/scratch work you may have used to solve.
// At year 0 a baby amoeba is added to the new population.
// At the turn of each following year a new population is created following these rules:
// 1) An adult amoeba will exist in the new population and add a new baby amoeba to new population 2) A baby amoeba will exist in the new population as an adult amoeba
// Given simulationLength how many amoebas will exist after simulationLength years?

/**
 * babyAmoebaNum means total baby amoebas currently.
 * adultAmoebaNum means total adult amoebas currently.
 * Each year all baby amoebas will become adults, and all adult amoebas will generate new baby amoebas
 */
function getPopulationNum (simulationYears) {
  if (simulationYears < 0) {
    return -1;
  }
  let babyAmoebaNum = 1;
  let adultAmoebaNum = 0;

  for(let i=1; i <= simulationYears; i++) {
    let currentAdultAmoebaNum = adultAmoebaNum;
    adultAmoebaNum += babyAmoebaNum;
    babyAmoebaNum = currentAdultAmoebaNum
  }

  return babyAmoebaNum + adultAmoebaNum;
}
