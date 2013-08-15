var GameData = Backbone.Model.extend({
	defaults: {
		general: {
			distanceTravelled: 0,
			activePlay: 0,
			civName: "",
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
				terrafomed: false
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
				terrafomed: false
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
					locations : []
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
					locations : []
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
					locations : []
				},
				terrafomed: false
			}
		}
	},
	initialize: function(){
		
	}
});

var explorationData = new GameData();
