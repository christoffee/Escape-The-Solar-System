var gameData = {
	general: {
		distanceTravelled: 0,
		activePlay: 0,
		civName: "ChrisTopia",
		targetPlanet: "Earth",
	},
	planet: {
		mercury: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : []
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : []
			},
			research: {
				level: 0,
				rate: 0,
				locations : [	]
			},
			terrafomed: false
		},
		venus: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : []
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : []
			},
			research: {
				level: 0,
				rate: 0,
				locations : []
			},
			terrafomed: true
		},
		mars: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : []
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : []
			},
			research: {
				level: 0,
				rate: 0,
				locations : []
			},
			terrafomed: false
		},
		earth: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : [[5,0,1.5,6],[3,0,1.5,6],[1,0,1.5,6],[4,0,1.5,6]]
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : [[0,1,2]]
			},
			research: {
				level: 0,
				rate: 0,
				locations : [0,1,2]
			},
			terrafomed: true
		},
		jupiter: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : []
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : []
			},
			research: {
				level: 0,
				rate: 0,
				locations : []
			},
			terrafomed: true
		},
		saturn: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : []
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : []
			},
			research: {
				level: 0,
				rate: 0,
				locations : [	]
			},
			terrafomed: false
		},
		uranus: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : []
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : []
			},
			research: {
				level: 0,
				rate: 0,
				locations : [	]
			},
			terrafomed: false
		},
		neptune: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : []
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : []
			},
			research: {
				level: 0,
				rate: 0,
				locations : [	]
			},
			terrafomed: false
		},
		pluto: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : []
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : []
			},
			research: {
				level: 0,
				rate: 0,
				locations : [	]
			},
			terrafomed: true
		}
	}
}

console.log(gameData);