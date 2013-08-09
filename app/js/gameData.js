var gameData = {
	general: {
		distanceTravelled: 0,
		activePlay: 0,
		civName: "ChrisTopia",
		targetPlanet: "Earth",
	},
	planet: {
		mars: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : [[8,0,1.5,6]]
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : [0,1,2]
			},
			research: {
				level: 0,
				rate: 0,
				locations : [0,1,2]
			}
		},
		earth: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : [[8,0,1.5,6]]
			},
			production: {
				resourcesGathered: 0,
				luxResources: 0,
				locations : [0,1,2]
			},
			research: {
				level: 0,
				rate: 0,
				locations : [0,1,2]
			}
		},
		jupiter: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : [[8,0,1.5,6]]
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
			}
		},
		saturn: {
			workforce: {
				generation: 0,
				food: 0,
				inspiration: 0,
				locations : [[8,0,1.5,6]]
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
			}
		}
	}
}

console.log(gameData);