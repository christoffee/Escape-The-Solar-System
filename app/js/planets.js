var planets = {
		mars:{ 
	            name: 'Mars',  
	            build: [
	            	['sky',"rgba(102, 0, 0, 0.8)","rgba(102, 102, 0, 0.5)",2.2, 2],
	            	['grass',"rgba(255,102,51, 1)","brown",2.25, 2.2],
	            	['mud',"rgba(102, 80, 0, 1)","rgba(51, 0, 0, 1)",30, 2.25],
	            	['core',"brown","orange",55, 7]
	            ],  
	            resources: [
            		[ 'coal', 'black', 8 , 3 , 
            			[ 2 , 4 , 1 ], 
            			[ 1.5 , 1.5 , 1 ], 
            			[ 3 , 3 , 0.5 ], 
            			[ 1 , 2 , 1 ]
            		],
            		[ 'gold', 'yellow', 5 , 6 , 
            			[ 2 , 4 , 0.5 ], 
            			[ 1.5 , 1 , 1 ], 
            			[ 3 , 5 , 0.5 ], 
            			[ 1 , 2 , 1 ]
            		]
            	],
                  atmosphere: {
                        exists: false,
                        size:"1", 
                        colour:"white"
                  }
	        }, 
	      earth:{ 
	            name: 'Earth',  
	            build: [
	            	['sky',"rgba(102, 255, 255, 0.5)","rgba(102, 255, 255, 1)",2, 2],
	            	['grass',"rgba(102, 204, 102, 1)","green",2.25, 2.2],
	            	['mud',"rgba(102, 51, 0, 1)","rgba(51, 25, 0, 1)",30, 2.25],
	            	['core',"yellow","orange",55, 12]
	            ],  
	            resources: [
            		[ 'coal', 'black', 8 , 3 , 
            			[ 2 , 4 , 1 ], 
            			[ 1.5 , 1.5 , 1 ], 
            			[ 3 , 3 , 0.5 ], 
            			[ 1 , 2 , 1 ]
            		],
            		[ 'gold', 'yellow', 5 , 6 , 
            			[ 2 , 4 , 0.5 ], 
            			[ 1.5 , 1 , 1 ], 
            			[ 3 , 5 , 0.5 ], 
            			[ 1 , 2 , 1 ]
            		]
            	],
            	atmosphere: {
                        exists: true,
            		size:"1", 
            		colour:"white"
            	}
	        }, 
	        jupiter:{ 
	            name: 'Jupiter',  
	            build: [
	            	['sky',"rgba(102, 255, 255, 0.8)","rgba(102, 255, 255, 0.5)",2.2, 2],
	            	['grass',"rgba(102, 204, 102, 1)","green",2.25, 2.2],
	            	['mud',"rgba(102, 51, 0, 1)","rgba(51, 25, 0, 1)",30, 2.25],
	            	['core',"yellow","orange",55, 12]
	            ],  
	            resources: [
            		[ 'coal', 'black', 8 , 3 , 
            			[ 2 , 4 , 1 ], 
            			[ 1.5 , 1.5 , 1 ], 
            			[ 3 , 3 , 0.5 ], 
            			[ 1 , 2 , 1 ]
            		],
            		[ 'gold', 'yellow', 5 , 6 , 
            			[ 2 , 4 , 0.5 ], 
            			[ 1.5 , 1 , 1 ], 
            			[ 3 , 5 , 0.5 ], 
            			[ 1 , 2 , 1 ]
            		]
            	]
	        }, 
	       saturn: { 
	            name: 'Saturn',  
	            build: [
	            	['sky',"rgba(102, 255, 255, 0.8)","rgba(102, 255, 255, 0.5)",2.2, 2],
	            	['grass',"rgba(102, 204, 102, 1)","green",2.25, 2.2],
	            	['mud',"rgba(102, 51, 0, 1)","rgba(51, 25, 0, 1)",30, 2.25],
	            	['core',"yellow","orange",55, 12]
	            ],  
	            resources: [
            		[ 'coal', 'black', 8 , 3 , 
            			[ 2 , 4 , 1 ], 
            			[ 1.5 , 1.5 , 1 ], 
            			[ 3 , 3 , 0.5 ], 
            			[ 1 , 2 , 1 ]
            		],
            		[ 'gold', 'yellow', 5 , 6 , 
            			[ 2 , 4 , 0.5 ], 
            			[ 1.5 , 1 , 1 ], 
            			[ 3 , 5 , 0.5 ], 
            			[ 1 , 2 , 1 ]
            		]
            	]
	        }
	    

};

console.log(planets);