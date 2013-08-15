var planets = {
            mercury:{ 
                  name: 'Mercury',  
                  distance: 3,
                  build: [
                        ['sky',"rgba(102, 104, 100, 0.8)","rgba(102, 102, 100, 0.5)",2.2, 2],
                        ['grass',"rgba(105,102,151, 1)","brown",2.25, 2.2],
                        ['mud',"rgba(102, 180, 100, 1)","rgba(151, 111, 110, 1)",30, 2.25],
                        ['core',"brown","orange",55, 7]
                  ],  
                  productionResources:{
                        name: "uranium",
                        colour: "rgba(0, 255, 0, 1)",
                        location: 8,
                        depth: 3,
                        build: [[ 2 , 4 , 1 ], 
                              [ 1.5 , 1.5 , 1 ], 
                              [ 3 , 3 , 0.5 ], 
                              [ 1 , 2 , 1 ]]
                  },  
                  luxuryResources:{
                        name: "gold",
                        colour: "yellow",
                        location: 5,
                        depth: 6,
                        build: [[ 2 , 4 , 0.5 ], 
                              [ 1.5 , 1 , 1 ], 
                              [ 3 , 5 , 0.5 ], 
                              [ 1 , 2 , 1 ]
                        ]
                  },
                  atmosphere: {
                        exists: false,
                        size:"1", 
                        colour:"rgba(255, 100, 100, 0.3)"
                  },
                  size:0.015
              },
            venus:{ 
                  name: 'Venus',  
                  distance: 2.8,
                  build: [
                        ['sky',"rgba(102, 0, 10, 0.8)","rgba(102, 102, 10, 0.5)",2.2, 2],
                        ['grass',"rgba(255,102,151, 1)","brown",2.25, 2.2],
                        ['mud',"rgba(102, 80, 0, 1)","rgba(51, 0, 0, 1)",30, 2.25],
                        ['core',"brown","orange",55, 7]
                  ],  
                  productionResources:{
                        name: "uranium",
                        colour: "rgba(0, 255, 0, 1)",
                        location: 8,
                        depth: 3,
                        build: [[ 2 , 4 , 1 ], 
                              [ 1.5 , 1.5 , 1 ], 
                              [ 3 , 3 , 0.5 ], 
                              [ 1 , 2 , 1 ]]
                  },  
                  luxuryResources:{
                        name: "gold",
                        colour: "yellow",
                        location: 5,
                        depth: 6,
                        build: [[ 2 , 4 , 0.5 ], 
                              [ 1.5 , 1 , 1 ], 
                              [ 3 , 5 , 0.5 ], 
                              [ 1 , 2 , 1 ]
                        ]
                  },
                  atmosphere: {
                        exists: false,
                        size:"1", 
                        colour:"rgba(255, 100, 100, 0.3)"
                  },
                  size:0.02
              },
		mars:{ 
	            name: 'Mars',  
                  distance: 2.5,
	            build: [
	            	['sky',"rgba(102, 0, 0, 0.8)","rgba(102, 102, 0, 0.5)",2.2, 2],
	            	['grass',"rgba(255,102,51, 1)","brown",2.25, 2.2],
	            	['mud',"rgba(102, 80, 0, 1)","rgba(51, 0, 0, 1)",30, 2.25],
	            	['core',"brown","orange",55, 7]
	            ],  
                  productionResources:{
                        name: "uranium",
                        colour: "rgba(0, 255, 0, 1)",
                        location: 8,
                        depth: 3,
                        build: [[ 2 , 4 , 1 ], 
                              [ 1.5 , 1.5 , 1 ], 
                              [ 3 , 3 , 0.5 ], 
                              [ 1 , 2 , 1 ]]
                  },  
                  luxuryResources:{
                        name: "gold",
                        colour: "yellow",
                        location: 5,
                        depth: 6,
                        build: [[ 2 , 4 , 0.5 ], 
                              [ 1.5 , 1 , 1 ], 
                              [ 3 , 5 , 0.5 ], 
                              [ 1 , 2 , 1 ]
                        ]
                  },
                  atmosphere: {
                        exists: false,
                        size:"1", 
                        colour:"rgba(255, 255, 255, 0.3)"
                  },
                  size:0.021
	        }, 
	      earth:{ 
	            name: 'Earth',  
                  distance: 2.2,
	            build: [
	            	['sky',"rgba(102, 255, 255, 0.5)","rgba(102, 255, 255, 1)",2, 2],
	            	['grass',"rgba(102, 204, 102, 1)","green",2.25, 2.2],
	            	['mud',"rgba(102, 51, 0, 1)","rgba(51, 25, 0, 1)",30, 2.25],
	            	['core',"yellow","orange",55, 12]
	            ],  
	            productionResources:{
                        name: "coal",
                        colour: "black",
                        location: 8,
                        depth: 3,
                        build: [[ 2 , 4 , 1 ], 
                              [ 1.5 , 1.5 , 1 ], 
                              [ 3 , 3 , 0.5 ], 
                              [ 1 , 2 , 1 ]]
                  },  
                  luxuryResources:{
                        name: "dimonds",
                        colour: "white",
                        location: 5,
                        depth: 6,
                        build: [[ 2 , 4 , 0.5 ], 
                              [ 1.5 , 1 , 1 ], 
                              [ 3 , 5 , 0.5 ], 
                              [ 1 , 2 , 1 ]
                        ]
                  },
            	atmosphere: {
                        exists: true,
            		size:"1", 
            		colour:"rgba(255, 255, 255, 0.3)"
            	},
                  size:0.02
	        }, 
	        jupiter:{ 
	            name: 'Jupiter',  
                  distance: 1.8,
	            build: [
	            	['sky',"rgba(255, 100, 0, 0.8)","rgba(255, 100, 0, 0.5)",2.2, 2],
	            	['grass',"rgba(255, 100, 0, 1)","orange",2.25, 2.2],
	            	['mud',"rgba(202, 101, 0, 1)","brown",30, 2.25],
	            	['core',"rgba(255, 55, 55, 1)","orange",55, 20]
	            ],    
                  productionResources:{
                        name: "uranium+",
                        colour: "rgba(100, 255, 0, 1)",
                        location: 8,
                        depth: 3,
                        build: [[ 2 , 4 , 1 ], 
                              [ 1.5 , 1.5 , 1 ], 
                              [ 3 , 3 , 0.5 ], 
                              [ 1 , 2 , 1 ]]
                  },  
                  luxuryResources:{
                        name: "platinum",
                        colour: "grey",
                        location: 5,
                        depth: 6,
                        build: [[ 2 , 4 , 0.5 ], 
                              [ 1.5 , 1 , 1 ], 
                              [ 3 , 5 , 0.5 ], 
                              [ 1 , 2 , 1 ]
                        ]
                  },
                  atmosphere: {
                        exists: false,
                        size:"1", 
                        colour:"rgba(255, 255, 255, 0.3)"
                  },
                  size:0.049
	        }, 
	       saturn: { 
	            name: 'Saturn',
                  distance: 1.6,  
                  build: [
                        ['sky',"rgba(191, 193, 19, 0.8)","rgba(191, 193, 194, 0.5)",2.2, 2],
                        ['grass',"rgba(142, 138, 38, 1)","rgba(50, 57, 54, 1)",2.25, 2.2],
                        ['mud',"rgba(153, 138, 10, 1)","rgba(70, 77, 74, 1)",30, 2.25],
                        ['core',"rgba(191, 161, 57,1)","orange",55, 20]
                  ],    
                  productionResources:{
                        name: "uranium+",
                        colour: "rgba(100, 255, 0, 1)",
                        location: 8,
                        depth: 3,
                        build: [[ 2 , 4 , 1 ], 
                              [ 1.5 , 1.5 , 1 ], 
                              [ 3 , 3 , 0.5 ], 
                              [ 1 , 2 , 1 ]]
                  },  
                  luxuryResources:{
                        name: "platinum",
                        colour: "grey",
                        location: 5,
                        depth: 6,
                        build: [[ 2 , 4 , 0.5 ], 
                              [ 1.5 , 1 , 1 ], 
                              [ 3 , 5 , 0.5 ], 
                              [ 1 , 2 , 1 ]
                        ]
                  },
                  atmosphere: {
                        exists: false,
                        size:"1", 
                        colour:"rgba(255, 255, 255, 0.3)"
                  },
                  size:0.04
	        }, 
             neptune: { 
                  name: 'Neptune',
                  distance: 1.4,  
                  build: [
                        ['sky',"rgba(91, 93, 199, 0.8)","rgba(91, 93, 194, 0.5)",2.2, 2],
                        ['grass',"rgba(42, 18, 188, 1)","rgba(50, 57, 154, 1)",2.25, 2.2],
                        ['mud',"rgba(53, 38, 110, 1)","rgba(70, 77, 74, 1)",30, 2.25],
                        ['core',"rgba(191, 161, 57,1)","orange",55, 20]
                  ],    
                  productionResources:{
                        name: "uranium+",
                        colour: "rgba(100, 255, 0, 1)",
                        location: 8,
                        depth: 3,
                        build: [[ 2 , 4 , 1 ], 
                              [ 1.5 , 1.5 , 1 ], 
                              [ 3 , 3 , 0.5 ], 
                              [ 1 , 2 , 1 ]]
                  },  
                  luxuryResources:{
                        name: "platinum",
                        colour: "grey",
                        location: 5,
                        depth: 6,
                        build: [[ 2 , 4 , 0.5 ], 
                              [ 1.5 , 1 , 1 ], 
                              [ 3 , 5 , 0.5 ], 
                              [ 1 , 2 , 1 ]
                        ]
                  },
                  atmosphere: {
                        exists: false,
                        size:"1", 
                        colour:"rgba(255, 255, 255, 0.3)"
                  },
                  size:0.025
              }, 
             uranus: { 
                  name: 'Uranus',
                  distance: 1.3,  
                  build: [
                        ['sky',"rgba(111, 50, 255    , 0.8)","rgba(211, 130, 294, 0.5)",2.2, 2],
                        ['grass',"rgba(142, 118, 255, 1)","rgba(50, 57, 255, 1)",2.25, 2.2],
                        ['mud',"rgba(53, 38, 110, 1)","rgba(70, 77, 74, 1)",30, 2.25],
                        ['core',"rgba(191, 161, 57,1)","orange",55, 20]
                  ],    
                  productionResources:{
                        name: "uranium+",
                        colour: "rgba(100, 255, 0, 1)",
                        location: 8,
                        depth: 3,
                        build: [[ 2 , 4 , 1 ], 
                              [ 1.5 , 1.5 , 1 ], 
                              [ 3 , 3 , 0.5 ], 
                              [ 1 , 2 , 1 ]]
                  },  
                  luxuryResources:{
                        name: "platinum",
                        colour: "grey",
                        location: 5,
                        depth: 6,
                        build: [[ 2 , 4 , 0.5 ], 
                              [ 1.5 , 1 , 1 ], 
                              [ 3 , 5 , 0.5 ], 
                              [ 1 , 2 , 1 ]
                        ]
                  },
                  atmosphere: {
                        exists: false,
                        size:"1", 
                        colour:"rgba(255, 255, 255, 0.3)"
                  },
                  size:0.027
              }
	    

};
console.log(planets);
