var planets = {
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
            		colour:"white"
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
                        ['sky',"rgba(191, 193, 194, 0.8)","rgba(191, 193, 194, 0.5)",2.2, 2],
                        ['grass',"rgba(142, 138, 138, 1)","rgba(50, 57, 54, 1)",2.25, 2.2],
                        ['mud',"rgba(153, 138, 110, 1)","rgba(70, 77, 74, 1)",30, 2.25],
                        ['core',"rgba(191, 161, 157,1)","orange",55, 20]
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
	        }
	    

};
console.log(planets);
