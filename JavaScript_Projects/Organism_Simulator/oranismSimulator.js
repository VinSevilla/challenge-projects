// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


//create factory function
const pAequorFactory = (specimenNum, dnaArray) => {
  return {
    _specimenNum: specimenNum,
    _dnaArray: dnaArray,
    //mutates given dna to another code
    mutate()
    {
      const dnaBases = ['A', 'T', 'C', 'G'];
      let newDna = this._dnaArray[0];
        while(newDna === this._dnaArray[0])
        {
          newDna = dnaBases[Math.floor(Math.random() * 4)];
        }
      this._dnaArray[0] = newDna;
      return this._dnaArray;  
    },

    //Compare DNA percentage
    compareDna(organism2){
        let similarBase = 0;
        for(let i = 0; i < this._dnaArray.length; i++)
        {
          if(this._dnaArray[i] === organism2._dnaArray[i])
          {
            similarBase++;
          }
        }

        let similarPercentage = ((similarBase/15)*100).toFixed(2);
        return `specimen #1 and specimen #2 have ${similarPercentage}% DNA in common.`;
    },

    //Check if 60% of strand are 'C' and 'G' Bases
    willLikelySurvive(){
       let willSurvive = false;
       const cgBases = this._dnaArray.filter(bases => {
        return (bases === 'C' || bases === 'G');
       });
      if (((cgBases.length/15)) >= 0.6){
        willSurvive = true;
      }
      return willSurvive;
    },
  
  }
}

//Populating an array with 30 organims with a 60% or more survival rate
const survivingOrganisms = [];

while (survivingOrganisms.length < 30) {
  const org = pAequorFactory(survivingOrganisms.length + 1, mockUpStrand());
  if (org.willLikelySurvive()) {
    survivingOrganisms.push(org);
  }
}

/* function testing
const org1 = pAequorFactory(1, mockUpStrand());
const org2 = pAequorFactory(2, mockUpStrand());
console.log(org1._specimenNum);
console.log(org1._dnaArray);
console.log();
console.log(org2._specimenNum);
console.log(org2._dnaArray);
console.log();
console.log(org1.compareDna(org2));
console.log(org1.willLikelySurvive());
*/

console.log(survivingOrganisms[3]._specimenNum);
console.log(survivingOrganisms[3]._dnaArray);






